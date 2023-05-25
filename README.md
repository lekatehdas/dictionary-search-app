# dictionary-search-app
A dictionary search app that allows users to search words using the Datamuse API and fetch definitions from 
the DictionaryAPI. This app is built with React.

## Table of Contents

- [Installation](#installation)
- [Project Structure](#Project Structure)
- [Usage](#usage)
- [Development](#development)
- [Testing](#testing)
- [Build](#build)
- [License](#license)

## Installation

- Clone the repository:
- git clone https://github.com/your-username/your-repo.git
- cd your-repo
- npm install

## Project Structure
dictionary-search-app
  - tests (Test files)
  - dist (Built static files)
  - coverage (Code coverage reports)
  - public
  - src
    - assets
    - components
      - pages
    - models
    - services
  - README.md


## Usage
There is a searchbar, the input there is send to https://api.datamuse.com/sug. 
When there are results they will be displayed in the list below. Click an item, and you will be directed
to a "Details page". This page calls https://api.dictionaryapi.dev/api/v2/entries/en/ for definitions,
which will be displayed there.

## Development
To run development in your CLI run command __npm run dev__

## Testing
For testing run command __npm test__ in your CLI, this will also generate a coverage report.

## Build
To create a build run __npm run build__ in your CLI.
After building the project, the dist/ directory will contain your built static files.

Depending on your hosting platform, there may be different steps to deploy the build. Below are a few examples:

## Licence
This project is licensed under the *MIT License*.