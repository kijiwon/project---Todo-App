/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import { BsCheckSquare,BsSquare,BsTrashFill, BsPencilSquare} from 'react-icons/bs';
import {MdDoneOutline} from 'react-icons/md';
import {ImCancelCircle} from 'react-icons/im';
import styled from "styled-components";

let TodoItemComponent = styled.div`
    width: 300px;
    font-size: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    .edit{
        margin-left: auto;
        margin-right: 20px;
    }
`;
const CheckBox = styled.div`
`;

const InputEdit = styled.input`
    width: 140px;
    height: 24px;
    font-size: 18px;
    padding-top: 0;
    border-bottom : 1px solid gray;
    :focus{
        outline: none;
    }
`;

const ItemContent = styled.p`
    text-align: center;
    margin: 5px 0px 5px 20px;
    ${props => props.checked?
    `
    text-decoration: line-through; 
    color: rgb(146, 146, 146);
    `:''}
`;

function TodoItem({item,removeItem,isChecked, onEdit}){
    const [isEdit,setIsEdit] = useState(false);
    const toggleIsEdit = () =>setIsEdit(!isEdit);

    const [newContent,setNewContent] = useState(item.text);

    const quitEdit = ()=>{
        setIsEdit(false);
        setNewContent(item.text);
    }
    const saveEdit = () =>{
        onEdit(item.id,newContent);
        setIsEdit(false);
    }
    return (
    <TodoItemComponent key={item.id}>
        <CheckBox>
            {item.checked ? <BsCheckSquare/> : <BsSquare/>}
        </CheckBox>
        {isEdit? (
                <InputEdit
                    value={newContent} 
                    onChange={(e)=>setNewContent(e.target.value)}
                />)
                :
                <ItemContent checked={item.checked} onClick={()=>isChecked(item.id)}>
                    {item.text}
                </ItemContent>
        }
        {isEdit? (<>
                    <ImCancelCircle size={'20px'} onClick={quitEdit}>취소</ImCancelCircle>
                    <MdDoneOutline size={'20px'} onClick={saveEdit}>저장</MdDoneOutline>
                    </>):(
                        <BsPencilSquare size={'20px'} className="edit" onClick={toggleIsEdit}>수정</BsPencilSquare>
                    )}
        <BsTrashFill  size={'20px'} onClick={()=>removeItem(item.id)}/>
    </TodoItemComponent>
    )
}
export default TodoItem;