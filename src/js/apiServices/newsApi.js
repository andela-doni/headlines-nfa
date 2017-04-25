const request = require('superagent');
const baseUrlSource = "https://newsapi.org/v1/sources";


export function getSources(query,callback){
    request.get(`${baseUrlSource}&q=${query}&per_page=5`)
    .set('Accept','application/json')
    .end((err,response)=>{
        if(err){
            return callback(err,null);
        }
        callback(null,response.body);
    })
}



