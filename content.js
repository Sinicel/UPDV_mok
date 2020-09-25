$(document).ready(function () {
console.log("veikia");
/*     const url = 'http://updv:83/UPDVService/UPDVWebService.asmx';
const header = new Headers();
//const sours ='';
const sours = '<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n'+' <soap:Header>\n '+'<AuthHeader xmlns="http://tempuri.org/">\n '+' <UserName>audriussi</UserName>\n '+' <PostID>12020</PostID>\n '+' <PC>06</PC>\n '+' <IP>fe80::c83d:cb90:5d4f:716e%11</IP>\n '+' <HostName>VACP1202006</HostName>\n '+' <Source>GUI</Source>\n '+' <SessionID/>\n '+' <Acsess_MD5>UgK/r/FipxNFzA893hlApA==</Acsess_MD5>\n '+' <Version>1.6.5.1</Version>\n '+' <Compression>NOZIP</Compression>\n '+'</AuthHeader>\n '+' </soap:Header>\n '+' <soap:Body>\n '+'<ReturnDataSet xmlns="http://tempuri.org/">\n '+' <strSql>\n '+'select * from LP_KLSF_SYSTEMS\n '+' </strSql>\n '+'</ReturnDataSet>\n '+' </soap:Body>\n '+'</soap:Envelope>'
//header.append("Host", "updv:83");
/* header.append("Access-Control-Allow-Methods", "GET"); 
header.append('Access-Control-Request-Headers', 'POST') */
/*header.append("Content-Type", "text/xml")
header.append("Cache-Control", "cache")
let options = {
    method:'post',
    body: sours,
    headers: header,
   // mode: 'no-cors',
    redirect:'follow'
}


 fetch(url, options)
  .then(response =>response.text())
 
  .then(result => console.log(result)); /* обрабатываем результат */ 
 
console.log("suveike content.js")
});
