import TokenOutlinedIcon from '@mui/icons-material/TokenOutlined';
import Style from './Header.scss'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

let links = ["About Me","Portfolio","Contact","Resume"];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
}));

export default function footerLinks({currentPage, handlePageChange}) {
  return (
    <div>
    <div className="row justify-content-right">
      <TokenOutlinedIcon className='spinner' sx={{ fontSize: 120 }} />
    <div className="row justify-content-center">
      {links.map((link, index) => 
        <a key={index} href={"#"+link} className={`col-2 choices bounce ${currentPage === link ? 'active' : 'inactive'}`} onClick={() => handlePageChange(link)}>{link}</a>)}
    </div>
    </div>
    <Container>
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}   direction="row"
  justifyContent="center"
  alignItems="center">
  <Grid item xs={3}>
    <Item>1</Item>
  </Grid>
  <Grid item xs={3}>
    <Item>2</Item>
  </Grid>
  <Grid item xs={3}>
    <Item>3</Item>
  </Grid>
  <Grid item xs={3}>
    <Item>4</Item>
  </Grid>
</Grid>
    </Container>
      </div>
  );
}
