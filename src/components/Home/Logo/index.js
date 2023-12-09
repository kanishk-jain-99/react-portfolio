import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import LogoS from '../../../assets/images/logo-s.png'
import './index.scss'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 3,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoS}
        alt="JavaScript,  Developer"
      />

      <svg
        width="550pt"
        height="800pt"
        version="1.0"
        viewBox="10 0 550 850"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M 314.2947 4530.0567 L 314.2947 -3146.8869 L 928.4501 -3146.8869 L 928.4501 4530.0567 L 2425.4541 4530.0567 L 2425.4541 1881.5112 L 4870.5607 4318.9407 L 4210.3435 4318.9407 L 2425.4541 2534.0514 L 4210.3435 4318.9407 L 4870.5607 4318.9407 L 5726.5399 3416.8999 L 2866.8784 568.7538 L 5642.0935 -2225.6537 L 4747.7296 -3108.5022 L 3987.7122 -3108.5022 L 2486.8697 -1611.4982 L 2486.8697 -882.1885 L 4747.7296 -3108.5022 L 2486.8697 -882.1885 L 2486.8697 -1611.4982 L 2486.8697 -3146.8869 L 928.4501 -3146.8869 L 928.4501 4530.0567 L 314.2947 4530.0567"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
