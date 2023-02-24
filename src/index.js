const { readFileInsertToBD } = require('./controller/read-file-and-insert-to-bd')


readFileInsertToBD('t')

console.log('Fim da migração dos dados de municípios !!!');
// process.exit()