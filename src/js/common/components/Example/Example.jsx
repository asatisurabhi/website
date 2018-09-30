import React, { PureComponent } from 'react';
import Contact from '../Contact';

import './Example.css';
import ContactImg from './main-image.png';

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
                <div className="links">
                    <span className=""/>
                </div>
            </div>
        </div>
      );
  }
}

export default Example;
