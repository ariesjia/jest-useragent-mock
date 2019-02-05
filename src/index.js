const origin = global.navigator.userAgent
let fakeUserAgent = null

Object.defineProperty(global.navigator, 'userAgent', {
  get() {
    return fakeUserAgent || origin
  },
})

export const clear = () => {
  fakeUserAgent = ''
}

export const mockUserAgent = (agent) => {
  fakeUserAgent = agent
}
