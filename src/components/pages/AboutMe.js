import Style from './AboutMe.scss'

export default function AboutMe() {

  let text = [
    'Hello my name is Abdalla Jama welcome to my portfolio, feel free to look around',
    'I am a full stack web developer with experience in accounting and customer service. Certificate from University of Toronto full stack web developer course and a bachelor of commerce degree from the same institution. With self taught coding skills and newly expanded skills in JavaScript, CSS, HTML, Bootstrap, JQuery, Node.js, Express.js, handlebarsjs, Git, GitHub, Heroku, MySQL, MongoDB and RESTful APIs. Strong organization, time management and oral/written communication skills, as well as attention to detail. Ability to self start, research solutions and work independently. ',
    'I have built backend and frontend applications including a weather tracking app that leverages third party APIs to provide current weather data and future forecasts. I have also built a backend e-commerce application that provides RESTful APIs to connect various frontends to a MySQL database for inventory management. I am excited to develop more skills with useful tools and technologies in order to continue my journey building on the web',
  ]
  
  return (
    <div className="column justify-content-center">
    <div className='topTerminal col-7 mx-auto'></div>
    <div className='botTerminal col-7 mx-auto'>
      <p>{text[0]}</p>
      <p>{text[1]}</p>
      <p>{text[2]}</p>
    </div>
    </div>
  );
}
