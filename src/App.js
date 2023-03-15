import { useState, useRef } from 'react';
import './App.css';
import Diary from './component/Diary';
function App() {
  // const [data, setData] = useState([]);
  // // 일기 아이템의 id
  // const dataId = useRef(0);
  // // 데이터 추가하기
  // const onCreate = (date,mood,content)=>{
  //   const newItem = {
  //     id : dataId.current,
  //     date,
  //     mood,
  //     content,
  //   }
  //   dataId.current+=1;
  //   setData([newItem,...data])
  //   // console.log(data)
  // }
  // // 데이터 삭제
  // const onDelete = (targetId)=>{
  //   const newDiaryList = data.filter((item)=> item.id!== targetId)
  //   setData(newDiaryList)
  // }

  return (
    <div className="App">
      {/* <Diary onCreate={onCreate} data={data} onDelete={onDelete}/> */}
      <Diary/>
    </div>
  );
}

export default App;
