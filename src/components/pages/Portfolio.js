import React from 'react';
import Style from './Portfolio.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

let projectNames = ['Tech Blog', 'Weather Dashboard', 'Pet Playdate Finder', 'ECommerce Backend', 'Social Network API', 'README Generator'];
let github = [
  'https://github.com/abdallajama201/Tech-Blog',
  'https://github.com/abdallajama201/Weather-Dashboard',
  'https://github.com/abdallajama201/pet-playdate',
  'https://github.com/abdallajama201/E-commerce-Back-End',
  'https://github.com/abdallajama201/Social-Network-API',
  'https://github.com/abdallajama201/Professional-README-Generator',
]
let deployed = [
  'https://tech-blog-abdalla.herokuapp.com/',
  'https://abdallajama201.github.io/Weather-Dashboard/',
  'https://pet-playdate-app.herokuapp.com/',
  'https://github.com/abdallajama201/E-commerce-Back-End',
  'https://github.com/abdallajama201/Social-Network-API',
  'https://github.com/abdallajama201/Professional-README-Generator',
]

export default function Portfolio() {
  return (
    <div class="row justify-content-center">
      {projectNames.map((name, index) => 
      <div class="col-6">
        <div className="column justify-content-center">
          <div className='Terminal1 mx-5'>{name}</div>
          <div className={`Terminal2 b${index} mx-5`}></div>
          <div className='Terminal3 mx-5'>
          <div className="row justify-content-center">
            <div className="col-4">
                <a href={github[index]} target="_blank" style={{color: "inherit"}}>
                  <GitHubIcon className='icon bounce' sx={{ fontSize: 60 }} />
                </a>
            </div>
            <div className="col-4">
                <a href={deployed[index]} target="_blank" style={{color: "inherit"}}>
                  <LaunchIcon className='icon bounce' sx={{ fontSize: 60 }} />
                </a>
            </div>
            </div>
          </div>
        </div>
      </div>)}
    </div>
  );
}
