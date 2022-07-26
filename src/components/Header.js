import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined';
import Style from './Header.scss'
import portrait from '../img/portrait.png'

let links = ["About Me","Portfolio","Contact","Resume"];

export default function footerLinks({currentPage, handlePageChange}) {
  return (
    <div className="column justify-content-right">
    <div className="row justify-content-center my-5">
      {links.map((link, index) => 
        <a key={index} href={"#"+link} className={`col-8 col-lg-2 choices bounce ${currentPage === link ? 'active' : 'inactive'}`} onClick={() => handlePageChange(link)}>{link}</a>)}
    </div>
    <div className="row justify-content-center">
        <div className='col-8 col-lg-4'>
          <img src={portrait} className='portrait' alt='portrait'></img>
        </div>
        <TokenOutlinedIcon className='spinner col-12 col-lg-4' sx={{ fontSize: 240 }} />
    </div>
    </div>
  );
}
