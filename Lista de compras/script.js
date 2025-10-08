var button = document.getElementById("Add");
var Input = document.getElementById("Input");
var ul = document.querySelector("ul");

button.addEventListener("click", function() {
    if (Input.value.length > 0) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(Input.value));
        ul.appendChild(li);
        Input.value = "";
        var buttonDelete = document.createElement("button");
        buttonDelete.appendChild(document.createTextNode("Delete"));
        buttonDelete.onclick = Delete;
        li.appendChild(buttonDelete);
    }
})

function Delete(e) {
    e.target.parentNode.remove();
}
