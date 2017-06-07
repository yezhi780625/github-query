import React from 'react';
// 引入 AppBar
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';

const Main = (props) => (
  <div>
    <AppBar
      title="Github Finder"
      showMenuIconButton={false}
    />
    <div>
      {props.children}
    </div>
  </div>
);

// 進行 propTypes 驗證
Main.propTypes = {
  children: PropTypes.object,
};

export default Main;
