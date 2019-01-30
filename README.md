# jest-useragent-mock
> Mock `navigator.userAgent` when run unit test cases with jest.

[![Build Status](https://travis-ci.org/ariesjia/jest-useragent-mock.svg?branch=master)](https://travis-ci.org/ariesjia/jest-useragent-mock)


## Install
```bash
npm install jest-useragent-mock  --save-dev
yarn add jest-useragent-mock -D
```

## Setup
`jest.config.js`
```javascript
{
   "setupFiles": ["jest-useragent-mock"]
}
```

## Usage
```javascript
import { clear, mockUserAgent } from 'jest-useragent-mock'

describe('test usergaent', () => {
  afterEach(() => {
    clear()
  })

  it('can mock userAgent', () => {
    const mockAgent = 'test'
    mockUserAgent(mockAgent)
    expect(window.navigator.userAgent).toEqual(mockAgent)
  })
})

```

## TODO
1. Add some common useragents, such as WeChat, etc.