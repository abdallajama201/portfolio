import {info} from '../../info/Info'
import Style from './AboutMe.scss'

export default function AboutMe() {

  let textContent = [
    'Full stack web developer with experience in accounting and customer service. Certificate from University of Toronto full stack web developer course and a bachelor of commerce degree from the same institution. With self taught coding skills and newly expanded skills in JavaScript, CSS, HTML, Bootstrap, JQuery, Node.js, Express.js, handlebarsjs, Git, GitHub, Heroku, MySQL, MongoDB and RESTful APIs. Strong organization, time management and oral/written communication skills, as well as attention to detail. Ability to self start, research solutions and work independently. ',
    'I have built backend and frontend applications including a weather tracking app that leverages third party APIs to provide current weather data and future forecasts. I have also built a backend e-commerce application that provides RESTful APIs to connect various frontends to a MySQL database for inventory management. I am excited to develop more skills with useful tools and technologies in order to continue my journey building on the web',
  ]

  let textStyle = {
    width: "60%",
    height: "600px",
    marginTop: "100px",
    marginBottom: "100px",
    padding: "40px"
  }
  
  return (
    <div className="card mx-auto" style={textStyle}>
      <div className="card-body py-5">
        {textContent.map((text, index) => <p key={index} className="card-text">{text}</p>)} 
      </div>
    </div>
  );
}
