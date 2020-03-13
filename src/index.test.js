import { clear, mockUserAgent } from './index'
const origin = window.navigator.userAgent

describe('test usergaent', () => {
  afterEach(() => {
    clear()
  })

  it('should get origin userAgent', () => {
    expect(window.navigator.userAgent).toEqual(origin)
  })

  it('should mock userAgent', () => {
    const mockAgent = 'test'
    mockUserAgent(mockAgent)
    expect(window.navigator.userAgent).toEqual(mockAgent)
  })

  it('should return empty string when not set agent string', () => {
    mockUserAgent()
    expect(window.navigator.userAgent).toEqual('')
  })

  it('should return empty string when set agent string is null', () => {
    mockUserAgent(null)
    expect(window.navigator.userAgent).toEqual('')
  })

  it('should clear mock userAgent', () => {
    const origin = window.navigator.userAgent
    const mockAgent = 'test'
    mockUserAgent(mockAgent)
    clear()
    expect(window.navigator.userAgent).toEqual(origin)
  })
})
