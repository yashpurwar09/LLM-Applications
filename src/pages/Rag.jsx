import { useState, useEffect } from "react";
import Input from "../components/Input"
import Button from "../components/Button"
import rag from "../css/rag.module.css"
import Content from "../components/content";
import Logo from "../components/logo";

export default function Rag(){
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [userInput, setUserInput] = useState("");

    function handleSubmit(){
        console.log("Button");
        
        setUserInput(input)
    }

    useEffect(()=>{
        if(userInput){
            console.log(userInput);
            
            // fetch(`http://localhost:3000/rag?question=${userInput}`)
            fetch(`https://llm-applications-backend.onrender.com/rag?question=${userInput}`)
            .then((res)=>{
                setOutput(res.text())
                console.log(output);
                
                setInput("")
                setUserInput("")
            })
        }
    },[userInput]);
    return(
        <>
            <Logo data={"RAG"} />
            <div id={rag.rag}>
                <Input placeholder="Question" value={input} onChange={(e)=>setInput(e.target.value)}/>
                <Button type="submit" handleSubmit={handleSubmit}/>
            </div>
            <div>
                <Content className={rag.aicontent} data={!output?<p>Answer will appear here.</p>:output} />
            </div>
        </>
    )
}