#!/usr/bin/env node

'use strict';
const program = require('commander');
const inquirer = require('inquirer');
const colors = require('colors');
const figlet = require('figlet');

/*******************************************/

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
      {
        type: 'input',
        name: 'page_name',
        message: 'Nome da página (Ex.: "Shopmaior"):'
      },
      {
        type: 'input',
        name: 'page_slug',
        message: 'Slug da página (Ex.:"/nomedapagina"): ',
        default: function(answers) {
          return normalizeSlug(answers.page_name)
        },
        transformer:  function(pageSlug, answers, flags) {
          const page = `/${normalizeSlug(pageSlug)}`;
          return page;
        },
        filter: function(val) {
          return normalizeSlug(val)
        }
      }
    ])
    .then(answers => {
      console.log(JSON.stringify(answers, null, '  '));
    });


// allow commander to parse `process.argv`
program.parse(process.argv);