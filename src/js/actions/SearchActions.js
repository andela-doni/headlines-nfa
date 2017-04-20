import AppDispatcher from '../utils/AppDispatcher';
import { Actions } from '../utils/AppConstants.js';
//import * as API from '../utils/news.ja';
import request from 'superagent';

export function searchSources(){
    request.get("https://newsapi.org/v1/sources")
    .set('Accept','application/json')
    .end((err,response)=>{
        if(err) return console.error(err);
        
        let result = JSON.parse(response.text);

       AppDispatcher.dispatch({
        type:Actions.GET_SOURCES,
        query:result.sources,

    });

    })
    
}

