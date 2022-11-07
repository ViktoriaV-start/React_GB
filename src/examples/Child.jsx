

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
// export const Child = ({children}) => {

//     const handleClick = () => {
//         console.log(children);
//     }

//     return (
//         <button onClick={handleClick}>{children}</button>
//     );
// }

// УРОК 5
// РАЗНЫЕ КОМПОНЕНТЫ ИСПОЛЬЗУЮТ ПРОП color, точно такой же, как и этот компонент
// В этом случае создается ХОК (HOC) - компонент верхнего уровня
// Этот ХОК-функция принимает компонент в качестве аргумента, далее возвращает
// еще функцию, которая принимает все его собственные пропсы в качестве аргументов 
// и возвращает 
// этот самый компонент, который был принят в начале, которому будут передаваться 
// все его же пропсы, которые были приняты во второй фунции, и дополнитльно можно указать
// еще параметр 


const withBlueColor = (Component) => (props) => {
    return <Component {...props} color="lightblue" />
}

export const Child = ({color="lightcoral"}) => {

    return (
    <>
        <div style={{ backgroundColor: color }}>КАКОЙ-ТО ТЕКСТ</div>
        <button>КНОПКА</button>
    </>
    );
}

export const ChildWithBlue = withBlueColor(Child);