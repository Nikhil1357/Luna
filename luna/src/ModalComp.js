import React, { useState } from 'react'

function ModalComp({mood, visible, setvisible}) {

const [text,settext] = useState(null);



    const modal = {

        zIndex: 1000, 
        backgroundColor:"red",
        position: 'fixed',
        width:'100vw',
        height:'100vw',
        borderRadius:'10px',
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"rgb(0, 0, 0, 0.2)",
    }
    const dabba = {

        zIndex: 1000, 
        // backgroundColor:"red",
        position: 'fixed',
        width:'20vw',
        height:'20vw',
        borderRadius:'10px',
        display:'flex',
        textAlign:'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"rgb(255, 255, 255)",
    }

    if(!visible)
    {
        return (
            <></>
        )
    }

  return(

    <div 
    style={modal}>
            
            <div style={dabba}>
            <button
            onClick={()=>{
                setvisible(false);
            }}
            style={{
                position:'absolute',
                right:0,
                top:0,
                margin:'10px',
                backgroundColor:'white',
                border:"none",
            }}
            >X</button>
                <p>
                    {
                        "Submitted, based on your data, the predicted mood is "+mood
                    }
                </p>
            </div>

    </div>

  )
}

export default ModalComp;