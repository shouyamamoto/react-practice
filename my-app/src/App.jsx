import React from 'react'
import './App.css'

const App = () => {
  return(
    <>
      <div className="input-area">
        <input type="text" placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          <div className="list-row">
            <li>しょうちゃんと</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div className="list-row">
            <li>ひなちゃん</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了したTODO</p>
        <ul>
          <div className="list-row">
            <li>ああああ</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  )
} 

export default App