import {Route, Routes,NavLink } from 'react-router-dom';
import Diary from './component/Diary/Diary';
import TodoBoard from './component/Todo/TodoBoard';
import styled from "styled-components";

const Body = styled.body`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F7F7F7;
`;

const AppComponent = styled.div`
  width: 660px;
  height: 600px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  margin-top: 10rem;
  border-radius: 2.5rem;
  box-shadow: 3px 3px 10px #EEEEEE;
`;

const MainComponent = styled.div`
  width: 460px;
  height: 360px;
  text-align: center;
  h1{
    font-size: 50px;
    text-shadow: 4px 2px 2px #AAAAAA;
  }
`;

const SidebarComponent = styled.div`
  width: 100px;
  height: inherit;
  font-size: 2rem;
  text-align: center;
  padding-top: 100px;
  section{
    display: flex;
    flex-direction: column;    
  }
  a{
    font-weight: 800;
    color: black;
    text-decoration: none;
    height: 30px;
    margin-bottom: 25px;
    border-bottom: 4px solid #AAAAAA;
  }
  .active{
      color: #593939;
  }
`;

function App() {
  return (
    <Body> 
      <AppComponent>
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/todo' element={<TodoBoard/>}/>
          <Route path='/diary' element={<Diary/>}/>
        </Routes>
      </AppComponent>
    </Body>
  );
}

const Main =()=> {
  return (
      <MainComponent>
        <h1>ZZIONIE's </h1>
      </MainComponent>
  )
};

const Sidebar=()=>{
  return(
      <SidebarComponent>
          <section>
            <NavLink to='/' activeclassname='active'>Main</NavLink>
            <NavLink to='/todo' activeclassname='active'>Todo</NavLink>
            <NavLink to='/diary' activeclassname='active'>Diary</NavLink>
          </section>
      </SidebarComponent>
  )
}
export default App;
