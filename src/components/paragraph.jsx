import Content from "./content.jsx";
import styles from '../css/paragraph.module.css';

export default function Paragraph(props){
    return(
        <>
        { props.data.map((data)=>{
            return (    
                <div key={data['kwargs']['id']} className={styles.paragraph}>
                    <Content className={(data['id'][2]=="AIMessage")?styles.aicontent:styles.humancontent} 
                    data={data['kwargs']['content']} type={data['id'][2]}/>
                </div>
                )
                }
            )}
        </>
    )
}