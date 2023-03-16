import React from "react";
import {CgPlayListRemove} from 'react-icons/cg'
import TodoItem from "./TodoItem";
function TodoList ({todoList,removeItem,isChecked, removeAll, onEdit}){
    return(
        <div className="todoList">
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
        </div>
    )
}

export default TodoList;