// tupe alias
type Uid = number | string | undefined

function logDetails(uid: Uid, item: string) {
    console.log(`A product with ${uid} has a title as ${item}.`);
}

function logInfo(uid: Uid, user: string) {
    console.log(`An user with ${uid} has a name as ${user}.`);
}

type Plataform = 'Windows' | 'Linux' | 'Mac Os' | 'ios'

function renderPlataform(plataform: Plataform) {
    return plataform
}

renderPlataform('ios')

logDetails(123, 'sapato');
logDetails('123', 'sapato');

logInfo(123, 'Thiago');
logInfo('123', 'Thiago');