export default function Content(props){
    return(
        <>
        <p className={props.className}>
            {props.data}
        </p>
        </>
    )
}