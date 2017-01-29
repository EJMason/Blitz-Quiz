import React from 'react';
import {Glyphicon} from 'react-bootstrap';

import SidebarPersonal from './SidebarPersonal';

import './../App.css';

//=========================================
//            Styles
//=========================================
const styles = {
  sidebar: {
    width: 256,
    height: '100%',
  },
  sidebarLink: {
    display: 'block',
    padding: '16px 0px',
    color: '#757575',
    fontSize: '1.2em',
    textDecoration: 'none',
  },
  divider: {
    margin: '8px 0',
    height: 1,
    backgroundColor: '#757575',
  },
  content: {
    padding: '16px',
    height: '100%',
    backgroundColor: 'white',
  }
};


const SidebarContent = (props) => {
  const style = styles.sidebar;

  return (
    <SidebarPersonal style={style}>
      <div style={styles.content}>
        <a href="#" 
          style={styles.sidebarLink}
          onClick={(e) => props.handleSideNav(e, '')}>
        <Glyphicon className="icon" glyph="dashboard" /> Dashboard
        </a>
        <a href="#" 
          style={styles.sidebarLink}
          onClick={(e) => props.handleSideNav(e, 'Students')}>
        <Glyphicon className="icon" glyph="education" /> Students
        </a>
        <a href="#" 
          style={styles.sidebarLink}
          onClick={(e) => props.handleSideNav(e, 'Lectures')}>
        <Glyphicon className="icon" glyph="book" /> Lectures
        </a>
        <div style={styles.divider} />
          <a href="#" style={styles.sidebarLink}>
        <Glyphicon className="icon" glyph="log-out" /> Logout
        </a>
      </div>
    </SidebarPersonal>
  );
};

export default SidebarContent;