import React from "react";
import TodoList from "./TodoList";
import { useState, useEffect } from "react";
import {BsFillPlusCircleFill} from 'react-icons/bs';
import styled from "styled-components";

let TodoComponent = styled.div`
  width: 460px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 10px 0px;
  `;
const TodoTitle = styled.header`
  font-size: 30px;
  margin-bottom: 20px;
  `;

const AddItem = styled.div`
  width: 360px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-left : 25px;
  `;

const InputTodo = styled.input`
  width: 280px;
  height: 45px;
  border: 1px solid gray;
  border-radius: 10px;
  padding-top: 7px;
  font-size: 18px;
  padding-left: 16px;
  :focus{
    outline: none;
    border: 1.2px solid gray;
  }
`;

function TodoBoard (){
  const initialState = JSON.parse(localStorage.getItem('todoList')) || [];
  const [inputValue,setInputValue] = useState('');
  const [todoList,setTodoList] = useState(initialState);
  // localStorage에 저장하기
  useEffect(()=>{
    localStorage.setItem('todoList',JSON.stringify(todoList));
  },[todoList])
  // 아이텀 추가 버튼 동작
  const todo = {
    id : todoList.length,
    createdAt : new Date().toLocaleDateString(),
    text : inputValue,
    checked : false,
    edit_mode : false
  }
  const addItem= () =>{
    if(inputValue.length===0){
      alert('내용을 입력해주세요')
    } else{
      setTodoList([...todoList,todo])
      setInputValue('')

    }
  }

  // 입력된 값 가져오기
  const itemValue = (envnt) =>{
    setInputValue(envnt.target.value)
  }
  // 삭제버튼 동작 -> 해당 id를 가진 요소를 제외하고 나머지 요소들로만 구성된 새로운 배열
  const removeItem = id =>{
    setTodoList(todoList => todoList.filter(item=>item.id!==id))
  }
  // 전체 삭제버튼
  const removeAll = () =>{
    setTodoList([])
  }

  const isChecked = id => {
    setTodoList(todoList=> todoList.map(todo=> todo.id === id?  { ...todo, checked: !todo.checked } : todo))
  }

  // 수정모드
  const onEdit = (targetId, newContent)=>{
    setTodoList(
        todoList.map((todo)=> todo.id===targetId?
        {...todo, text:newContent}: todo)
    )
  }
    return(
      <TodoComponent>
        <TodoTitle>
          <h1>To do</h1>
        </TodoTitle>
        <AddItem>
          <InputTodo className='inputItem' type="text" value={inputValue} onChange={itemValue}/>
          <BsFillPlusCircleFill size={"25px"} type='submit' onClick={addItem}/>
        </AddItem>
        <TodoList 
          todoList={todoList}
          removeItem = {removeItem}  
          isChecked = {isChecked}
          removeAll={removeAll}
          onEdit={onEdit}
        />
      </TodoComponent>
    )
}

export default TodoBoard;