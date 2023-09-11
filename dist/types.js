"use strict";
// boolen (true / false)
let isOpen;
isOpen = true;
// string ('foo', "foo", `foo`)
let message;
message = `foo ${isOpen}`;
// number (int, float, hex, binary)
let total;
total = 0xff00;
// array
let items;
items = [1, 2, 3];
let values;
values: [1, 2, 3];
// tuple
let title;
title = [1, 'foo', 'bar'];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
;
// any (qualquer coisa) NÃO É LEGAL!
let coisa;
coisa = [1];
// void (vazio)
function logger() {
    console.log('foo');
}
;
// never
function error() {
    throw new Error('error');
}
;
// object
let cart;
cart = {
    key: 'fi'
};
//Type Inference
// let message2:string = 'mensagem definida' Fazer isso é redundante, pq quando declara já ssando o valor, já define o tipo.
let message2 = 'mensagem definida';
// É a mesma coisa nos 2 casos abaixo:
window.addEventListener('click', (e) => {
    console.log(e.target);
});
window.addEventListener('click', (e) => {
    console.log(e.target);
});
