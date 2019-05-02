module.exports.function = function getReCommendKeywords () {
  const config = require('config');
  const fail = require('fail');
  const http = require('http');
  const console = require('console');
  console.log(query);
  
  // 설정한 property(capsule.properties)로부터 데이터를 가져옵니다.
  const url = config.get("keywordUrl");

  let mode = query.mode.random;
  let response = null;
  let result = {};
  
  // 외부 API로 부터 데이터 받음 (https://bixbydevelopers.com/dev/docs/reference/JavaScriptAPI/http)
  // cacheTime: cache 시간을 설정, returnHeaders: API에 대한 Response를 Header 형식으로 받음.
  response = http.getUrl(url, {format:"json", cacheTime: 0, returnHeaders:true});

  if(response.status == 404){
    throw fail.checkedError("No Result", "NoResult");  
  }

  console.log("--- resp. ---");
  console.log(response);

  return result;
}
