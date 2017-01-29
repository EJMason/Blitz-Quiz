import React from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';

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
    padding: '25px',
    fontSize: '1.5em',
    height: '100px'
  },
};


const SidebarTopArea = (props) => {
  const rootStyle = styles.root;
  return (
    <div style={rootStyle}>
      <div style={styles.header}>
        <DropdownButton title={props.class.className}
          bsSize="large"
          id="dropdown-size-large">
          <MenuItem eventKey="1" active>Biology 100</MenuItem>
          <MenuItem eventKey="2">Physics 100</MenuItem>
        </DropdownButton>
      </div>
      {props.children}
    </div>
  );
};

export default SidebarTopArea;