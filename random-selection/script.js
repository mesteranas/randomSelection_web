function add() {
    var name = prompt("Type your name");
    if (name !== null && name !== "") {
        var select = document.getElementById("names");
        var option = document.createElement("option");
        option.value = name;
        option.text = name;
        select.appendChild(option);
    }
}

function choose() {
    var names = document.getElementById("names").options;
    if (names.length > 0) {
        var randomIndex = Math.floor(Math.random() * names.length);
        var selectedName = names[randomIndex].value;
        alert(selectedName);
        document.getElementById("choose1").play()
    } else {
        alert("No names available.");
    }
}

function deleteName() {
    var select = document.getElementById("names");
    if (select.options.length>0){
    var selectedOptions = Array.from(select.selectedOptions);
con=confirm("do you wanna to delete")
if(con==true){
    selectedOptions.forEach(function(option) {
        select.removeChild(option);
    });
}
} else{
    alert("please select name to remove")
}
}

function edit() {
    var select = document.getElementById("names");
    var selectedOption = select.selectedOptions[0];

    if (selectedOption) {
        var newName = prompt("Edit the name:", selectedOption.value);
        if (newName !== null && newName !== "") {
            selectedOption.value = newName;
            selectedOption.text = newName;
        }
    } else {
        alert("Select a name to edit.");
    }
}
