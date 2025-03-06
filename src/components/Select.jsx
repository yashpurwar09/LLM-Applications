import { useState } from "react";
import styles from "../css/select.module.css"

export default function Select(props) {
    const language = ["English", "Spanish", "French", "Mandarin Chinese", "Arabic", "Hindi", "Bengali", "Russian", "Portuguese", "Indonesian", "German", "Japanese", "Urdu", "Punjabi", "Javanese", "Marathi", "Telugu", "Vietnamese", "Turkish", "Korean", "Tamil", "Gujarati", "Malayalam", "Thai", "Italian", "Egyptian Arabic", "Cantonese", "Persian", "Polish", "Ukrainian", "Swedish", "Dutch", "Norwegian", "Filipino", "Finnish", "Czech", "Romanian", "Danish", "Slovak", "Hungarian", "Croatian", "Bulgarian", "Serbian", "Greek", "Afrikaans", "Hausa", "Yoruba", "Igbo", "Swahili", "Amharic", "Oromo", "Somali", "Zulu", "Xhosa", "Kinyarwanda", "Lingala", "Kirundi"];

    return (
        <div id={styles.main}>
            <label id={styles.label} htmlFor="language">Choose a language:</label>
            <select name="language" id={styles.language} value={props.language} onChange={props.handleLanguage}>
                {language.map((lang) => {
                    return <option key={lang} value={lang}>{lang}</option>
                })}
            </select>
        </div>
    )
}