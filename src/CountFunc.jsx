import React, {useEffect, useState} from 'react'

export default function CountFunc() {
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    useEffect(() =>{
        window.addEventListener('resize', () => setWindowSize(window.innerWidth))
        return () => {
            window.removeEventListener("resize", () => this.setState({windowSize: window.innerWidth}))
        }
    }, [])
  return (
    <div>{windowSize}</div>
  )
}
