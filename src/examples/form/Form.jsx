
// export const Form = () => {
//     const count = 1;
//     const name = "Jay";
//     return <form>
//         <input type="text" />
//         <button type="button">Send</button>
//
//         <p>Вывести переменную count из Form:</p>
//         <p class="data">{count}</p>
//
//         <p>Вывести переменную name из Form:</p>
//         <p class="data">{name}</p>
//
//     </form>
// }

import {useEffect} from "react";

export const Form = ({render, value}) => {
    const count = 1;
    const name = "Jay";

    useEffect(() => {
        console.log(value);
    });

    const handleChange = (value) => {
        console.log(value);
    }
    const handleSubmit = (ev) => {
        ev.preventDefault();
        console.log(555);
    }

    return (
        <form onSubmit={handleSubmit}>
            {render({ value, handleChange })}
        </form>
    )
}