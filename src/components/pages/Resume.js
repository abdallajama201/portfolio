import Style from './Resume.scss';

let languages = ['Javascript ES6+', 'CSS3', 'HTML5', 'SQL', 'NoSQL',];
let applications = [ 'Bash', 'Git', 'GitHub', 'MySQL', 'MongoDB', 'Insomnia', 'GraphQL'];
let tools = ['Node', 'Express', 'React', 'Handlebars', 'Jquery', 'Bootstrap'];
let clouds = ['Heroku', 'JawsDB', 'MongoDB Atlas'];

export default function Resume() {
  return (
    <div>
      <div className="row justify-content-center">
        <a href="https://github.com/abdallajama201/resume" target="_blank" className='resume bounce col-3'>Resume</a>
      </div>
      <div className="column justify-content-center">
        <div className='topTerminal col-7 mx-auto'>languages</div>
        <div className='botTerminal col-7 mx-auto'>
          <ul>
            {languages.map((lang, index) =>
              <li key={index}>{lang}</li>
            )}
          </ul>    
        </div>
      </div>
      <div className="column justify-content-center">
        <div className='topTerminal col-7 mx-auto'>Applications</div>
        <div className='botTerminal col-7 mx-auto'>
          <ul>
            {applications.map((app, index) =>
              <li key={index}>{app}</li>
            )}
          </ul>   
        </div>
      </div>
      <div className="column justify-content-center">
        <div className='topTerminal col-7 mx-auto'>Tools</div>
        <div className='botTerminal col-7 mx-auto'>
          <ul>
            {tools.map((tool, index) =>
              <li key={index}>{tool}</li>
            )}
          </ul>     
        </div>
      </div>
      <div className="column justify-content-center ">
        <div className='topTerminal col-7 mx-auto'>Cloud</div>
        <div className='botTerminal col-7 mx-auto'>
          <ul>
            {clouds.map((cloud, index) =>
              <li key={index}>{cloud}</li>
            )}
          </ul>   
        </div>
      </div>
    </div>
  );
}
