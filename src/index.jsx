import ReactDOM from 'react-dom';

import {
  BrowserRouter,
} from 'react-router-dom';

import { Provider } from 'react-redux';

import store from './store';

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <div>이제 만들면 된다</div>
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('app'),
);
