/**
 * Faz a limpeza do corpo da mensagem em caso de erro
 * @param {string} _content
 * @returns {string}
 */
const clearError = _content => {
  if (_content.match(/Fatal error /g)) {
    return 'Fatal error!'
  }

  return _content
    .split('\r\n')
    .filter(_content => _content !== '')
    .slice(1)
    .join('\r\n')
}

/**
 * Faz a limpeza do corpo da mensagem em caso de sucesso
 * @param {string} _content
 * @returns {Array}
 */
const clearContent = _content => {
  if (_content.match(/Command completed successfully./g)) {
    return 'Command completed successfully.'
  }

  let content = _content.substring(
    _content.match(/srvrmgr.*>/).index,
    _content.lastIndexOf(/srvrmgr.*>/).index
  )

  content = content.replace(/\d+(\s\w+){2}\./g, '')

  return content
    .split('\r\n')
    .filter(content => content !== '')
    .slice(1, -1)
}
/**
 * Remove o banner (cabeçalho e rodapé) retornados pelo Siebel Server Manager
 * @param {string} _content
 * @returns {Object}
 */
module.exports = ({ success, content }) => {
  if (content.match(/Error \d+ \w+\./g)) {
    return {
      success: false,
      content: content.match(/.*SVR-\d+: \w+.*|Error \d+ \w+.*/g).join('\r\n'),
    }
  }

  content = success ? clearContent(content) : clearError(content)

  return {
    success,
    content,
  }
}
