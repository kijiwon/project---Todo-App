import React from "react";
import {CgPlayListRemove} from 'react-icons/cg'
import TodoItem from "./TodoItem";
import styled from "styled-components";

let TodoListComponent = styled.div`
    width: 460px;
    padding: 10px 50px 0px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 16px;
    .itemDate{
    text-align: end;
    font-size: 20px;
    margin-bottom: 10px;
    }
    .totalItem{
        text-align: end;
        margin-bottom : 10px;
    }
    .todoItemCompo{
    height: 320px;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    }
    .todoItemCompo::-webkit-scrollbar {
        display: none;
    }
    .remove-all{
    font-size: 30px;
    margin-left: 150px;
    cursor: pointer;
    }
`;

function TodoList ({todoList,removeItem,isChecked, removeAll, onEdit}){
    
    return(
        <TodoListComponent>
            <div className="todoBoard">
                <div className="itemDate">{new Date().toLocaleDateString()}</div>
                <div className="totalItem">{`total : ${todoList.length}`}</div> 
            </div>
            <div className="todoItemCompo">
                {todoList.map((item)=> <TodoItem
                key={item.id}
                item={item} 
                id={item.id} 
                removeItem={removeItem}
                isChecked = {isChecked}
                onEdit={onEdit}
            />)}
            </div>
            <CgPlayListRemove onClick={removeAll} className="remove-all"/>
        </TodoListComponent>
    )
}

export default TodoList;