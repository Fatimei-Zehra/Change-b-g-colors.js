let buttonColors = document.getElementById("btn-change");

buttonColors.addEventListener("click", () => {

    const colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']

    let hexCode = '#';

    for (let i = 0; i < 6; i++) {

        let indexColors = Math.floor(Math.random() * 17)
        let value = colors[indexColors]

        hexCode += value;
        document.body.style.backgroundColor = hexCode;

    }
})

