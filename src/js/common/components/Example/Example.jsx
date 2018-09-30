import React, { PureComponent } from 'react';
import Contact from '../Contact';

import './Example.css';
import ContactImg from './main-image.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

class Example extends PureComponent {
  render() {
      return (
        <div className="home-container">
            <div className="header">
                <span className="name">
                    Surabhi Asati
                </span>
            </div>
            <div className="contents">
                <div>
                    <img className="icon"src={ContactImg}/>
                </div>
                <div className="description">
                    <span>
                        My name is Surabhi Asati. I’m a Data Analyst skilled in SQL, R and Python
                        with proficient knowledge in statistics and machine learning.
                    </span>
                </div>
                <div>
                    <span className="seprator"/>
                </div>
                <div className="links-container">
                    <span class="links-wrap">
                         <a className="link email" href="mailto:asati.surabhi@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} />
                         </a>
                     </span>
                     <span class="links-wrap">
                         <a className="link linkedIn" target="_blank" href="https://www.linkedin.com/in/surabhiasati/">
                            <FontAwesomeIcon icon={faLinkedin} />
                         </a>
                     </span>
                     <span class="links-wrap">
                         <a className="link github" target="_blank" href="https://github.com/asatisurabhi/projects">
                            <FontAwesomeIcon icon={faGithub} />
                         </a>
                     </span>
                     <span class="links-wrap">
                         <a className="link twitter" target="_blank" href="https://twitter.com/surabhiasati">
                            <FontAwesomeIcon icon={faTwitter} />
                         </a>
                     </span>
                </div>
            </div>
        </div>
      );
  }
}

export default Example;
