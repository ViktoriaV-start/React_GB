
export const Form = () => {
    const count = 1;
    const name = "Jay";
    return <form>
        <input type="text" />
        <button type="button">Send</button>

        <p>Вывести переменную count из Form:</p>
        <p class="data">{count}</p>

        <p>Вывести переменную name из Form:</p>
        <p class="data">{name}</p>

    </form>
}