# jest-useragent-mock
> Mock `navigator.userAgent` when run unit test cases with jest.

[![Build Status](https://travis-ci.org/ariesjia/jest-useragent-mock.svg?branch=master)](https://travis-ci.org/ariesjia/jest-useragent-mock)
[![license](https://badgen.net/badge/license/MIT/blue)](https://github.com/ariesjia/jest-useragent-mock/blob/master/LICENSE)
[![coverage](https://badgen.net/codecov/c/github/ariesjia/jest-useragent-mock)](https://codecov.io/gh/ariesjia/jest-useragent-mock)


## Install
```bash
// use yarn
yarn add jest-useragent-mock -D
// use npm
npm install jest-useragent-mock  --save-dev
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

describe('test useragent', () => {
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
