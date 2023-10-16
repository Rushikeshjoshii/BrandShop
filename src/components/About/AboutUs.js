import React, { Fragment } from "react";
import classes from './About.module.css';
import Backdrop from '@mui/material/Backdrop';
import {ImYoutube} from 'react-icons/im';
import {BiLogoInstagramAlt} from 'react-icons/bi';
import {IoLogoTwitter} from 'react-icons/io';
import {FaLinkedin} from 'react-icons/fa';

const AboutUs=(props)=>{

    return(
        <Fragment>
            <div >
              <div className={classes.titleDiv}>
              
                <span className={classes.title}>
                <p>Our Mission</p>
                  BRING<br/> INSPIRATION <br/>AND 
                  <br/>
                  INNOVATION TO <br/>EVERY <br/>ATHELETE* <br/>IN THE<br/> WORLD
                  <br/>
                </span>
                <p>*If you have a body, you are an athlete</p>
                
              </div>
                  
              <div className={classes.secondDiv}>
                <img src="https://media.about.nike.com/images/70ab6652-fb25-4973-9190-d3686a13234d/fy22-nir-cover-photo-3000x2000.jpg?fm=jpg&q=80&fit=max&crop=3000%2C1688%2C0%2C313&w=828"/>
                  <p>
                    We champion continual progress for athletes and sport by taking action to help athletes reach their potential.Every job at NIKE, Inc. is grounded in a team-first mindset, cultivating a culture of innovation and a shared purpose to leave an enduring impact.
                  </p>
              </div>
              <div  className={classes.thirdDiv}>
                <p>
                  NIKE, Inc: Keeping athletes at the center of everything we do.
                </p>
                <img src="https://media.about.nike.com/images/52f1d6ec-8b4a-46b5-9567-e7bf08fe8335/attsummit22-groupshot.jpg?fm=jpg&q=80&fit=max&crop=3200%2C1800%2C0%2C351&w=828"/>
              </div>

              <div className={classes.footer}>
                <div className={classes.first}>
                  <ul>
                    <li>Stories</li>
                    <li>Impact</li>
                    <li>Company</li>
                    <li>Newsroom</li>
                  </ul>
                </div>

                <div className={classes.second}>
                  <ul>
                    <li>Shop Nike.com</li>
                    <li>Shop Converse.com</li>
                    <li>Get Help</li>
                    <li>Investors</li>
                  </ul>
                </div>
                <div className={classes.third}>
                  <ul>
                    <li><IoLogoTwitter/></li>
                    <li><FaLinkedin/></li>
                    <li><BiLogoInstagramAlt/></li>
                    <li><ImYoutube/></li>
                  </ul>
                </div>
              </div>
            </div>
        </Fragment>
    );
};

export default AboutUs;