

export const MyButton = (props) => {

    return (
        <button onClick={props.func} className="header__btn" type="submit">{props.children}</button>
    );

}