import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import Dashboard from './containers/Dashboard/Dashboard';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
            <Layout>
              <Dashboard/>
            </Layout>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
