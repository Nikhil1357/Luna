import React, { useState,useEffect } from 'react'
import './Journal.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ModalComp from './ModalComp';



function Journal() {

  const loc = useLocation();
  const loggedin = loc.state.Name;
  const [ch,setch]=useState("");
  const [visible, setvisible] = useState(false);
  const [mood, setmood] = useState("");

  const postdata = () =>
  {
    const userData = {
      Name:loggedin,
      Notes : ch,
      Mood:loc.state.Mood
    };
    axios.post("/test", userData).then((response) => {
      console.log("I am " + response.data);

      setmood(response.data)
      console.log(response.status);
      console.log(response.data.token);
      // alert("Journal entry done");
      setvisible(true);
    });

  }
  useEffect(() => {

    axios.get("/notes").then((response) => {
      console.log(response.data);
      console.log(response.status);
      console.log(response.data.token);

    });

    }, [])
  var back=false;

  if(ch[ch.length-1]==="d"
  &&
  ch[ch.length-2]==="a"
  &&
  ch[ch.length-3]==="s"
  )
  {    
    back = true;
    document.body.style.backgroundColor="red";
    console.log("HI");
  }
  else if(ch[ch.length-1]==="y"
  &&
  ch[ch.length-2]==="p"
  &&
  ch[ch.length-3]==="p"
  &&
  ch[ch.length-4]==="a"
  &&
  ch[ch.length-5]==="h"
  )
  {
    
  }
// }
  console.log(ch);
  return (
    <div
    className=
    {back?"outerJournal back":"outerJournal"}
    >

    <Link 
    className='Journal-link'
    state={{Name:loggedin}}
    to="Old">

        My Journals

    </Link>
    
    <h1>Journal 📕</h1>
    <h3>{loggedin}, write your feelings down 🖊️🖊️
    </h3>
    <p>
      Mood: {loc.state.Mood}
    </p>
    <ModalComp
      mood={mood}
      visible={visible}
      setvisible={setvisible}
    />
    <textarea

    onChange={(event)=>setch(event.target.value)}
    placeholder=''
    resize="none"
    className='input'
    >

    </textarea>
    <br></br>
    <button 
    onClick={postdata}
    className='button'>
        SUBMIT
    </button>
    
    </div>
  )
}

export default Journal