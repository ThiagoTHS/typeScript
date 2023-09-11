// accountInfo
// charInfo
// playerInfo

type AccountInfo = {
    id: number | string;
    name: string;
    email?: string;
}

const account: AccountInfo = {
    id: 123,
    name: 'Thiago'
}

type CharInfo = {
    nickname: string;
    level: number;
}

const char: CharInfo = {
    nickname: 'Trinitom',
    level: 99
}

// intersection
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
    id: 123,
    name: 'Thiago',
    nickname: 'Trinitom',
    level: 99
}