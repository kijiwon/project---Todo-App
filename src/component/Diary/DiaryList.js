import React from "react";
import DiaryItem from "./DiaryItem";
import styled from "styled-components";

let DiaryListComponent = styled.div`
    width: 420px;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    ::-webkit-scrollbar {
        display: none;
    }
    .num{
        font-size: 18px;
        text-align: start;
        padding-left: 30px;
    }
    .item-compo{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }
    
`;

function DiaryList ({data, onDelete,onEdit}) {

    return(
        <DiaryListComponent>
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
        </DiaryListComponent>
    )
}
// 넘어오는 props가 undefined인 경우 에러가 발생하는 것을 막아주기 위해 기본값을 설정
// DiaryList.defaultProps = {
//     // 기본값을 빈 배열로 둠
//     diaryList : []
// }

export default DiaryList;