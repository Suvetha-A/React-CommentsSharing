import React from "react";
import { useState } from "react";


  function Form (){

    const [inputarr,SetInputarr]=useState([])
    const[inputdata , SetInputdata]= useState({
      name:"",
      comments:""
    })

  function Changehandle(e){

    SetInputdata({...inputdata,[e.target.name]:e.target.value})
  }

  let {name,comments}=inputdata;
  function handleSubmit(e){
    e.preventDefault();
    
    SetInputarr([...inputarr,{name,comments}])
    
    SetInputdata({name:"",comments:""})
  }
  
    
    return(
        <div className="Wrapper">  
        
        
        <table>
        <label><b>Share your experience</b></label><br/>
        
        <label for="fname">Name:</label><br/>
        <input type="text"  name="name" value={inputdata.name} onChange={Changehandle} ></input><br/>
        <label for="com">Comments:</label><br/>
        <textarea type="text"  name="comments" value={inputdata.comments} onChange={Changehandle} ></textarea><br/><br/>
        <button onClick={handleSubmit}>POST</button>
        
        </table>
        
        <table1>
          <tbody>{
              inputarr.map(
                (info,ind)=>{
                  return(
                    <tr key={ind}>
                    <tr><b>{info.name}</b></tr>
                    <tr>{info.comments}</tr><br/>
                    </tr>
                  )
                }
              )
            }
          </tbody>
        </table1>   
        </div>
    )
        }


export default Form