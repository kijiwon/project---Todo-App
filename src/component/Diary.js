import React, { useState, useRef } from "react";
import DiaryList from "./DiaryList";
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
  
    return (
        <div className="diary-copo">
            <h1>How do you feel?</h1>
            <div className="options">
                <p>{state.date}</p>
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
            <button onClick={submitDiary}>저장하기</button>
            <DiaryList data={data} onDelete={onDelete}/>
        </div>
    )
}

export default Diary;