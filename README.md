# react-realityscript

> React component for realityscript project

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

This project is a React Wrapper component for the realityscript.io project but we are using our forked version with some updates. Check more info in our repo https://github.com/arleneio/reality.js

This component is using the version 0.2.2 from realityscript

## Install

```bash
npm install --save react-realityscript
```

## Usage

```jsx
import React, { Component } from 'react'

import Reality from 'react-realityscript'

class Example extends Component {
  render() {
    return <Reality model-ios="..." model-android="..." />
  }
}
```

Remember to use a usdz/reality model file for ios and glb/gltf model for android

## Demo

https://arleneio.github.io/react-realityscript/

## License

MIT © [jalamprea](https://github.com/arleneio)
