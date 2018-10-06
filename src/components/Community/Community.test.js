import React from 'react';
import ReactDOM from 'react-dom';
import Community from './Community';

it('Community page renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Community />, div);
  ReactDOM.unmountComponentAtNode(div);
});
