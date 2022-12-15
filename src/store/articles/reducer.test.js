import { getArticlesRequest } from "./actions";
import { articlesReducer } from "./reducer";
import { FETCH_STATUSES } from "../../config/constants";

describe('articles reducer', () => {
  it('if request action is called - error is setted to null', () => {
    const result = articlesReducer( 
      // 2 аргументы - потому что наш редьюсер принимает 2 аргумента 
      //- предыдущий state и action (конкретно этот getArticlesRequest)
      {                       // первый аргумент - начальное значение, ставим параметры сами
      data: [],
      status: FETCH_STATUSES.IDLE,
      error: 'some error',
    }, 
    getArticlesRequest()     // второй аргумент- action
    );

    expect(result.error).toBeNull();


  });
});