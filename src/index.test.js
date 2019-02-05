import { clear, mockUserAgent } from './index'

describe('test usergaent', () => {
  afterEach(() => {
    clear()
  })

  it('should get origin userAgent', () => {
    expect(window.navigator.userAgent).toBeDefined()
  })

  it('should mock userAgent', () => {
    const mockAgent = 'test'
    mockUserAgent(mockAgent)
    expect(window.navigator.userAgent).toEqual(mockAgent)
  })

  it('should clear mock userAgent', () => {
    const origin = window.navigator.userAgent
    const mockAgent = 'test'
    mockUserAgent(mockAgent)
    clear()
    expect(window.navigator.userAgent).toEqual(origin)
  })
})
