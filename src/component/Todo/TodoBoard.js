import React from "react";
import TodoList from "./TodoList";
import { useState, useEffect } from "react";
import {BsFillPlusCircleFill} from 'react-icons/bs'

function TodoBoard (){
    // localStorage에 초기값 설정
    // 입력되는 todoList가져오기
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
      setTodoList([todo,...todoList])
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
  // 체크박스 동작
  // 스프레드 연산자로 item이 가지고 있는 모든 속성을 가져오기
  // checked의 값을 반대로 바꿔줌
  // else인경우는 그냥 반환
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
        <div className="App">
        <div>
          <h1>오늘의 할 일</h1>
        </div>
        <div className='addItem'>
          <input className='inputItem' type="text" value={inputValue} onChange={itemValue}/>
          <BsFillPlusCircleFill className='inputBtn' type='submit' onClick={addItem}/>
        </div>
        <div className='component'>
          <TodoList 
            todoList={todoList}
            removeItem = {removeItem}  
            isChecked = {isChecked}
            removeAll={removeAll}
            onEdit={onEdit}
          />
        </div>
      </div>
    )
}

export default TodoBoard;