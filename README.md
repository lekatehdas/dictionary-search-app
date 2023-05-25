# dictionary-search-app
A dictionary search app that allows users to search words using the Datamuse API and fetch definitions from 
the DictionaryAPI. This app is built with React.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Testing](#testing)
- [Build](#build)
- [License](#license)

## Installation
With CLI
- `git clone https://github.com/lekatehdas/dictionary-search-app`
- `cd dictionary-search-app`
- `npm install`

## Usage
Start page or "Search Page" has a searchbar, the input there is send to https://api.datamuse.com/sug. 
When there are results, they will be displayed in the list below the searchbar. Click an item in the list, will direct
you to a "Details page". This page calls https://api.dictionaryapi.dev/api/v2/entries/en/ for the definitions,
which will be displayed there, in the case that there are no results, a warning card will be shown.

## Development
To run development in your CLI type `npm run dev`

## Testing
For testing run `npm test` in your CLI, this will also generate a coverage report.

## Build
To create a build run `npm run build` in your CLI.
After building the project, the dist/ directory will contain your built static files.

Depending on your hosting platform, there may be different steps to deploy the build. Below are a few examples:

## Licence
This project is licensed under the *MIT License*.