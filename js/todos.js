const CosasPorHacer = document.querySelector("CosasPorHacer");

const requestJson = "../json/todos.json";

const request = new XMLHttpRequest();
request.open("GET", requestJson);

request.responseType = "json";
request.send();

request.onload = function () {
  const tareas = request.response;
  tareasPorHacer(tareas);
};

function tareasPorHacer(jsonObj) {
  const tareasTodo = jsonObj["results"];

  for (var i = 0; i < tareasTodo.length; i++) {
    const myH3 = document.createElement("h3");

    myH3.textContent = tareasTodo[i].title;
    console.log(myH3);
  }
}
