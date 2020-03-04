/**
 * Faz o parse do título das colunas e retorna seu conteúdo, posição inicial e final na string
 * @param {Array} _content
 * @returns {Array}
 */
const columnsTitle = _content => {
  const columns = []
  let initialPosition = 0

  _content[1]
    .trim()
    .split('  ')
    .map(title => {
      columns.push({
        name: _content[0].substr(initialPosition, title.length).trim(),
        start: initialPosition,
        end: title.length,
      })

      initialPosition += title.length + 2
    })

  return columns
}

/**
 * Faz o parse do conteúdo, associado o valor a sua respectiva coluna
 * @param {string} _content
 * @param {Array} _columns
 * @returns {Array}
 */
const syncTitleContent = (_content, _columns) => {
  const result = []

  _content.splice(2).forEach(comp => {
    _columns.map(column => {
      item[column.name] = comp.substr(column.start, column.end).trim()
    }, (item = {}))

    result.push(item)
  })

  return result
}

/**
 * Retorna um objeto indicando se o conteúdo é referente a um sucesso ou não,
 * bem como o conteúdo propriamente dito
 * @param {string} serverManagerOutput
 * @returns {Object}
 */
module.exports = serverManagerOutput => {
  const { success, content } = serverManagerOutput

  if (!Array.isArray(content)) {
    return {
      success,
      content: content,
    }
  }

  if (success === false) {
    return serverManagerOutput
  }

  const columns = columnsTitle(content)

  return {
    success,
    content: syncTitleContent(content, columns),
  }
}
