import './css/Todoitems.css'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import cross from '../assets/cross.png'


const Todoitems = ({no,display,text,settodos}) => {

    const deleteto=(no)=>{
        let data=JSON.parse(localStorage.getItem("todos"));
         data=data.filter((todo)=>{
       return todo.no!==no
         })
         settodos(data)
    }

    const toggle=(no)=>{
        let data=JSON.parse(localStorage.getItem("todos"))
        for(let i=0;i<data.length;i++){
            if(data[i].no===no){
                if(data[i].display==""){
                    data[i].display="line-through"
                }else{
                    data[i].display=""
                }
                break;
            }
        }
        settodos(data)
    }

  return (<>
   <div className="todoitems">
    <div onClick={()=>{toggle(no)}} className={`display-container ${display}`}>
    {display==""? <img className='done' src={not_tick}/>:<img className='done' src={tick}/>}
        <div  className="text">{text}</div>
    </div>
    <img onClick={()=>{deleteto(no)}} className='cross' src={cross}/>
   </div>
  </>)
}

export default Todoitems
