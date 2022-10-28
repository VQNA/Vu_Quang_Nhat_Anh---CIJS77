import React, {useState} from "react";

const FunctionalComponent=()=>{
    
    const[student, setStudent] = useState({ //student
        name: "123",
        age: 10
      });
      
      const[counter, setcounter] = useState(0); //counter
    
    return(<div>
        <div>Counter: {student.age}</div>
        <button onClick = {() =>{
      setStudent({ 
        ...student,
        age:student.age + 1,
      }
      )

    }}>Click</button>

<div>Counter: {counter}</div>
        <button onClick = {() =>{
      setcounter(counter + 1)

    }}>Click</button>
        </div>
    )
}
export default FunctionalComponent;

