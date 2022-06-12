import { BackTop } from 'antd';
import React from 'react';
import styles from './BackToTop.module.css';

// react icon
import { IoIosArrowDropup } from 'react-icons/io';

// const style = {
//   height: 40,
//   width: 40,
//   lineHeight: '40px',
//   borderRadius:  'var(--secondary-border-radius)',
//   backgroundColor: '#1088e9',
//   color: '#fff',
//   textAlign: 'center',
//   fontSize: 14,
// };

const BackToTop = () => (
  <div
    style={{
      height: '600vh',
      padding: 8,
    }}
  >
    <BackTop   visibilityHeight={300} duration={200} >
      <div className={`${styles.to_top_btn}`}  >UP </div>
    </BackTop>
  </div>
);

export default BackToTop;