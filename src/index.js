import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './components/Main';
import HomePage from './containers/HomePage';
import ResultPage from './containers/ResultPage';
import store from './store/configureStore';

// 引入 react-tap-event-plugin 避免 material-ui onTouchTap event 會遇到的問題
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// 用 react-redux 的 Provider 包起來將 store 傳遞下去，讓每個 components 都可以存取到 state
// 這邊使用 browserHistory 當做 history，並使用 material-ui 的 MuiThemeProvider 包裹整個 components
// 由於這邊是簡易的 App 我們設計了 Main 為母模版，其有兩個子元件 HomePageContainer 和 ResultPageContainer，其中 HomePageContainer 為根位置的子元件
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <MuiThemeProvider>
        <div>
          <Route path="/" component={Main} />
          <Route path="/" component={HomePage} />
          <Route path="/result" component={ResultPage} />
        </div>
      </MuiThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('app')
);