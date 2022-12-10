import './App.css';
import Todo from "./components/Todo"
import Active from "./components/Active"
import Completed from "./components/Completed"
import Header from "./components/Header"
import {Routes, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Todo/>}/>
        <Route path="/active" element={<Active/>}/>
        <Route path="/completed" element={<Completed/>}/>
      </Routes>
    </div>
  );
}

export default App;
