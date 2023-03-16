import React, { useState } from "react";
import './diary.css'
import { BsTrashFill, BsPencilSquare} from 'react-icons/bs';
import {MdDoneOutline} from 'react-icons/md'
import {ImCancelCircle} from 'react-icons/im'

function DiaryItem ({id, date, mood, content, onDelete, onEdit}) {

    // 수정하기 기능
    const [isEdit,setIsEdit] = useState(false);
    // isEdit의 상태를 변경해주는 함수
    const toggleIsEdit = ()=>setIsEdit(!isEdit)
    // console.log(isEdit)
    // 수정된 내용을 담을 state
    const [newContent, setNewContent] = useState(content);
    // 수정 취소시에 기존의 content로 돌아가기
    const quitEdit = ()=>{
        setIsEdit(false);
        setNewContent(content)
    }
    const saveEdit = () =>{
        onEdit(id,newContent);
        setIsEdit(false);
    }
    return (
        <div className="DiaryItem" key={id}>
            <div>
                <div className="itemHead">
                    <p className="item-date">{date}</p>
                    <p className="item-mood">{mood}</p>                    
                </div>
                <div>
                    {isEdit? (<>
                        <textarea 
                            value={newContent} 
                            className='edit-textarea'
                            onChange={(e)=>setNewContent(e.target.value)}/>
                            
                        </>):<p>{content}</p>}
                </div>
            </div>
            {isEdit? <div className="btns">
            <ImCancelCircle className="btn-diary" onClick={quitEdit}>취소</ImCancelCircle>
            <MdDoneOutline className="btn-diary" onClick={saveEdit}>저장</MdDoneOutline></div>
            :<div className="btns">
            <BsPencilSquare className="btn-diary" onClick={toggleIsEdit}>수정</BsPencilSquare>
            <BsTrashFill className="btn-diary" onClick={()=>onDelete(id)}>삭제</BsTrashFill>            
            </div>}
            
        </div>
    )
}

export default DiaryItem;