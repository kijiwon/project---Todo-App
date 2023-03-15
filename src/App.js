import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css';
import Diary from './component/Diary/Diary';
import Sidebar from './component/Sidebar';
import TodoBoard from './component/Todo/TodoBoard';
import Main from './component/Main';
function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/todo' element={<TodoBoard/>}/>
          <Route path='/diary' element={<Diary/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
