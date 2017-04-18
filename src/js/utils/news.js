import {receiveSources} from '../actions/SearchServerActions.js';
import request from 'superagent';
const baseUrlSource = "https://newsapi.org/v1/sources";


export function searchSources(query){
    request.get(`${baseUrlSource}&q=${query}&per_page=5`)
    .set('Accept','application/json')
    .end((err,response)=>{
        if(err) return console.error(err);
        receiveSources(response.body.data);
    })
}

