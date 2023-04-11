import React, { useState } from "react";
import { BsCheckSquare,BsSquare,BsTrashFill, BsPencilSquare} from 'react-icons/bs';
// import {BiEditAlt} from 'react-icons/bi'
import {MdDoneOutline} from 'react-icons/md'
import {ImCancelCircle} from 'react-icons/im'

function TodoItem({item,removeItem,isChecked, onEdit}){
    // 수정 기능
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
        <div className="todoItem" key={item.id}>
            {/* checked=true일 때 checked라는 class를 추가  */}
            <div className={`todoState ('checkbox', { checked })`}>
                {/* checked=true면 체크된 박스 아이콘이 false면 빈 박스 아이콘이 뜸 */}
                {item.checked ? <BsCheckSquare/> : <BsSquare/>}
            </div>
            {isEdit? (<>
                        <input 
                            className="edit-input"
                            value={newContent} 
                            onChange={(e)=>setNewContent(e.target.value)}/></>):
                        <div className={`todo-item ${item.checked ? "checkedItem" : ""}`}  onClick={()=>isChecked(item.id)}>
                            {item.text}
                        </div>
                            }
            {/* checked상태일시 className추가 */}
            {isEdit? (<>
                        <ImCancelCircle className="btn cancel" onClick={quitEdit}>취소</ImCancelCircle>
                        <MdDoneOutline className="btn save" onClick={saveEdit}>저장</MdDoneOutline>
                        </>):(
                            <BsPencilSquare className="btn edit" onClick={toggleIsEdit}>수정</BsPencilSquare>
                        )}
            <BsTrashFill  className="btn-remove" onClick={()=>removeItem(item.id)}/>
        </div>
    )
}
export default TodoItem;