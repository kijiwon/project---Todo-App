import React, { useState } from "react";

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
                <p>{date}</p>
                <p>{mood}</p>
                <div>
                    {isEdit? (<>
                        <textarea 
                            value={newContent} 
                            onChange={(e)=>setNewContent(e.target.value)}/>
                            
                        </>):<p>{content}</p>}
                </div>
            </div>
            {isEdit? <>
            <button onClick={quitEdit}>취소</button>
            <button onClick={saveEdit}>저장</button></>
            :<>
            <button onClick={toggleIsEdit}>수정</button>
            <button onClick={()=>onDelete(id)}>삭제</button>            
            </>}
            
        </div>
    )
}

export default DiaryItem;