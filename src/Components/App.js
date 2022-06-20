import React from 'react';
import Header from '../shared/layout/Header';
import './App.css';
import Content from '../shared/layout/Content';

import {element} from 'prop-types';


function App(props) {
  return (
    <div className="App">
      <Header />
      <Content >
        {/* Components */}
        <div className="Main">
          {props.children}
        </div>
      </Content>
    </div>
  );

}

App.propTypes = {
  children: element.isRequired,
}

export default App;
