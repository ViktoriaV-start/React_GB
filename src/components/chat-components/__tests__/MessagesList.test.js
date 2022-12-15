
import { render, screen } from "@testing-library/react"; // импорт из допю библиотеки для dom

import { MessagesList } from "../MessagesList";

describe("MessagesList", () => {


  it("snapshot", () => {

    const messages = [
      {
        id: 'msg-1',
        author: 'author',
        text: 'text'
      },
      {
        id: 'msg-2',
        author: 'author2',
        text: 'some'
      },
    ];

    const deleteMsg = () => {};

    const component = render(
      <MessagesList messages={messages || {}} deleteMsg={deleteMsg} />
    );

    expect(component).toMatchSnapshot();  // создание идеального контрольного снапшота, 
    // с которым будут сравниваться дальнейшие тесты и, особенного, тесты после изменения компонента,
    // если компонент будет изменен - предложат обновить снапшот.
  });

  it("renders passed text", () => {

    const messages = [
      {
        id: 'msg-1',
        author: 'author',
        text: 'text'
      },
      {
        id: 'msg-2',
        author: 'author2',
        text: 'some'
      },
    ];

    const deleteMsg = () => {};

// 1) *************** ПРоВЕРКА НАЛИЧИЯ ОПРЕДЕЛЕННОГО ТЕКСТА В ОТРЕНДЕРЕННОМ КОМПОНЕНТЕ ****************

    // Имитация рендера компонента в тестировщике
    const component = render(<MessagesList messages={messages || {}} deleteMsg={deleteMsg} />);
    const text = component.getByText(/some/); // поиск текста в отрендеренном компоненте
    expect(text).toBeDefined(); // проверка
  });



  it("renders passed text", () => {

    const messages = [
      {
        id: 'msg-1',
        author: 'author',
        text: 'text'
      },
      {
        id: 'msg-2',
        author: 'author2',
        text: 'Well done'
      },
    ];

    const deleteMsg = () => {};


// 2) ЧЕРЕЗ SCREEN-  ПРоВЕРКА НАЛИЧИЯ ОПРЕДЕЛЕННОГО ТЕКСТА В ОТРЕНДЕРЕННОМ КОМПОНЕНТЕ ****************

    render(<MessagesList messages={messages || {}} deleteMsg={deleteMsg} />);
    const text = screen.getByText(/Well done/);  // поиск по скрину
    const author = screen.getAllByText(/author/);  // поиск по скрину
    
    expect(author).toBeDefined();
    expect(text).toBeDefined();
  });
});

