const callPyServer = (serverURL, imgURL, callback) =>
{
    let xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() { 
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
          callback(xmlHttp.responseText);
  }

    xmlHttp.open("POST", serverURL)
    xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    xmlHttp.send(JSON.stringify({"url":imgURL}));
}

let imagesOnPage = document.getElementsByTagName("img")

const cb = () => {
  for (let img of imagesOnPage) {
    //img.addEventListener("click", logSRC(img.getAttribute("src")), false)
    let imgSRC = img.getAttribute('src')
  
    img.addEventListener('click', () => { console.log("waiting")
    img.setAttribute("alt", "waiting");
      callPyServer(`http://localhost:8000/caption/`, imgSRC,
    (res) => {
    console.log(res)
    img.setAttribute("alt", res)})})
  }
}


setTimeout (cb, 1000)