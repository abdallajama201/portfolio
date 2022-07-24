import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Style from './Footer.scss';

export default function footerLinks() {
  return (
    <div className="row justify-content-center">
      <div className="col-1">
          <a href='https://github.com/abdallajama201' style={{color: "inherit"}}>
            <GitHubIcon className='icon bounce' sx={{ fontSize: 80 }} />
          </a>
      </div>
      <div className="col-1">
          <a href="https://www.linkedin.com/in/abdalla-jama-118a06237/" style={{color: "inherit"}}>
            <LinkedInIcon className='icon bounce' sx={{ fontSize: 80 }} />
          </a>
      </div>
      <div className="col-1">
          <a href="mailto:abdallajama@gmail.com" style={{color: "inherit"}}>
            <EmailOutlinedIcon className="icon bounce" sx={{ fontSize: 80 }} />
          </a>
      </div>
    </div>
  );
}