import { clear, mockUserAgent } from './index'

describe('test usergaent', () => {
  afterEach(() => {
    clear()
  })

  it('can get origin userAgent', () => {
    expect(window.navigator.userAgent).toBeDefined()
  })

  it('can mock userAgent', () => {
    const mockAgent = 'test'
    mockUserAgent(mockAgent)
    expect(window.navigator.userAgent).toEqual(mockAgent)
  })

  it('can clear mock', () => {
    const origin = window.navigator.userAgent
    const mockAgent = 'test'
    mockUserAgent(mockAgent)
    clear()
    expect(window.navigator.userAgent).toEqual(origin)
  })
})
