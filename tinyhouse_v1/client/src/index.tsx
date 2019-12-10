import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {Listings} from './sections'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Listings title='Tinyhouse'/>, document.getElementById('root'));

serviceWorker.unregister();
