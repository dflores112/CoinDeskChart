import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function CoinChart(){
  const [stats, setStats] = useState(['Test'])
  return(
    <div>
      {stats}
    </div>
  )

}

ReactDOM.render(
  <CoinChart/>,
  document.getElementById('app')
);