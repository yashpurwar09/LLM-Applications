import input from "../css/input.module.css"
export default function Input(inp){
    return(
        <>
            <textarea id={input.input} placeholder={inp.placeholder} value={inp.value} onChange={inp.onChange} />
        </>
    )    
}