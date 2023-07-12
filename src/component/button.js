function Button({txt,fnc}){
    return(
        <button onClick={fnc}>{txt}</button>
    );
}
export default Button;