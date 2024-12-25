function Component(props)
{
    return(
        <div className="ALL">
           <span> {props.data.name}</span>
           <button onClick={()=>{alert(" click function call on address")}}>{props.data.address}</button> 
        </div>

    )
}
export default Component;