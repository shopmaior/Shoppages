#!/usr/bin/env node

'use strict';
const program = require('commander');
const inquirer = require('inquirer');
const chalk = require('chalk');
const figlet = require('figlet');
const fs = require('fs-extra');
const path = require('path');
const os = require('os');
const util = require('util');

/*******************************************/

// Função para normalização de texto
function normalizeSlug(slug) {
  // Remove accents
  const withoutAccents = slug.normalize("NFD").replace(/[\u0300-\u036f]/g, '');
  // Remove special characters
  const withoutSpecialChar = withoutAccents.replace(/[^\w\s]/gi, '');
  // Remove spaces
  const withoutSpaces = withoutSpecialChar.replace(/ /g, '');
  // To lower case and return
  return withoutSpaces.toLowerCase();
}

program.version('0.0.1');

let projectName;

program
  console.log(
    chalk.blue(
      figlet.textSync('Shoppages', { horizontalLayout: 'full' })
    )
  );
  console.log("\n");

  inquirer
    .prompt([
      // Nome da página
      {
        type: 'input',
        name: 'page_name',
        message: 'Nome da página (Ex.: "Shopmaior"):'
      },
      // Slug da página
      {
        type: 'input',
        name: 'page_slug',
        message: 'Slug da página (Ex.:"/nomedapagina"): ',
        // Utiliza o nome da página para montar slug
        default: function(answers) {
          return normalizeSlug(answers.page_name)
        },
        // Retorna as alterações em tempo real no input visual, mas não altera resposta.
        transformer:  function(pageSlug, answers, flags) {
          const page = `/${normalizeSlug(pageSlug)}`;
          return page;
        },
        // As alterações feitas aqui serão refletidas na reesposta
        filter: function(val) {
          return normalizeSlug(val)
        }
      },
      // Tipo de página
      {
        type: 'list',
        name: 'page_type',
        message: 'Tipo de página:',
        choices: ['Landing page']
      },
      // Template da página
      {
        type: 'list',
        name: 'page_template',
        message: 'Template da página:',
        choices: ['default']
      }
    ])
    .then(answers => {
      console.log(JSON.stringify(answers, null, '  '));

      // PATH PAGES
      const PAGES_PATH = path.resolve(__dirname, '..', 'src', 'pages');
      
      // Copia CLA_TEMPLATE
      const model_page = path.resolve(PAGES_PATH, 'acme');
      const new_page = path.resolve(PAGES_PATH, answers.page_slug);
      const new_page_config = path.resolve(PAGES_PATH, answers.page_slug, 'config');
      
      try {
        fs.copySync(model_page, new_page)
        console.log('success!')
      } catch (err) {
        console.error(err)
      }

      // Config model
      const configModel = {
        config: {
          page_name: answers.page_name,
          page_slug: answers.page_slug,
          page_description: `Página da ${answers.page_name}`
        },
      
        // Deprecated
        dataPage: {
          name: answers.page_name, 
          logotype: "#"
        },
      
        // NAVBAR
        navBarAppearance: {
          style:  "light",  // ligth or dark
          fixed:  "",       // top or bottom
          sticky: "",       // top or bottom
        },
      
        navItems: [
          {
            slug: "home", 
            title: "Inicio"
          },
          {
            slug: "about", 
            title: "Sobre"
          },
        ],
      
        // HEADER
        headerAppearance: {
          type: "default",
          classes: [
            "bg-primary", // https://getbootstrap.com.br/docs/4.1/utilities/colors/#cores-de-fundo 
            "text-white"  // https://getbootstrap.com.br/docs/4.1/utilities/colors/#cores
          ]
        },
      
        // FOOTER
        footerAppearance: {
          type: "default",
          classes: [
            "bg-dark",
          ],
        },
      };

      fs.writeFileSync(
        path.join(new_page_config, 'index.js'),
        // JSON.stringify(configModel, null, 2) + os.EOL
        `module.exports = ${ util.inspect(configModel) }`,
        'utf-8'
      );
      
    });


// allow commander to parse `process.argv`
program.parse(process.argv);