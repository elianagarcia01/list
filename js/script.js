//Traigo los elementos del input item, botones y el contenedor de la lista
item = document.getElementById("item");
agregarBtn = document.getElementById("agregarBtn");
limpiarBtn = document.getElementById("limpiarBtn");
contenedor = document.getElementById("contenedor");

let listado = [];
const list = JSON.parse(localStorage.getItem("itemList"));

//Verifico de que exista la list en el local Storage y lo designo a listado
if (list !== null) {
 listado = list
}

//recorre el listado y lo agrega al contenedor
if (listado.length > 0){
for (let i = 0; i < listado.length; i++){
    contenedor.innerHTML += `<li>${list[i]}</li>`;
}
}

//Al hacer click en el boton de "agregar", agrega el valor que este escrito en input al "listado" 
//del local storage y luego lo muestra en el contenedor 
agregarBtn.addEventListener("click", (evt) => {
    listado.push(item.value);
    localStorage.setItem("itemList", JSON.stringify(listado));
    if (item.value) {
        localStorage.setItem("item", item.value);
        contenedor.innerHTML += `<li class="list-group-item">${localStorage.getItem("item")}</li>`;
        item.value = "";
    }
});

//Al hacer click en el boton "Limpiar" remueve la lista y los items del local storage
// tambien deja vacio el "listado" y el "contenedor"
limpiarBtn.addEventListener("click", (evt) => {
  localStorage.removeItem("itemList");
  localStorage.removeItem("item");
  listado = [];
  contenedor.innerHTML = "";
});



