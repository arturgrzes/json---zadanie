'use script'


var text = '{ '+
    '"pracownicy":[' +
    
'{"firstName": "Krystian", "lastName": "Dziopa"},' +
'{"firstName": "Anna", "lastName": "Szapiel"},' +
'{"firstName": "Piotr", "lastName": "Żmuda"}' +
' ] ' +
' }' ;

var jsonPracownicy = JSON.parse(text);

console.log(jsonPracownicy);

jsonPracownicy.pracownicy.forEach(function (element, index) { 
    console.log(element);
});