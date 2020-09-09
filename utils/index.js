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
    fs.appendFile(filename, `${newFile}`, (err) => {
      if (err) return console.log(err)
      console.log("File Successfully Appended!")
    })
    rl.close()
  })
})
