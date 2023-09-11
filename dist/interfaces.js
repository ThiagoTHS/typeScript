"use strict";
// Conjunto de dados para descrever a estrutura de um objeto
// Trabalha exclusivamente para objetos
const tlou = {
    id: 123,
    title: 'The last of Us',
    description: 'The best game in the world',
    genre: 'Action',
    platform: ['PS3', 'PS4'],
    getSimilars: (title) => {
        console.log(`Similar games to ${title}: Uncharted, A Plague, Metro.`);
    }
};
// tlou.genre = 'new';
// console.log('tlou.genre: ', tlou.genre);
console.log(tlou.title);
if (tlou.getSimilars) {
    tlou.getSimilars(tlou.title);
}
const leftbehind = {
    id: 123,
    title: 'The last of Us - Left Behind',
    description: 'You play as Ellie before the original game.',
    genre: 'Action',
    platform: ['PS4'],
    originalGame: tlou,
    newContent: ['3 hours strory', 'new characters',]
};
class CreateGame {
    constructor(id, t, d, g, p) {
        this.id = id;
        this.title = t;
        this.description = d;
        this.genre = g;
        this.platform = p;
    }
}
