import React from 'react';
import ReactDOM from 'react-dom';
import Ask from './Ask';

it('Ask question renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Ask />, div);
  ReactDOM.unmountComponentAtNode(div);
});
