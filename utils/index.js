const fs = require("fs")
const inquirer = require("inquirer")

const filename = "sidebars.js"

const questions = [
  {
    type: "list",
    name: "topic",
    message: "TIL Topic?",
    choices: [
      "React",
      "CSS",
      "JS",
      "TS",
      "DevOps",
      "Cloud",
      "Python",
      "DS",
      "Finance",
      "PM",
    ],
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
  const newFileName = `${topic}-${lowerTitle}`

  fs.writeFile(
    `docs/${newFile}`,
    `---\nid: ${newFileName}\ntitle: ${title}\n---\n---\n_References_:\n-`,
    (err) => {
      if (err) return console.log(err)
      console.log("File Successfully Created!")
    }
  )
  fs.appendFile(filename, `"${newFileName}"`, (err) => {
    if (err) return console.log(err)
    console.log("File Successfully Appended!")
  })
})
