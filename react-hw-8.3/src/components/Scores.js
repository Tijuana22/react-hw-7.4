import React from 'react'

function Scores({score}) {
  return (
    <div>
      
      {score.map((item)=>(
        <div>
          <h4>
            {item.score}
          </h4>
          <h4>{item.date}</h4>
        </div>

      ))}
 
  </div>
  )
}

export default Scores