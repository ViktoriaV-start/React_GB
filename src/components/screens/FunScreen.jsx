import { CircularProgress } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FETCH_STATUSES } from "../../config/constants";
import { getArticles } from "../../store/articles/actions";

import { selectArticles, selectArticlesError, selectArticlesStatus } from "../../store/articles/selectors";
import { Error } from "../alerts";



export const FunScreen = () => {
  const dispatch = useDispatch();

  const articles = useSelector(selectArticles);
  const error = useSelector(selectArticlesError);
  const status = useSelector(selectArticlesStatus);


  const sendRequest = () => {
    dispatch(getArticles());
  };

  // const closeAlert = () => {
  //   dispatch(false);
  // }


  // useEffect(() => {
  //   sendRequest();
  // }, []);



  return (
  <div className="container">


    
    {error && <Error>Something went wrong... Try later!</Error>}
 
    <img src="/React_GB/img/naruto.jpg" alt="Naruto"></img>
    <h1 onClick={sendRequest}>hhh</h1>
    {status === FETCH_STATUSES.REQUEST && <CircularProgress />}

    
      <div>
        <span>{articles.character}</span>
        <span>{articles.quote}</span>
      </div>
    
    
  
  </div>
  
  )
}




// const sendRequest = async () => {
//   try {
//     setLoading(true);
//     const response = await fetch(API_URL_ART);
//     console.log(response.ok)

//     if (!response.ok) {
//       setError(true);
//       throw new Error (`Status ${response.status}`);
//     }

//     const result = await response.json();
    
//     setArticles(result);
//     // setLoading(false);

//   } catch (e){
//     console.log(e.message);
//     // setLoading(false);
//   } finally {
//     setLoading(false);
//   }
// };