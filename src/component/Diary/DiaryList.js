import React from "react";
import DiaryItem from "./DiaryItem";
import './diary.css'
function DiaryList ({data, onDelete,onEdit}) {

    return(
        <div className="diaryList">
            <p className="num">total :{data.length}개</p>
            <div className="item-compo">
                {data.map((el)=>{
                    return <DiaryItem 
                                key={el.id}
                                id={el.id}
                                date={el.date} 
                                mood={el.mood}
                                content={el.content}
                                onDelete={onDelete}
                                onEdit={onEdit}
                        />
                })}                
            </div>
        </div>
    )
}
// 넘어오는 props가 undefined인 경우 에러가 발생하는 것을 막아주기 위해 기본값을 설정
// DiaryList.defaultProps = {
//     // 기본값을 빈 배열로 둠
//     diaryList : []
// }

export default DiaryList;