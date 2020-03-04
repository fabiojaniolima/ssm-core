const { exec } = require('child_process')

/**
 * It delegates to the operating system the execution of the instruction passed as a parameter
 * @param {string} command Instruction to be executed on the operating system
 * @returns {Promise} Resolves to a success or error string
 */
const newProcess = command => {
  return new Promise((resolve, reject) => {
    exec(command, (_, stdout, stderr) => {
      if (stderr) reject(stderr)

      resolve(stdout)
    })
  })
}

module.exports = newProcess
