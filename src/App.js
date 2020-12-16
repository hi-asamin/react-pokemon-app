import { Provider } from 'react-redux';
import { AppRoute } from './router';
import { store } from './store';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRoute />
      </Provider>
    </div>
  );
}

export default App;
