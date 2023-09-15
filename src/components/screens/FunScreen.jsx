import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_STATUSES } from "../../config/constants";
import { getArticles, getArticlesFailure } from "../../store/articles/actions";

import { selectArticles, selectArticlesError, selectArticlesStatus } from "../../store/articles/selectors";
import { Error } from "../alerts";
import { MyButton } from "../MyButton";


export const FunScreen = () => {
  const dispatch = useDispatch();

  const articles = useSelector(selectArticles);
  const error = useSelector(selectArticlesError);
  const status = useSelector(selectArticlesStatus);

  const sendRequest = () => {
    closeAlert();
    dispatch(getArticles());
  };

  useEffect(() => {
    sendRequest();
  }, []);

  const closeAlert = () => {
    dispatch(getArticlesFailure(null));
  }

  return (
  <>
    <div className="container">
      {error && <Error closeAlert={closeAlert}>Something went wrong... Try later!</Error>}
      <div className="fun">
        <div className="fun__quote">
          <img className="fun__logo" src="/React_GB/img/naruto1_logo.webp" alt="Naruto"></img>
          <div>
            {/* <div className="fun__character">{articles.character}</div>
            <p className="fun__text">{articles.quote}</p> */}

            <div className="fun__character">{articles.data.title}</div>
            <div className="fun__character">{articles.data.title_english}</div>


          </div>

          <div className="fun__btn">
            <MyButton func={sendRequest}>New quote</MyButton>
          </div>

          <div className="fun__progress">
            {status === FETCH_STATUSES.REQUEST && <CircularProgress color='primary'/>}
          </div>

        </div>

        <img className="fun__img" src="/React_GB/img/naruto.webp" alt="Naruto"></img>  
    </div>
  </div>
  {/* <div className="video">
    <a href="https://naruto-official.com/">https://naruto-official.com/</a>
    <iframe width="810" height="456"
    src="https://www.youtube.com/embed/yKELA1qBAKA"
    title="'ROAD OF NARUTO'"
    frameBorder="0"
    // allow="accelerometer; autoplay; clipboard-write; encrypted-media;
    // gyroscope; picture-in-picture"
    allow='autoplay; encrypted-media'
    allowFullScreen>
    </iframe>
  </div> */}
  </>
  )
}


