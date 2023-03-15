import React from "react";

function DiaryItem ({id, date, mood, content, onDelete}) {
    return (
        <div className="DiaryItem" key={id}>
            <div>
                <p>{date}</p>
                <p>{mood}</p>
                <p>{content}</p>
            </div>
            <button onClick={()=>onDelete(id)}>삭제</button>
        </div>
    )
}

export default DiaryItem;