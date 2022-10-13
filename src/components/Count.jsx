import {useState} from "react";

export const Count = () => {
    const [count, setCount] = useState(1);
 // [имя переменной, меняющая эту переменную ф-ция] = useState(1) - хранилище

    const handleClick = () => { // здесь контекст не важен
        setCount((prevCount) => prevCount + 1);
        // ф-ция prevCount всегда берет предыдущее значение,
        // ее используют, чтобы реакт не потерял какие-либо данные, если
        // в коде идем много заявок на SetCount
    }
    return <>


        <p>Count state: {count}</p>
        <button type="button" onClick={handleClick}>Click</button>
    </>

}

