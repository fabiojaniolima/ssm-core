const oneCommand = (server, action, component) => {
  let command = `/s ${server} /b /c "${action} `

  if (component) command += `${component} `

  return command.trim() + '"'
}

module.exports = oneCommand
