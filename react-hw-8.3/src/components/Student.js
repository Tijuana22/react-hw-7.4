import React from 'react';
import Scores from './Scores';



function Student({students }) {
   
  return (
    <div>
      {students.map((student)=>(
        <div>
          <h2>{student.name}</h2>
          <p>{student.bio}</p>
          <Scores score={student.scores}/>
        </div>

      ))}

  

    
    </div>
  )
}

export default Student