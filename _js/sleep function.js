
const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

// You can now use this with the then callback:
sleep(500).then(() => {
  //do stuff
})

// Or use it in an async function:
const doSomething = async () => {
  await sleep(2000)
  //do stuff
}
doSomething()

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
const list = [1, 2, 3, 4]
const doSomething = async () => {
  for (const item of list) {
    await sleep(2000)
    console.log('🦄')
  }
}
doSomething()
