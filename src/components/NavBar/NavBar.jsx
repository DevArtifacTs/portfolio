import React, {useState} from 'react';

//style 
import './NavBar.css';

//antd icon
import { GiHamburgerMenu } from 'react-icons/gi';
import { IconContext } from "react-icons";
import { MenuOutlined } from '@ant-design/icons';

//components
import ProgressComponent from '../ProgressComponent/ProgressComponent';
import Btn from '../Btn/Btn';
import  PopoverComponent from '../PopoverComponent/PopoverComponent';


function NavBar(props) {

    // state for mobile menu trigger
    const [mobileMenu, setMobileMenu] = useState(false);
    // state for scroll position height percentage => pass to ProgressComponent
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    }

    return (
        <div className='container-fluid sticky-top nav-container'  >
            <div className="row">
                <div className="col-12">
                    <div className="row d-flex justify-content-end" >
                        <div className="mobile-menu d-flex justify-content-end">
                            <MenuOutlined 
                                className='mobile-menu-btn'
                                style={{ fontSize: '30px', color: 'var(--implementary-color)' }}    
                            />
                        </div>
                        <div className="desktop-menu d-flex justify-content-end ">
                            <ul className='d-flex justify-content-between p-2'>
                                <li className='mx-3'>
                                    <Btn  title='About' 
                                        stylish={{backgroundColor : 'var(--implementary-color)', color : 'var(--dominant-color'}}/>
                                </li >
                                <li className='mx-3'>
                                    <Btn  title='Skills'
                                    stylish={{backgroundColor : 'var(--implementary-color)', color : 'var(--dominant-color'}}/>
                                </li>
                                <li className='mx-3'>
                                    <Btn  title='Projects' 
                                    stylish={{backgroundColor : 'var(--implementary-color)', color : 'var(--dominant-color'}}/>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <div className="row d-flex justify-content-end">
                        <div className="col progress-bar d-flex justify-content-end">
                            <ProgressComponent scrollPosition={scrollPosition} />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default NavBar;