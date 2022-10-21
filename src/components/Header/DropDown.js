export default function DropDown(props) {
    return <ul className="dropdown">
        {props.list.map((value,index)=>{
            return <li key={index}><a href="#!">{value}</a></li>
        })}
    </ul>
}