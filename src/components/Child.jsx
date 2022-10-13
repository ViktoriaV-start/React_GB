

export const Child = ({name, handleChangeNum}) => {

    const handleClick = () => {

        handleChangeNum(prevNum => prevNum + 1);

    }
    return <>
        <p>{name}</p>
        <button onClick={handleClick}>click</button>
        </>;
}