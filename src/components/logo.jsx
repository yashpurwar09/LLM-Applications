import logo from "../css/logo.module.css"
export default function Logo(props){
    return(
        <div id={logo.logo}><h2>{props.data}</h2></div>
    )
}