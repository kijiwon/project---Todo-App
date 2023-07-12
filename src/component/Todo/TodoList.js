import React from "react";
import {CgPlayListRemove} from 'react-icons/cg'
import TodoItem from "./TodoItem";
import styled from "styled-components";

let TodoListComponent = styled.div`
    margin: 20px 30px 0px 30px;
    border-radius: 10px;
    box-shadow: 0px 2px 5px 2px rgba(0,0,0,0.2);
    width: 460px;
    padding: 10px 50px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 16px;
    .remove-all{
    font-size: 30px;
    margin: 0 auto 5px;
    cursor: pointer;
    }
`;

const TodoListHeader = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 6px;
`;
const Today = styled.p`
    text-align: end;
    font-size: 20px;
    margin-bottom: 10px;
`;
const TotalTodo = styled.p`
    text-align: end;
    margin-bottom : 10px;
`;

const TodoItems = styled.ul`
    height: 320px;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    ::-webkit-scrollbar {
        display: none;
    }
`;

function TodoList ({todoList,removeItem,isChecked, removeAll, onEdit}){
    
    return(
        <TodoListComponent>
            <TodoListHeader>
                <Today>{new Date().toLocaleDateString()}</Today>
                <TotalTodo>{`total : ${todoList.length}`}</TotalTodo> 
            </TodoListHeader>
            <TodoItems>
                {todoList.map((item)=> <TodoItem
                key={item.id}
                item={item} 
                id={item.id} 
                removeItem={removeItem}
                isChecked = {isChecked}
                onEdit={onEdit}
            />)}
            </TodoItems>
            <CgPlayListRemove onClick={removeAll} className="remove-all"/>
        </TodoListComponent>
    )
}

export default TodoList;