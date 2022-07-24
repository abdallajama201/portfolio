import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined';
import Style from './Header.scss'
import portrait from '../img/portrait.png'

let links = ["About Me","Portfolio","Contact","Resume"];

export default function footerLinks({currentPage, handlePageChange}) {
  return (
    <div className="column justify-content-right">
    <div className="row justify-content-center my-5">
      {links.map((link, index) => 
        <a key={index} href={"#"+link} className={`col-2 choices bounce ${currentPage === link ? 'active' : 'inactive'}`} onClick={() => handlePageChange(link)}>{link}</a>)}
    </div>
    <div className="row justify-content-around">
        <div className='col-1'>
          <img src={portrait} className='portrait' alt='portrait'></img>
        </div>
        <TokenOutlinedIcon className='spinner col-1' sx={{ fontSize: 240 }} />
    </div>
    </div>
  );
}
