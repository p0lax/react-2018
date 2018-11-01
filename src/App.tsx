import * as React from 'react';
import { Provider } from 'mobx-react';
import Inner from './Inner';
import './App.css';

import TodoStore from './stores/TodoStore';

const todoStore = new TodoStore();

class App extends React.Component {
  public render() {
    return (
      <Provider todoStore={todoStore}>
        <div className="App">
          <Inner />
        </div>
      </Provider>
    );
  }
}

export default App;
