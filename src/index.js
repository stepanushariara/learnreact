import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Learn from './learn';

ReactDOM.render(
    <Learn/>, document.getElementById('root')
);
registerServiceWorker();
