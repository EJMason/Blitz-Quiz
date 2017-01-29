import React from 'react';
import {ListGroupItem, Panel, Media, Image} from 'react-bootstrap';

const StudentBadge = (props) => {
  return (
    <Panel>
      <Media>
        <Media.Left>
          <Image width={64} 
                   height={64} 
                   src="https://organicthemes.com/demo/profile/files/2012/12/profile_img.png" 
                   rounded/>
        </Media.Left>
         <Media.Body>
            <Media.Heading>Billy J.</Media.Heading>
            <p>Biology 100</p>
          </Media.Body>
      </Media>
    </Panel>
  );
};

export default StudentBadge;