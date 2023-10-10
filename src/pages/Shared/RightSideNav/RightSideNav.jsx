import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';

import QZone1 from '../../../assets/assets/qZone1.png';
import QZone2 from '../../../assets/assets/qZone2.png';
import QZone3 from '../../../assets/assets/qZone3.png';

const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub></FaGithub>
                    Github
                </button>
            </div>
            <div className='p-4 mb-6'>
                <h2 className="text-3xl mb-4">Find Us on</h2>
                <a className='p-4 flex text-lg items-center border rounded-t-lg' href="">
                    <FaFacebook className='mr-3'></FaFacebook>
                   <span>Facebook</span>
                </a>
                <a className='p-4 flex text-lg items-center bordedr-x' href="">
                    <FaTwitter className='mr-2'></FaTwitter>
                   <span>Facebook</span>
                </a>
                <a className='p-4 flex text-lg items-center border rounded-b-lg' href="">
                    <FaInstagram className='mr-2'></FaInstagram>
                   <span>Twitter</span>
                </a>
            </div>
            <div className='p-4 space-y-3 mb-6'>
                <h2 className="text-3xl">Q Zone</h2>
               <img src={QZone1} alt=''></img>
               <img src={QZone2} alt=''></img>
               <img src={QZone3} alt=''></img>
            </div>
        </div>
    );
};

export default RightSideNav;