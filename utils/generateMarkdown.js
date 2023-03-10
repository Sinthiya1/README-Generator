// function to generate markdown for README
function generateMarkdown(data) {

  return `
  # ${data.title}
   <h1 align="center">📚${data.title}📚</h1>

  ## Description

  ${data.description}
  
  ## Table of Contents

- [Usage](#usage)
- [Installation](#installation)
- [License](#license)
- [Contribute](#contribute)
- [Test](#test)
- [Questions](#questions)

## Usage

${data.usage}

## Installation

${data.installation}

## License

[![${data.license}](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contribute

😺 <a href="https://github.com/${data.contribute}/README-Generator">${data.contribute}</a>

## Test

${data.test}

## Questions

If you have any questions contact me in the given information below:

💌 [Email](mailto:${data.questions}) 💌


`;
}

module.exports = generateMarkdown;
