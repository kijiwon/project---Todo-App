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
        setState(state)
        console.log(state)
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
            <DiaryList/>
        </div>
    )
}

export default Diary;