
import { Message } from "../components/Message";
import {useState} from "react";


export const Main = () => {

    const name = "Guest";

    return (
        <>
            <header className="header-wrapper">
                <div className="header container">LET'S CHAT====</div>
            </header>

            <section className="chat container">
                <div className="chat__salute">Hello, {name}, welcome to our chat!</div>
                <Message/>
            </section>
        </>




    )
};



// <div className="form">
//
//     <h2 className="h2">Class components</h2>
//     <CountClass count={10}/>
//     <div><FormClass /></div>
//
//     <h2 className="h2">Func components</h2>
//     <h3>Компонент Count</h3>
//     <Count />
//     <p>***</p>
//
//     <h3>Компонент Parent</h3>
//     <p>{num}</p>
//     <input onChange={handleChangeName}/>
//
//     <h3>Компонент Child</h3>
//     <Child name={name} handleChangeNum={setNum}/>
//     {/*передать пропсами имя и ссылку на функцию SetNum для изменения переменной*/}
//     {/* num под названием handleChangeNum*/}
//
//     {array.map((item, idx) => <div key={idx}>{item}</div>)}
//
//     <Form />
//
// </div>

