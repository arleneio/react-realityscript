import React, { useEffect, useState } from 'react'
const REALITY_SCRIPT_URL = `https://cdn.jsdelivr.net/gh/arleneio/reality.js@0.2.2/reality.min.js`
const ARLENE_BASE = 'https://servercloud.arlene.io/reality-data';

async function loadProjectData(projectId, cb) {
  const projectURL = `${ARLENE_BASE}?pid=${projectId}`
  const data = await fetch(projectURL)

  if (data && data.status===200) {
    const json = await data.json();
    if (cb) {
      cb(json)
    }
    return json
  }

  return {}
}

function RealityScript(props) {
  // Load reality attributes from an Arlene Project
  const [values, setValues] = useState({});

  useEffect(() => {
    const script = document.createElement('script')
    script.src = REALITY_SCRIPT_URL
    script.async = true
    document.body.appendChild(script)

    if (props.projectId) {
      loadProjectData(props.projectId, (v)=>{
        setValues(v)
      })
    }

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  if (props.projectId) {
  	return <reality {...values} />
  } else {
  	return <reality {...props} />
  }
}

export default RealityScript
