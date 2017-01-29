import React, {Component} from 'react';
import Sidebar from 'react-sidebar';

import SidebarContent from './SidebarContent';
import SidebarPersonal from './SidebarPersonal';
import SidebarTopArea from './SidebarTopArea';
import Body from '../body/Body';

const styles = {
  contentHeaderMenuLink: {
    textDecoration: 'none',
    color: 'white',
    padding: 8,
  },
  content: {
    padding: '16px',
  },
};

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      docked: false,
      open: false,
      selectedClass: {id: 4, className: 'Biology 100'},
      navigation: 'Lectures'
    };

    this.handleSideNav = this.handleSideNav.bind(this);
  }

//=========================================
//            Begin Methods
//=========================================
  handleSideNav(e, location) {
    e.preventDefault();

    this.setState({
      navigation: location
    });
  }

  onSetOpen(open) {
    this.setState({open: open});
  }

  mediaQueryChanged() {
    this.setState({docked: this.state.mql.matches});
  }

  toggleOpen(e) {
    this.setState({open: !this.state.open});

    if (e) {
      e.preventDefault();
    }
  }

  componentWillMount() {
    const mql = window.matchMedia(`(min-width: 800px)`);
    mql.addListener(this.mediaQueryChanged.bind(this));
    this.setState({mql: mql, docked: mql.matches});
  }

  componentWillUnmount() {
    this.state.mql.removeListener(this.mediaQueryChanged.bind(this));
  }

//=========================================
//            Render
//=========================================
  render() {
    const sidebar = <SidebarContent handleSideNav={this.handleSideNav} />;

    const contentHeader = (
      <span>
        {!this.state.docked &&
         <a onClick={this.toggleOpen.bind(this)} 
            href="#" 
            style={styles.contentHeaderMenuLink}>=</a>}
        <span> React Sidebar</span>
      </span>);

    const sidebarProps = {
      sidebar: sidebar,
      docked: this.state.docked,
      open: this.state.open,
      onSetOpen: this.onSetOpen.bind(this)
    };

    return (
      <Sidebar {...sidebarProps}>
        <SidebarTopArea title={contentHeader}
          class={this.state.selectedClass}>
          <Body navigation={this.state.navigation}/>
        </SidebarTopArea>
      </Sidebar>
    );
  }
}

export default Dashboard;