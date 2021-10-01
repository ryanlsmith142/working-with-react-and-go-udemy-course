import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import AppFooter from './AppFooter';
import AppContent from './AppContent';
import AppHeader from './AppHeader';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';

class App extends Component {

  render() {
    return (
    <div className="app">
        <AppHeader title="My App" />
        <AppContent />
        <AppFooter />
    </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));