import { getArticles, getArticlesRequest, getArticlesSuccess, getArticlesFailure, GET_ARTICLES_REQUEST, GET_ARTICLES_FAILURE } from "../actions";

describe('getArticlesRequest', () => {
// it или test (равны)

it('returns obj with predifined type', () => {

// 1) что ожидаем получить при вызове этой функции (здесь - объект с таким содержимым)
  const myResult = {
    type: GET_ARTICLES_REQUEST,
  };

// 2) Ожидаемый езультат expected является вызовом следующей функции:
  const myFunc = getArticlesRequest();

// 3) Собственно само тестирование, функции expect, toEqual, it 
// ни откуда не импортирутся, они являются собственными от jest
expect(myFunc).toEqual(myResult);

});
});

describe('getArticles', () => {
  
  //************* 1) первая строка
  it('dispathing getArticlesRequest', () => {

    // создать моковый диспатч с помощью встроенной в мок ф-ции
    const mockDispatch = jest.fn(); 
    fetch.mockResponse(JSON.stringify([])); // имитация всех вызовов фетч

    // Ф-ция getArticles вызывается дважды - в первый ничего не передаем,
    // во второй вызов передаем созданный нами моковый диспатч,
    // который имитирует настоящий наш диспатч в коде:
    getArticles()(mockDispatch);

    // А вот теперь проверка, что мокДиспатч был вызван с аргументом getArticlesRequest:
    expect(mockDispatch).toHaveBeenCalledWith(getArticlesRequest());
  });

//************ 2) Если успешный ответ:
  it('dispatching getArticlesSuccess with fetch result', async () => {

      const data = [{ name: 'test' }];
      fetch.mockResponse(JSON.stringify(data)); // имитация всех вызовов фетч

      const mockDispatch = jest.fn();

      await getArticles()(mockDispatch);
      expect(mockDispatch).toHaveBeenLastCalledWith(getArticlesSuccess(data));
  });

});