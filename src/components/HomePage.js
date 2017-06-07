import React from 'react';
// 使用 react-router 的 Link 當做超連結，傳送 userId 當作 query
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

const HomePage = ({
  userId,
  onSubmitUserId,
  onChangeUserId,
}) => (
  <div>
    <TextField
      hintText="Please Key in your Github User Id."
      onChange={onChangeUserId}
    />
    <Link to={{ 
      pathname: '/result',
      query: { userId: userId }
    }}>
      <RaisedButton label="Submit" onClick={onSubmitUserId(userId)} primary />
    </Link>
  </div>
);

export default HomePage;