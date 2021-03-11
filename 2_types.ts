// accountInfo
// charInfo
// playerInfo

type AccountInfo = {
  id: number;
  name: string;
  email?: string
}

const account: AccountInfo = {
  id: 123,
  name: 'Rafael'
}

type CharInfo = {
  nickname: string;
  level: number
}

const char: CharInfo = {
  nickname: 'rsales',
  level: 100
}

// intersection
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
  id: 123,
  name: 'Rafael',
  nickname: 'rsales',
  level: 100
}