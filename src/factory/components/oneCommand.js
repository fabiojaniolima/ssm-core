const oneCommand = (server, action, components) => {
  let command = ''

  if (server) command += `/s ${server} `

  command += `/b /c "${action} `

  if (components.length) command += components[0]

  return command.trim() + '"'
}

module.exports = oneCommand
