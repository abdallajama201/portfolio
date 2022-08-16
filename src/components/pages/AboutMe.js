import Style from './AboutMe.scss'

export default function AboutMe() {

  let text = [
    'abdallajama@gmail.com',
    'Hello my name is Abdalla Jama welcome to my portfolio, feel free to look around.',
    'I am a full stack web developer with experience in accounting and customer service. I have obtained a certificate from University of Toronto full stack web developer course and a bachelor of commerce degree from the same institution. With self taught coding skills and expanded skills and knowledge in JavaScript ES6+, CSS3, HTML5, React, MongoDB, Bootstrap, JQuery, Node.js, Express.js, handlebars.js, Git, Heroku, MySQL and RESTful APIs. My previous experience has provided me with strong organization, time management and oral/written communication skills, as well as attention to detail. In addition to the ability to self start, research solutions and work independently.',
    'I have built full stack applications using the MERN stack as well as alternatives tech stacks that include MySQL, Express and handlebars. I have developed backend and frontend applications that leveraged third party API and test driven development using Jest. I have worked in teams employing agile methodologies as well.',
    `I am continuously learning and I'm excited to develop more skills with useful tools and technologies in order to continue my journey building on the web.`,
  ]
  
  return (
    <div className="column justify-content-center">
    <div className='topTerminal col-7 mx-auto'></div>
    <div className='botTerminal col-7 mx-auto'>
      <p>{text[0]}</p>
      <p>{text[1]}</p>
      <p>{text[2]}</p>
      <p>{text[3]}</p>
      <p>{text[4]}</p>
    </div>
    </div>
  );
}
