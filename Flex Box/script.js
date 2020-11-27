
let viewElement = document.querySelector("#view");

let itemSelecionado;
function adicionarItem() {
    let node = document.createElement("div");                 
    let textnode = document.createTextNode(viewElement.childElementCount);
    node.appendChild(textnode)

    viewElement.appendChild(node);
    node.classList.add("item");
    node.onclick = (event) => {
        itemSelecionado = event.target
       document.querySelector("#order").value = itemSelecionado.style.order;
    }
}

function removerItem() {
    // Verifica se existe pelo menos um elemento filho
    if (viewElement.lastElementChild)
        viewElement.removeChild(viewElement.lastElementChild)
}


function aplicar(event) {
    viewElement.style.cssText += event.path[1].children[1].id + ":" +  event.path[1].children[1].value

}

function aplicarItem(event) {
    if (event.path[1].children[1].id === "flex-basis")
        itemSelecionado.style.cssText += event.path[1].children[1].id + ":" + event.path[1].childNodes[3].value + "px"
    else
    itemSelecionado.style.cssText += event.path[1].children[1].id + ":" + event.path[1].childNodes[3].value
}




document
    .querySelectorAll("#display > button")
    .forEach((element, number, parent)=>{
        element.addEventListener("click", ()=>{
            
        })
    }, null)