import React from 'react'
import { useEffect,useCallback,useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Login from './Login';
import { useNavigate } from 'react-router-dom';
const names = [
    'Sad ..',
    'Happy ..',
    'Anxious ..',
    'Scared ..',
    'Angry ..',
    'Surpris ..',
    'Nervous ..',
    'Stressed ..'
  
  ]
function Hows1() {

    const navi = useNavigate()

    const [newName, setnewName] = useState("");

  const shuffle = useCallback(() => {
      const index = Math.floor(Math.random() * names.length);
      setnewName(names[index]);
  }, []);

  useEffect(() => {
      const intervalID = setInterval(shuffle, 2000);
      return () => clearInterval(intervalID);
  }, [shuffle])

    const loc = useLocation();
    const loggedin = loc.state.Name;
const [text,settext] = useState("");
var matter="";
var emoji ="🙂";
if(text!=null) {
if(text.toLocaleLowerCase()==="happy".toLocaleLowerCase())
{
    emoji="😀";
    matter = "I'm glad to hear that you're feeling happy today!Take a moment to reflect on the things you're grateful for today. Write them down or simply acknowledge them mentally. Gratitude can enhance your happiness even further."
}
if(text.toLocaleLowerCase()==="sad".toLocaleLowerCase())
{
    emoji="😔";
    matter = "I'm sorry to hear that you're feeling sad today.Here are some suggestions to help improve your mood and well-being:Acknowledge your feelings,Reach out to someone, Self-care,Practice mindfulness and Journaling" 
}
if(text.toLocaleLowerCase()==="angry".toLocaleLowerCase())
{
    emoji="😠";
    matter="Dealing with anger is important for your mental and emotional well-being. Here are some suggestions to help you manage your anger effectively:Take deep breaths , Do some Physical activity,Take a break,Practice relaxation techniques and Seek professional help"
    // matter="Be Strong, everything will get better"
}
if(text.toLocaleLowerCase()==="Anxious".toLocaleLowerCase())
{
    emoji="😮";
    matter="Dealing with anxiety can be challenging, Here are some suggestions.Mindfulness and Meditation,Identify Triggers,Challenge Negative Thought,Get Adequate Sleep and Self-Care"
    // matter="Be Strong, everything will get better"
}



}
  return (
    <>
    <h3
    className='howsbot'
    onClick={()=>{
        navi('bot')
    }}
    >Want to Seek Help ? here is our personal bot </h3>
    <div
    className='Hows'
    >

    <h1>{loggedin}, How are you feeling today ?</h1>
    <input 
    onChange={(event)=>
    {settext(event.target.value)}}
    placeholder={"e.g. "+ newName}
    type='text'/>
    <p
    className='trans'
    >{emoji}</p>
    <div
    className='trans'
    >
    {matter}
    </div>
    <br>
    </br>
    <br></br>
    <Link 
    to="/journal"
    state={
        {
            Name:loggedin,
            Mood:text
        }
        
        }
    >
        {"Write your thoughts ->"}
    </Link>
    
    </div>
    </>
  )
}

export default Hows1