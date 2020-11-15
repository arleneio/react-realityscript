import React from 'react'

import Reality from 'react-realityscript'


const App = () => {
	  return <Reality 
		  image="https://cdn.jsdelivr.net/gh/arleneio/reality.js@master/sample/default.png"
		  model-android="https://cdn.jsdelivr.net/gh/arleneio/reality.js@master/sample/default.glb"
		  model-ios="https://cdn.jsdelivr.net/gh/arleneio/reality.js@master/sample/default.usdz"
		  box-radius="4"
		  box-margin="0" />
}

export default App
