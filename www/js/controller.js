function loadJSON(response)  {
    json = JSON.parse(response);
    alert(json[0].name);
};

function test() {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'json/images.json', true);
    xobj.onreadystatechange = function () {
        if(xobj.readyState == 4 && xobj.status == "200")  {
            loadJSON(xobj.responseText);
        }
    }
    xobj.send(null)
}



