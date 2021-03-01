import React from 'react'

const App = () => {
  return(
    <>
      <div>
        <input type="text" placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div>
        <p>未完了のTODO</p>
        <ul>
          <div>
            <li>ああああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div>
            <li>ああああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div>
        <p>完了したTODO</p>
        <ul>
          <div>
            <li>ああああ</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  )
} 

export default App