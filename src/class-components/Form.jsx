import React from 'react';

export class Form extends React.Component {
    state = {
        name: 'Jay',
        arr: ['ivanov', 'petrov', 'sidorov']
    }

    handleChangeName = (event) => {
        this.setState({ name: event.target.value});
    }

    handleSubmit = (event) => {
        event.preventDefault(); // чтобы страничка не перезагружалась при нажатии на кнопку
        console.log(this.state.name);
        console.log(event.target.elements.login.value);
        console.log(event.target.elements.password.value);
    }
    render() {  // в любом классе должен быть этот метод render()

        // console.log(this);  // вернет сам класс Form - Object

        return <form onSubmit={this.handleSubmit}>

            <p>Имя: {this.state.name}</p>
            <input type="text" onChange={this.handleChangeName} name="login"/>
            <input type="text" name="password" />
            <button>Send form</button>
            {this.state.arr.map((item, idx) => {
                return <div key={idx}>{item}</div>;
            })}

        </form>
    }
}