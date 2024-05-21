import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm a very ambitious Software Engineer looking for a role in an
            amazing company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p>
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one problem at a time.
          </p>
          <p>
            If I need to define myself in one sentence, it would be:
            goal-oriented, fun-loving, a sports fanatic, a beach lover, and
            tech-obsessed!!!
          </p>
          <p>
            If you want to learn more about my professional experience please
            click the button below to check out my resume and if I sound
            interesting to you please feel free to reach out to me on the
            contact details provided on the resume or the{' '}
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <span className="secondary-text">Contact page</span>
            </Link>
            .
          </p>
          <Link
            target="_blank"
            to={process.env.REACT_APP_RESUME_URL}
            className="flat-button"
          >
            RESUME / CV
          </Link>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>

      <Loader type="pacman" active />
    </>
  )
}

export default About
