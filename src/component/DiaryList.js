import React from "react";

function DiaryList () {

    return(
        <div className="diaryList">
        </div>
    )
}
// 넘어오는 props가 undefined인 경우 에러가 발생하는 것을 막아주기 위해 기본값을 설정
// DiaryList.defaultProps = {
//     // 기본값을 빈 배열로 둠
//     diaryList : []
// }

export default DiaryList;