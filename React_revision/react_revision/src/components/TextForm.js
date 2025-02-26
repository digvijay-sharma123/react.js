import React,{useState} from 'react'
export default function TextForm(props) {
    const [text,settext] = useState('')

    const onhandleupclick = ()=>{
        console.log("Upper Case Clicked")
        let newtext = text.toUpperCase();
        settext(newtext)
    }
    const onchanged = (event)=>{
        console.log("on change button clicked")
        settext(event.target.value)
    }
    return (
        <div>
            <h1>{props.heading}</h1>
            <form>
                <div className="mb-3">
                    <textarea className='form-control' value = {text} onChange={onchanged} id = "my-box" rows = "5"></textarea>
                </div>
            </form>
            <button className='btn btn-primary' onClick={onhandleupclick}>Convert to Upper Case</button>
        </div>
    )
}
