// type alias
type Uid = number | string | undefined

function logDetails(uid: number | string, item: string) {
  console.log(`A product with ${uid} has a title as ${item}.`)
}

function logInfo(uid: number | string, user: string) {
  console.log(`An user with ${uid} has a name as ${user}.`)
}

type Platform = 'Windows' | 'Linux' | 'Mac Os' | 'ios'

function renderPlatform(platform: Platform) {
  return platform
}

renderPlatform('Linux');

logDetails(123, 'sapato');
logDetails("123", 'sapato');

logInfo(123, "Rafael");
logInfo("123", "Rafael");