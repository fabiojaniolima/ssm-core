const oneCommand = require('./components/oneCommand')

class MountCommand {
  connectionString(path, gateway, enterprise, username, password) {
    if (!(path && gateway && enterprise && username && password))
      throw 'ConnectionString expects 5 mandatory parameters.'

    this.command = `${path} /g ${gateway} /e ${enterprise} /u ${username} /p ${password} `

    return this
  }

  exec(commands) {
    const { action, server, components } = Object.assign(
      {
        action: null,
        server: null,
        components: [],
      },
      commands
    )

    if (!action) throw 'It is mandatory to inform the action to be performed.'

    if (components.length === 0 && !action.match(/^list/))
      throw 'For this type of action, it is necessary to inform a component name.'

    if (components.length === 0 || typeof components[0] === 'string') {
      if (components.length === 0 || components.length === 1) {
        return this.command + oneCommand(server, action, components)
      }
    }

    // @TODO Implement a method that allows interaction over various components
    //return manyCommands(commands)
  }
}

module.exports = new MountCommand()
