import React from 'react';
import {Media, Image} from 'react-bootstrap';

//=========================================
//            Styles
//=========================================
const styles = {
  root: {
    fontFamily: '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif',
    fontWeight: 300,
  },
  header: {
    backgroundColor: '#03a9f4',
    color: 'white',
    padding: '17px',
    height: '100px',
    width: '260px'
  },
};


const SidebarPersonal = (props) => {
  const rootStyle = styles.root;
  return (
    <div style={rootStyle}>
      <div style={styles.header}>
        <Media>
          <Media.Left>
            <Image width={64} 
                   height={64} 
                   src="https://organicthemes.com/demo/profile/files/2012/12/profile_img.png" 
                   rounded/>
          </Media.Left>
          <Media.Body>
            <Media.Heading>Jill Summers</Media.Heading>
            <p>C01005467</p>
          </Media.Body>
        </Media>
      </div>
      {props.children}
    </div>
  );
};

export default SidebarPersonal;