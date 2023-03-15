import React from "react";
import DiaryItem from "./DiaryItem";
function DiaryList ({data, onDelete}) {

    return(
        <div className="diaryList">
            <p>{data.length}개</p>
            {data.map((el)=>{
                return <DiaryItem 
                            key={el.id}
                            id={el.id}
                            date={el.date} 
                            mood={el.mood}
                            content={el.content}
                            onDelete={onDelete}
                        />
            })}
        </div>
    )
}
// 넘어오는 props가 undefined인 경우 에러가 발생하는 것을 막아주기 위해 기본값을 설정
// DiaryList.defaultProps = {
//     // 기본값을 빈 배열로 둠
//     diaryList : []
// }

export default DiaryList;