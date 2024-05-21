import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['a', 'n', 'i', 's', 'h', 'k']
  const jobArray = [
    'F',
    'u',
    'l',
    'l',
    '-',
    's',
    't',
    'a',
    'c',
    'k',
    ' ',
    'E',
    'n',
    'g',
    'i',
    'n',
    'e',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br /> <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={17}
            />
          </h1>
          <h2>Frontend - React.js, Redux, Next.js</h2>
          <h2>Backend - Java, Node.js, Spring Boot, Express</h2>
          <h2>and much more...</h2>
          <Link to="/about" className="flat-button">
            ABOUT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" active />
    </>
  )
}
export default Home
