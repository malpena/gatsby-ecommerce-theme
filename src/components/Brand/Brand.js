import React from 'react';
import { navigate } from 'gatsby';

import * as styles from './Brand.module.css';

const Brand = (props) => {
  return (
    <div
      className={styles.root}
      role={'presentation'}
      onClick={() => navigate('/')}
    >
      { <h4>ZOOMLLY</h4> }
      <svg
        width={127}
        height={24}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 127.67 23.36"
      >

      </svg>
    </div>
  );
};

export default Brand;
