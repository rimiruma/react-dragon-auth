import logo from '../../../../assets/assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
           <img className='mx-auto' src={logo}></img>
           <p>Journalism Without Fear or Favour</p>
           <p className='texl-xl'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;