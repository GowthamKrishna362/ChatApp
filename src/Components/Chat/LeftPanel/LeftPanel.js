import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import './leftPanel.scss';

const LeftPanel = () => {
  return (
    <div className="left-panel">
      <FontAwesomeIcon icon={faGear} />
      <FontAwesomeIcon icon={faComment} />
    </div>
  );
};

export default LeftPanel;
