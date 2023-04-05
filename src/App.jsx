import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from './theme';
import Home from './pages/Home/Home';
// import Trade from './pages/Trade';
// import Chat from './pages/Chat';
// <Route path="/trade" component={Trade} />
// <Route path="/chat" component={Chat} />
import NotFound from './pages/404/NotFound';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" exact component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
