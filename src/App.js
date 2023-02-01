import './App.css';
import Welcome from './Welcome';
import ToDoList from './ToDoList';
import Counter from './Counter'; //note if you did export default then you don't need curly brackets when importing
import {Calendar} from './Calendar' //note if you did export const <element> then you need curly brackets when importing

function App() {
  return (
    <div className="App">
      <h1>React Practice Apps</h1>
      <Welcome />
      <ToDoList />
      <Counter />
      <Calendar/>
    </div>
  );
}

export default App;
