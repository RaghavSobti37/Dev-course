import React , {useState} from 'react'


export default function TextForm(props) {
    const handleUpperCaseClick = () =>{
        console.log("Uppercase Selected");
        setText("You have Clicked on handleUpperCaseClick");
    }

    const handleOnChange = (event) =>{
        console.log("On Change");
        setText(event.target.value);
    }
    const [text,setText] = useState('Enter text here');
    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value = {text} onChange={handleOnChange} id="mybox" cols="30" rows="10"></textarea>
            </div>
            <div className="button btn btn-primary" onClick={handleUpperCaseClick}>Convert to UPPERCASE</div>
        </div>
  )
}
