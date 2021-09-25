import './App.css';

import AddTask from './components/AddTask';
import TaskList from './components/TaskList';

import { TaskProvider } from './context/TaskContext'

function App() {
  return (

    <TaskProvider>
      <div className="container">
        <h1 className="title">Todo-List</h1>
        <AddTask />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
