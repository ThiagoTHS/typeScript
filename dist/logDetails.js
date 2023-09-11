"use strict";
function logDetails(uid, item) {
    console.log(`A product with ${uid} has a title as ${item}.`);
}
function logInfo(uid, user) {
    console.log(`An user with ${uid} has a name as ${user}.`);
}
function renderPlataform(plataform) {
    return plataform;
}
renderPlataform('ios');
logDetails(123, 'sapato');
logDetails('123', 'sapato');
logInfo(123, 'Thiago');
logInfo('123', 'Thiago');
