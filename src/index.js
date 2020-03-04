const mountCommand = require('./factory/mountCommand')
const newProcess = require('./lib/newProcess')
const clearContent = require('./lib/clearContent')
const formatContent = require('./lib/formatContent')

// @TODO Throw away and redo this code
async function main(path, gateway, enterprise, username, password, commands) {
  try {
    const command = mountCommand
      .connectionString(path, gateway, enterprise, username, password)
      .exec(commands)

    const outputServerManager = await newProcess(command)
    const cleanOutput = clearContent(outputServerManager)
    return formatContent(cleanOutput)
  } catch (err) {
    return err
  }
}

module.exports = main
