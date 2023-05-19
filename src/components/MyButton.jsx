

export const MyButton = (props) => {

    return (
        <button onClick={props?.func} className="btn" type="button">{props.children}</button>
    );

}