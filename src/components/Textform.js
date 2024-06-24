import React ,{useState} from 'react'

export default function Textform(props) {
    
    const Handleclick1 =() =>{
        
        let Newtext = text.toUpperCase()
        settext(Newtext)
        props.Showalert("Successfully text converted into Uppercase.","Success")
        
    }
    const Handleclick2 =() =>{
        
        let Newtext = text.toLowerCase()
        settext(Newtext)
        props.Showalert("Successfully text converted into Lowercase.","Success")
        
    }
    const Handleclick3 =() =>{
        
        let Newtext = ''
        settext(Newtext)
        props.Showalert("Text is cleared.","Success")
        
    }

    const Handleclick4 = () => {
        // Split the sentence into words
        let words = text.split(' ');
        let reversed = [];
    
        // Loop through the words array from the end to the beginning
        for (let i = words.length - 1; i >= 0; i--) {
            reversed.push(words[i]);
        }
    
        // Join the reversed words into a new sentence
        let reversedText = reversed.join(' ');
    
        // Update the state with the reversed sentence
        settext(reversedText);
        props.Showalert("Words are reversed.","Success")
    }

   
    

    const Handleonchange = (event) =>{
        settext(event.target.value);

    }
    const [text, settext] = useState("")
    
    return (
     <>   
    <div>

        <div className='container my-3' style={{backgroundcolour: props.mode==='dark'? 'navy': 'white', color:props.mode=== 'dark'?'white': 'navy'}}>
            <h1>{props.heading}</h1> 
            <textarea className="form-control" onChange={Handleonchange} value={text} style={{backgroundcolour: props.mode==='dark'? 'navy': 'white', color:"navy"}}   id="floatingTextarea" rows="10"></textarea>
        </div>

        <div className="container">
        <button className="btn btn-primary mx-1" onClick={Handleclick1} >Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={Handleclick2}> Convert to Lowerercase </button>
        <button className="btn btn-primary mx-1" onClick={Handleclick3}> Clear </button>
        <button className="btn btn-primary mx-1" onClick={Handleclick4}> Reverse words </button>
        </div>
        <div className="container my-3" style={{backgroundcolour: props.mode==='dark'? 'navy': 'white', color:props.mode=== 'dark'?'white': 'navy'}}>

            <h4>Preview Text</h4>
            
            <p>{text}</p>
            <p>Words: {text.trim().split(/\s+/).filter(Boolean).length} Characters: {text.replace(/\s+/g, '').length} Time required to read: {0.008 *text.trim().split(/\s+/).filter(Boolean).length}</p>
        </div>

    </div>
    </>
  )
}

