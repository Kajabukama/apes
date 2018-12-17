import React from 'react';

const Logo = (props) => {
   return (
      <img style={styles.logo} src={ logo } alt="logo"/>
   )
}

const logo = require('./../../../assets/imgs/apes-logo.svg');
const styles = {
   logo:{
      maxHeight: 30,
   }
}
export default Logo;
