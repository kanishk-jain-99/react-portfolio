import { useEffect, useRef, useState } from 'react'
import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'

const Logo = () => {
  const [key, setKey] = useState(0)

  useEffect(() => {
    setKey((prev) => prev + 1)
  }, [])
  return (
    <div className="logo-container rotate">
      <img key={key} className="solid-logo" src={LogoS} alt="Developer" />
    </div>
  )
}

export default Logo
