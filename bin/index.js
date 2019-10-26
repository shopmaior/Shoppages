#!/usr/bin/env node

'use strict';
const program = require('commander');
const inquirer = require('inquirer');
const colors = require('colors');
const figlet = require('figlet');
const fs = require('fs');
const path = require('path');

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

program
  console.log(
    figlet.textSync('Shoppages', { horizontalLayout: 'full' })
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

      // Cria diretório
      const PAGES_PATH = path.resolve(__dirname, '..', 'src', 'pages');
      const page_path = path.resolve(PAGES_PATH, answers.page_slug);
      // console.log(page_path);
      fs.mkdir(page_path, { recursive: true }, (err) => {
        if (err) throw err;
      });
    });


// allow commander to parse `process.argv`
program.parse(process.argv);