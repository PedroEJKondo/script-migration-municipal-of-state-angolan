
async function insert(db, row, trx = null) {

    return db
        .from('municipios')
        .insert(row)
        .then(async (item) => {
            console.log(`Linha ${item}, sucesso 😍`);
        })
        .catch(() => {
            console.log(`Linha ${item}, erro 😡`);
        });

}

module.exports = {
    insert
};