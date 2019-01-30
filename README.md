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
