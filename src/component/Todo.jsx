import { useState } from 'react'
import './css/Todo.css'
import { useRef } from 'react'
import { useEffect } from 'react'
import Todoitems from './Todoitems'

let count=0
const Todo = () => {
    const[todos,settodos]=useState([])
    const inputref=useRef(null)


    const add=()=>{
       if(inputref.current.value!==""){
        settodos([...todos,{no:count++,text:inputref.current.value,display:""}])
        inputref.current.value="";
        localStorage.setItem('todos_count',count)
       }
    }

    useEffect(()=>{
        settodos(JSON.parse(localStorage.getItem("todos")));
        count=localStorage.getItem('todos_count')
    },[])
  
    useEffect(()=>{
       setTimeout(() => {
        localStorage.setItem('todos',JSON.stringify(todos))
       },100)
    },[todos])

  return (<>
    <div className="container">
        <div className="heading">
            <h1>To-Do-List</h1>
        </div>
        <div className="to-do-add">
            <input ref={inputref} type='text' placeholder='Add Your Task'/>
            <button onClick={()=>{add()}}>ADD</button>
        </div>
        <div className="to-do-list">
             {todos.map((item,index)=>{
                  return <Todoitems settodos={settodos} no={item.no} text={item.text} display={item.display} key={index}/>
             })}
        </div>
    </div>
  </>)
}

export default Todo
