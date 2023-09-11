// Conjunto de dados para descrever a estrutura de um objeto
// Trabalha exclusivamente para objetos

interface Game {
    id?: string | number;
    title: string;
    description: string;
    readonly genre: string;
    platform?: string[];
    getSimilars?: (title: string) => void
}

const tlou: Game = {
    id: 123,
    title: 'The last of Us',
    description: 'The best game in the world',
    genre: 'Action',
    platform: ['PS3', 'PS4'],
    getSimilars: (title: string) => {
        console.log(`Similar games to ${title}: Uncharted, A Plague, Metro.`);
    }
}

// tlou.genre = 'new';
// console.log('tlou.genre: ', tlou.genre);

console.log(tlou.title);

if(tlou.getSimilars) {
    tlou.getSimilars(tlou.title);
}

interface DLC extends Game {
    originalGame: Game;
    newContent: string[];
}

const leftbehind: DLC = {
    id: 123,
    title: 'The last of Us - Left Behind',
    description: 'You play as Ellie before the original game.',
    genre: 'Action',
    platform: ['PS4'],
    originalGame: tlou,
    newContent: ['3 hours strory', 'new characters',]
}

class CreateGame implements Game {
    id: string | number;
    title: string;
    description: string;
    genre: string;
    platform?: string[] | undefined;

    constructor(id: string | number, t: string, d: string, g: string, p: string[] | undefined) {
        this.id = id;
        this.title = t;
        this.description = d;
        this.genre = g;
        this.platform = p;
    }
}

