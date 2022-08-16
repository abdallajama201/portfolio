import React from 'react';
import Style from './Portfolio.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import image1 from '../../img/hungry-time.png';
import image2 from '../../img/pet-playdate.png';
import image3 from '../../img/tech-blog.png';
import image4 from '../../img/weather-dashboard.png';
import image5 from '../../img/coding-photo-1.jpg';
import image6 from '../../img/coding-photo-2.jpg';
import image7 from '../../img/coding-photo-3.jpg';

let projectNames = ['Hungry Time', 'Pet Playdate Finder', 'Tech Blog', 'Weather Dashboard', 'ECommerce Backend', 'Social Network API', 'README Generator'];
let images = [image1, image2, image3, image4, image5, image6, image7];
let description = [
  [
    'A menu app platform.',
    'Backend: Express.js, MongoDB, GraphQL',
    'Frontend: React.js',
  ],
  [
    'An app for setting up and tracking playdates for your pet.',
    'Backend: Express.js, MySQL, Node.js',
    'Frontend: Handlebars.js, Bootstrap',
  ],
  [
    'A CMS style blog site.',
    'Backend: Express.js, MySQL, Node.js',
    'Frontend: Handlebars.js, Bootstrap',
  ],
  [
    'A simple weather app that provides current weather and future forecasts globally.',
    'Backend: Third-party API provided by OpenWeather',
    'Frontend: Bootstrap and local storage on browser for persistent data',
  ],
  [
    'A back end set of APIs for an e-commerce site powered by Express.js and MySQL.',
    'The application can handle CRUD operations for organizing products, categories and tags.',
    'Backend: Express.js, MySQL, Node.js',
  ],
  [
    'An API for running CRUD operations on social network data.',
    'Backend: Express.js, MongoDB, Mongoose ODM',
    '',
  ],
  [
    'A command line program that generates a custom README.md file.',
    'Backend: Node.js',
    '',
  ],
];
let github = [
  'https://github.com/Wingky1208/Menu-App',
  'https://github.com/abdallajama201/pet-playdate',
  'https://github.com/abdallajama201/Tech-Blog',
  'https://github.com/abdallajama201/Weather-Dashboard',
  'https://github.com/abdallajama201/E-commerce-Back-End',
  'https://github.com/abdallajama201/Social-Network-API',
  'https://github.com/abdallajama201/Professional-README-Generator',
]
let deployed = [
  'https://hungrier-time.herokuapp.com/',
  'https://tech-blog-abdalla.herokuapp.com/',
  'https://pet-playdate-app.herokuapp.com/',
  'https://abdallajama201.github.io/Weather-Dashboard/',
  'https://github.com/abdallajama201/E-commerce-Back-End',
  'https://github.com/abdallajama201/Social-Network-API',
  'https://github.com/abdallajama201/Professional-README-Generator',
]

export default function Portfolio() {
  return (
    <div className="row justify-content-center">

{projectNames.map((name, index) =>
<div className="card cardCustom col-10 col-lg-4 m-4 p-0">
  <img className="card-img-top" src={images[index]} alt="Card image cap"></img>
  <div className="card-body">
    <h3 className="card-title">{name}</h3>
    <p className="card-text">{(description[index])[0]}</p>
    <p className="card-text">{(description[index])[1]}</p>
    <p className="card-text">{(description[index])[2]}</p>
    <div className="row justify-content-center">
      <div className="col-5">
          <a href={github[index]} target="_blank" style={{color: "inherit"}}>
            <GitHubIcon className='icon1 bounce' sx={{ fontSize: 60 }} />
          </a>
      </div>
      <div className="col-5">
          <a href={deployed[index]} target="_blank" style={{color: "inherit"}}>
            <LaunchIcon className='icon1 bounce' sx={{ fontSize: 60 }} />
          </a>
      </div>
    </div>
  </div>
</div>)}




      {projectNames.map((name, index) => 
      <div key={index} className="col-12 col-md-9 col-lg-6">
        <div className="column justify-content-center">
          <div className='Terminal1 mx-5'>{name}</div>
          <div className={`Terminal2 b${index} mx-5`}></div>
          <div className='Terminal3 mx-5'>
          <div className="row justify-content-center">
            <div className="col-4">
                <a href={github[index]} target="_blank" style={{color: "inherit"}}>
                  <GitHubIcon className='icon1 bounce' sx={{ fontSize: 60 }} />
                </a>
            </div>
            <div className="col-4">
                <a href={deployed[index]} target="_blank" style={{color: "inherit"}}>
                  <LaunchIcon className='icon1 bounce' sx={{ fontSize: 60 }} />
                </a>
            </div>
            </div>
          </div>
        </div>
      </div>)}
    </div>
  );
}
