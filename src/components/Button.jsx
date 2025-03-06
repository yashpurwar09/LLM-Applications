import button from "../css/button.module.css"

export default function Button(btn){
    return(
        <>
        <button id={button.button} type={btn.type} onClick={btn.handleSubmit}>Go</button>
        </>
    )
}