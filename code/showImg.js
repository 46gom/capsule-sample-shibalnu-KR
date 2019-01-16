// 설정한 property(capsule.properties)로부터 데이터를 가져옵니다.
const baseURL = config.get("baseUrl");

module.exports.function = function showImg (query) {
  if(query.length === 0){
    throw fail.checkedError("No Result", "NoResult");  
  }
  
  var mode = query.mode.random;
  var response = null;
  var result = {};
  
  if(query.mode.images == true){
    url = baseURL + '15';
    
    //외부 API로 부터 데이터를 받습니다. (https://bixbydevelopers.com/dev/docs/reference/JavaScriptAPI/http)
    // cacheTime: cache 시간을 설정합니다, returnHeaders: API에 대한 Response를 Header 형식으로 받습니다.
    response = http.getUrl(url, {format:"json", cacheTime: 0, returnHeaders:true});
    
    if(response.status == 404){
      throw fail.checkedError("No Result", "NoResult");  
    }
    
    objects = [];
    for(var key in response.parsed.message){
      objects.push({
        url: response.parsed.message[key],
        caption: "shiba"
      });
    }
    result.photos = objects;
    
  }else{
    url = baseURL + '1';
    response = http.getUrl(url, {format:"json", cacheTime: 0, returnHeaders:true});
    
    if(response.status == 404){
      throw fail.checkedError("No Result", "NoResult");  
    }
    
    result.photos = {url: response.parsed.message, caption: "shiba"};
  }
  
  console.log(result.photos);
  return result;
}
