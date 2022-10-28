

// export const Child = ({name, handleChangeNum}) => {
//
//     const handleClick = () => {
//
//         handleChangeNum(prevNum => prevNum + 1);
//
//     }
//     return <>
//         <p>{name}</p>
//         <button onClick={handleClick}>click</button>
//         </>;
// }


// УРОК 4 - CHILDREN
export const Child = ({children}) => {

    const handleClick = () => {
        console.log(children);
    }

    return (
        <button onClick={handleClick}>{children}</button>
    );
}