import React, { useEffect } from 'react'
const REALITY_SCRIPT_URL = `https://cdn.jsdelivr.net/gh/arleneio/reality.js@0.2.1/reality.min.js`

function RealityScript(props) {
    useEffect(() => {
        const script = document.createElement('script')
        script.src = REALITY_SCRIPT_URL
        script.async = true
        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [])
    return <reality {...props} />
}

export default RealityScript
