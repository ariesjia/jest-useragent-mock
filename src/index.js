const origin = global.navigator.userAgent
const cleared = Symbol('clear');
let fakeUserAgent = null

Object.defineProperty(global.navigator, 'userAgent', {
  get() {
    return fakeUserAgent === cleared ? origin : (fakeUserAgent || '')
  },
})

export const clear = () => {
  fakeUserAgent = cleared
}

export const mockUserAgent = (agent) => {
  fakeUserAgent = agent
}
