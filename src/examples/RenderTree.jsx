// import {useEffect, useState} from "react";

// export const RenderTree = () => {
//     console.log('render parent RenderTree - новая отрисовка');

//     return (
//         <div>
//             <RenderChild1 />
//             <RenderChild2 />
//         </div>
//     );
// }

// // Компонет Child1 - есть переменная(state)
// // При клике на свою кнопку - меняется state.
// // Меняется состояние и компонет отрисовывается заново - Rerender. Все отстальные компоненты не меняются.
// // Реакт сверяется изначально с VirtualDom и затем делает ререндр только этому элементу.
// const RenderChild1 = () => {
//     const [state, setState] = useState(false);
//     console.log('Render child 1 - новая отрисовка: MOUNT + RERENDER при изменении состояния');

//     useEffect(() => {
//         console.log('Child 1 - новая отрисовка - этот лог идет и при MOUNT, ' +
//             'НО НЕ ПРИ RERENDER при изменении состояния, так как завернут в useEffect c []');
//     },[]);

//     const change = () => setState(p => !p);

//     return (
//         <button onClick={change}>Child 1</button>
//     );
// }

// //Демонстрация перерисовки ветки
// const RenderChild2 = () => {
//     const [state, setState] = useState(false);
//     console.log('Render child 2 - новая отрисовка: MOUNT + RERENDER при изменении состояния');
//     const change = () => setState(p => !p);

//     return (
//         <div>
//             <button onClick={change}>Child 2</button>

//         {/*при изменении типа объект размонтируется и перемонтируется заново, вместо изменения*/}
//             {state ? <RenderChild3 /> : <p>Другой тип тега/ другой элемент вместо child3</p> }

//         {/*другой пример, одинаковый тип, тогда элемент не перемонтируется, а изменяется только класс внем*/}
//             <RenderChild4 />

//         </div>
//     );
// }

// const RenderChild3 = () => {

//     useEffect(() => {
//         console.log("Render child 3 - новая отрисовка," +
//             " этот console.log выводится только когда компонент делает MOUNT, НЕ ПРИ UPDATE," +
//             "потому что завернут в useEffect c []");

//         return () => {
//             console.log('Размонтирование child3');
//         }

//     }, []);

//     return (
//         <div>h2 Child 3</div>
//     )

// }

// // Монтирование только один раз - при MOUNT. Здесь меняют имя класса у компонента,
// // поэтому компонент не будет размонтирован и не будет нового монтирования.
// const RenderChild4 = () => {

//     const [className, setClassName] = useState('default');
//     useEffect(() => {
//         console.log("Render child4 - новая отрисовка," +
//             "этот console.log выводится только когда компонент делает MOUNT, НЕ ПРИ UPDATE," +
//             "потому что завернут в useEffect c []");
//     }, []);

//     const changeClass = () => {
//         setClassName('changed');
//     }

//     return (
//         <>
//             <h3 className={className} id = 'child4'>h3 Child 4</h3>
//             <button onClick={changeClass}>Изменить имя класса</button>
//         </>

//     )
// }


const foo = (a, b) => `${a} = ${b}`;

function addLog(func) {
    return function(...args) {
        console.log('0-0-0-0-0');
        return func(...args);
    }
}

const fooWithLog = addLog(foo);
fooWithLog(1, 2);
