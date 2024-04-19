import logo from './logo.svg';
import './App.css';
import store from './redux/store';
import TodoContainer from './components/TodoCont';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
   <TodoContainer/>
    </div>
    </Provider>
  );
}

export default App;