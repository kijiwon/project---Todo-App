import React, { useState } from "react";
import styled from "styled-components";
import { BsTrashFill, BsPencilSquare} from 'react-icons/bs';
import {MdDoneOutline} from 'react-icons/md'
import {ImCancelCircle} from 'react-icons/im'

let DiaryItemComponent = styled.div`
    width: 190px;
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #929AAB;
    margin-bottom: 10px;
    font-size: 14px;
    .itemHead{
        display: flex;
        flex-direction: row;
    }
    .item-date{
        font-weight: 600;
        margin-right: 10px;
    }
    .item-mood{
        font-weight: 600;
        color: aliceblue;
        margin-left: 0px;
    }
    .edit-textarea{
        width: 120px;
        height: 50px;
    }
    .btns{
        display: flex;
        flex-direction: row;
        margin-bottom: 5px;
    }
    .btn-diary{
        font-size: 18px;
        margin-right: 10px;
    }
`;

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
        <DiaryItemComponent key={id}>
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
            
        </DiaryItemComponent>
    )
}

export default DiaryItem;