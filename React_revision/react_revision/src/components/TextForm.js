import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, settext] = useState('')
    const [wordcount, setwordcount] = useState(0)
    const [charcount, setcharcount] = useState(0)
    

    const onhandleupclick = () => {
        console.log("Upper Case Clicked")
        let newtext = text.toUpperCase();
        settext(newtext)
        props.showAlert("Converted to Upper Case","Success")
    }

    const onhandlelowclick = () => {
        console.log("Lower Case Clicked")
        let newtext = text.toLowerCase();
        settext(newtext)
        props.showAlert("Converted to Lower Case","Success");
    }

    const onchanged = (event) => {
        console.log("on change button clicked")
        settext(event.target.value)
        let newtext = event.target.value
        setcharcount(newtext.length)
        // const words = newtext.trim().split(/\s+/).filter((word) => word.length > 0); stl
        // setwordcount(words.length);

        let wordcount=0;
        let inword = false;

        for(let i=0;i<newtext.length;i++){
            if(newtext[i]!== ' ' && !inword){
                wordcount++;
                inword = true;
            }
            else if(newtext[i]===' ')
                inword = false;
        }
        setwordcount(wordcount);

    }

    const onhandlecopy = ()=>{
        let text = document.getElementById("my-box")
        alert("Copied from Clipboard")
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied","Success")
    }

    return (
        <>
            <div className='container' style = {{color:props.mode==='dark'? 'white': 'black'}}>
                <h1>{props.heading}</h1>
                <form>
                    <div className="mb-3">
                        <textarea className='form-control' value={text} onChange={onchanged}  id="my-box" rows="8"></textarea>
                    </div>
                </form>
                <button className='btn btn-primary mx-2' onClick={onhandleupclick}>Convert to Upper Case</button>
                <button className='btn btn-primary mx-2' onClick={onhandlelowclick}>Convert to Lower Case</button>
                <button className='btn btn-primary mx-2' onClick={onhandlecopy}>Copy to clipboard</button>
            </div>
            <div className='container my-3' style = {{color:props.mode==='dark'? 'white': 'black'}}>
                <h1>Your text Summary</h1>
                <p>{wordcount} Words and {charcount} Characters</p>
            </div>
        </>

    )
}
