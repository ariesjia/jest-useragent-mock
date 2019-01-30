const origin = global.navigator.userAgent
let fakeUserAgent = null

Object.defineProperty(global.navigator, 'userAgent', {
  get: function _get() {
    return fakeUserAgent || origin
  },
})

export const clear = () => {
  fakeUserAgent = ''
}

export const mockUserAgent = (agent) => {
  fakeUserAgent = agent
}

console.log(global.navigator.userAgent)
