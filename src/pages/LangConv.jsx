import Input from "../components/Input";
import Button from "../components/Button"
import Content from "../components/content";
import Logo from "../components/logo"
import { useState, useEffect } from "react";
import styles from "../css/languageconverter.module.css";
import Select from "../components/Select";

export default function LangConverter(){
    const [input, setInput] = useState("");
    const [userInput, setUserInput] = useState("");
    const [output, setOutput] = useState("");
    const [language, setLanguage] = useState("Hindi");
    
    function handleLanguage(e){
        setLanguage(e.target.value)
    }

    function handleSubmit(){
        setUserInput(input);
    }

    useEffect(()=>{
        if(userInput){
            fetch(`http://localhost:3000/LangConverter?text=${userInput}&language=${language}`)
            .then((res)=>res.text())
            .then((text)=>setOutput(`Translation: ${text}`))
            // setInput("")
            // setUserInput("")
        }
    },[userInput, language])

    return(
        <>
        <Logo data={"Language Converter"} />
        <div id={styles.main1}>
            <Input placeholder="Input text" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <Button type="submit" handleSubmit={handleSubmit}/>
        </div>
        <div id={styles.main2}>
            <Select language={language} handleLanguage={handleLanguage}/>
            <Content className={styles.aicontent} data={!output?<p>Translation</p>:output}/>
        </div>
        </>
    )
}