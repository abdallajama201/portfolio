import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import Style from './Header.scss'
import portrait from '../img/portrait.png'

let links = ["About Me","Portfolio","Resume"];

export default function footerLinks({currentPage, handlePageChange}) {
  return (
    <div className="column">
    <div className="row justify-content-around">
      {links.map((link, index) => 
    <button key={index} href={"#"+link} class={`custom-btn btn-12 col-8 col-lg-2 my-5 m-1 ${currentPage === link ? 'active' : 'inactive'}`} onClick={() => handlePageChange(link)}><span>{link}</span><span>{link}</span></button>)}
    </div>
    <div className="row justify-content-center">
        <div className='col-8 col-lg-4'>
          <img src={portrait} className='portrait' alt='portrait'></img>
        </div>
        <div className='col-8 col-lg-4'>
            <a href="mailto:abdallajama@gmail.com"><p><EmailOutlinedIcon></EmailOutlinedIcon> abdallajama@gmail.com</p></a>
        </div>
        <TokenOutlinedIcon className='spinner col-12 col-lg-4' sx={{ fontSize: 240 }} />
    </div>
    </div>
  );
}
