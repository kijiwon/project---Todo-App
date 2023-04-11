import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css';
import Diary from './component/Diary/Diary';
import Sidebar from './component/Sidebar';
import TodoBoard from './component/Todo/TodoBoard';
import Main from './component/Main';
import styled from "styled-components";

let AppComponent = styled.div`
  width: 560px;
  height: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  margin-top: 10rem;
  border-radius: 2.5rem;
`;
function App() {


  return (
    <AppComponent>
      <BrowserRouter>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/todo' element={<TodoBoard/>}/>
          <Route path='/diary' element={<Diary/>}/>
        </Routes>
      </BrowserRouter>
    </AppComponent>
  );
}

export default App;
