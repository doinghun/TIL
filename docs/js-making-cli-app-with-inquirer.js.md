---
id: js-making-cli-app-with-inquirer.js.md
title: Making CLI app with Inquirer.js
---

## Usign Inquirer.js vs readline

## Example

Inquirer.js
```js
const fs = require("fs")
const inquirer = require("inquirer")

const filename = "sidebars.js"

const questions = [
  {
    type: "list",
    name: "topic",
    message: "TIL Topic?",
    choices: ["React", "CSS", "JS", "TS"],
    filter: function (val) {
      return val.toLowerCase()
    },
  },
  {
    type: "input",
    name: "title",
    message: "TIL Title?",
  },
]
inquirer.prompt(questions).then((answers) => {
  const { topic, title } = answers
  const lowerTitle = title.toLowerCase().replace(/ /g, "-")
  const newFile = `${topic}-${lowerTitle}.md`
  fs.writeFile(
    `docs/${newFile}`,
    `---\nid: ${newFile}\ntitle: ${title}\n---`,
    (err) => {
      if (err) return console.log(err)
      console.log("File Successfully Created!")
    }
  )
  fs.appendFile(filename, `"${newFile}"`, (err) => {
    if (err) return console.log(err)
    console.log("File Successfully Appended!")
  })
})
```

Using built-in readline

```js
const fs = require("fs")
const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const filename = "sidebars.js"

rl.question(`TIL Topic? `, (topic) => {
  rl.question(`TIL Title? `, (title) => {
    let topicLower = topic.replace(/\s+/g, "-").toLowerCase()
    let titleLower = title.replace(/\s+/g, "-").toLowerCase()
    let newFile = `${topicLower}-${titleLower}.md`
    fs.writeFile(
      `docs/${newFile}`,
      `---\nid: ${newFile}\ntitle: ${title}\n---`,
      (err) => {
        if (err) return console.log(err)
        console.log("File Successfully Created!")
      }
    )
  fs.appendFile(filename, `"${newFile}"`, (err) => {
    if (err) return console.log(err)
    console.log("File Successfully Appended!")
  })
})

```

- Inquirer provides useful methods and cleaner code