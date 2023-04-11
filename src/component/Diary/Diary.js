import React, { useState, useRef } from "react";
import DiaryList from "./DiaryList";
import {IoMdAddCircleOutline} from 'react-icons/io';
import styled from "styled-components";

let DiaryComponent = styled.div`
    width: 460px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .header{
        height: 200px;
    }
    .options{
        width: 300px;
        height: 30px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .date{
        font-size: 18px;
    }
    textarea{
        width: 300px;
        height: 80px;
        font-size: 16px;
    }
    .btn-add{
        font-size: 24px;
        margin-left: 10px;
    }
`;
function Diary () {
    
    const initialState = {
        date : new Date().toDateString(),
        mood : 'happy',
        content : '',
    };
    const [state, setState] =useState(initialState);
    const changeState = (e) =>{
        setState({
            ...state,
            [e.target.name] : e.target.value,
        })
    }
    // useRef로 포커싱 주기
    const contentInput = useRef();
    
    const submitDiary = ()=>{
        if(state.content.length<1){
            contentInput.current.focus();
            return;
        }
        onCreate(state.date, state.mood, state.content);
        setState({
            mood: 'happy',
            content:'',
        })
    }
    const [data, setData] = useState([]);
    // 일기 아이템의 id
    const dataId = useRef(0);
    // 데이터 추가하기
    const onCreate = (date,mood,content)=>{
      const newItem = {
        id : dataId.current,
        date,
        mood,
        content,
      }
      dataId.current+=1;
      setData([newItem,...data])
      // console.log(data)
    }
    // 데이터 삭제
    const onDelete = (targetId)=>{
      const newDiaryList = data.filter((item)=> item.id!== targetId)
      setData(newDiaryList)
    }
  
    // 수정 완료 기능 -> data에 저장해야 하므로 상위 컴포넌트에서 생성
    const onEdit =(targetId, newContent)=>{
        // id가 일치하는 item의 content를 변경
        setData(
            data.map((item)=>item.id===targetId ? 
                {...item, content:newContent}
                : item)
        )
    }
    return (
        <DiaryComponent>
            <div className="header">
                <h1>How do you feel?</h1>
                <div className="options">
                    <p className="date">{initialState.date}</p>
                    <select name="mood" value={state.value} onChange={changeState}>
                        <option value={'happy'}>happy</option>
                        <option value={'good'}>good</option>
                        <option value={'soso'}>soso</option>
                        <option value={'bad'}>bad</option>
                    </select>
                </div>
                <textarea 
                    ref={contentInput}
                    type='text' 
                    name='content'
                    value={state.content}
                    onChange={changeState}

                />
                <IoMdAddCircleOutline  className="btn-add" onClick={submitDiary}>저장하기</IoMdAddCircleOutline>                
            </div>

            <DiaryList data={data} onDelete={onDelete} onEdit={onEdit}/>
        </DiaryComponent>
    )
}

export default Diary;