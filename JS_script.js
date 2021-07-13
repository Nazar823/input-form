let count = 0;
function JSclick() {
    let input_text = document.getElementById("main");
    let text = input_text.value;
    count++;
    let new_input = document.createElement("input");
    new_input.id="inp_" + count;
    if (count % 2 === 0){
        new_input.value = text.toUpperCase();
    } else {
        new_input.value = text.toLowerCase();
    }
    let last_input = document.getElementById("inp_" + (count-1));
    if (last_input !== null){
        if (last_input.value === "555"){
            new_input.value = "---";
        }
    }
    input_text.value="";
    document.body.append(document.createElement("br"));
    document.body.append(document.createElement("br"));
    document.body.append(new_input);
}