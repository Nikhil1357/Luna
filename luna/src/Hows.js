import React, { useState } from 'react'
import './Hows.css';


function Hows() {

const [text,settext] = useState(null);
var matter="";
var emoji ="";
if(text.toLocaleLowerCase() ==="HAPPY".toLocaleLowerCase())
{
    emoji = "😀";
    matter = "I'm glad to hear that you're feeling happy today!Take a moment to reflect on the things you're grateful for today. Write them down or simply acknowledge them mentally. Gratitude can enhance your happiness even further."
}
else if(text.toLocaleLowerCase() === "SAD".toLocaleLowerCase())
{
    emoji = "😔";
    matter = "I'm sorry to hear that you're feeling sad today.Here are some suggestions to help improve your mood and well-being:Acknowledge your feelings,Reach out to someone, Self-care,Practice mindfulness and Journaling"
}
else if(text.toLocaleLowerCase() === "Angry".toLocaleLowerCase())
{
    emoji = "😠";
    matter="Dealing with anger is important for your mental and emotional well-being. Here are some suggestions to help you manage your anger effectively:Take deep breaths , Do some Physical activity,Take a break,Practice relaxation techniques and Seek professional help"
}
else if(text.toLocaleLowerCase() === "Anxiety".toLocaleLowerCase())
{
    emoji = "😮";
    matter="Dealing with anxiety can be challenging, Here are some suggestions.Mindfulness and Meditation,Identify Triggers,Challenge Negative Thought,Get Adequate Sleep and Self-Care"
}
else
{
    emoji = "🙂";
}
  return(
    <div
    className='Hows'
    >

    <h1> How are you feeling today ?</h1>
    <input 
    onChange={(event)=>
    settext(event.target.value)
    }
    type='text'/>
    <p>{emoji}</p>
    <div>

    </div>
    {matter}
    </div>
    

  )
}

export default Hows