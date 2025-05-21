const inputBox = document.getElementById("inputBox");
const buttons = document.querySelectorAll("button");

let string = "";
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML === "AC") {
            string = "";
            inputBox.value = "";
        } else if (e.target.innerHTML === "Del") {
            string = string.slice(0, -1);
            inputBox.value = string;
        } else if (e.target.innerHTML === "=") {
            try {
                string = eval(string);
                inputBox.value = string;
            } catch {
                inputBox.value = "Error";
                string = "";
            }
        } else {
            string += e.target.innerHTML;
            inputBox.value = string;
        }
    });
});