import {useEffect, useState} from "react";

export const Count = () => {
    const [count, setCount] = useState(0);
 // [имя переменной, меняющая эту переменную ф-ция] = useState(1) - хранилище

    const handleClick = () => { // здесь контекст не важен
        setCount((prevCount) => prevCount + 1);
        // ф-ция prevCount всегда берет предыдущее значение,
        // ее используют, чтобы реакт не потерял какие-либо данные, если
        // в коде идем много заявок на SetCount
    }



    // Чтобы запустить что-то при размонтировании - необходимо вернуть ф-цию из useEffect
    // следующего вида С ПУСТЫМ МАССИВОМ ЗАВИСИМОСТЕЙ:
    useEffect(() =>
    {
        return () => {
            console.log('like will unmount');
        }
    }, []);

    // Но вот такой вид, с возвратом функции, будет работать тне только
    // при размонтировании, но и перед обновлением:
        useEffect(() => {
            console.log('count did mount');
            return () => {
                console.log('like will unmount');
            }}, [count]);


    return <>
        <p>Count state: {count}</p>
        <button type="button" onClick={handleClick}>Click</button>
    </>

}

