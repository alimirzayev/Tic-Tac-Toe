let ul = document.querySelector("ul")

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        ul.innerHTML += `
            <li data="${i}_${j}"></li>
        `
    }
}

let li = document.querySelectorAll("li")
let sira = true // X
let arr = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]
li.forEach(el => {
    el.addEventListener("click", function () {
        if (el.innerText == "" && !winner()) {
            let data = el.getAttribute("data").split("_")
            let x = data[0]
            let y = data[1]
            console.log(data);
            if (sira) {
                el.innerText = "X"
                arr[x][y] = 1
                sira = !sira
            } else {
                el.innerText = "O"
                arr[x][y] = 2
                sira = !sira
            }

            winner()
        }
        console.log(arr);
    })
})

function winner() {
    if (
        arr[0][0] == 1 && arr[0][1] == 1 && arr[0][2] == 1 ||
        arr[1][0] == 1 && arr[1][1] == 1 && arr[1][2] == 1 ||
        arr[2][0] == 1 && arr[2][1] == 1 && arr[2][2] == 1 ||
        arr[0][0] == 1 && arr[1][0] == 1 && arr[2][0] == 1 ||
        arr[0][1] == 1 && arr[1][1] == 1 && arr[2][1] == 1 ||
        arr[0][2] == 1 && arr[1][2] == 1 && arr[2][2] == 1 ||
        arr[0][0] == 1 && arr[1][1] == 1 && arr[2][2] == 1 ||
        arr[0][2] == 1 && arr[1][1] == 1 && arr[2][0] == 1
    ) {
        setTimeout(() => {
            swal("X", "is winner!", "success");
        }, 200);
        return true
    } else if (
        arr[0][0] == 2 && arr[0][1] == 2 && arr[0][2] == 2 ||
        arr[1][0] == 2 && arr[1][1] == 2 && arr[1][2] == 2 ||
        arr[2][0] == 2 && arr[2][1] == 2 && arr[2][2] == 2 ||
        arr[0][0] == 2 && arr[1][0] == 2 && arr[2][0] == 2 ||
        arr[0][1] == 2 && arr[1][1] == 2 && arr[2][1] == 2 ||
        arr[0][2] == 2 && arr[1][2] == 2 && arr[2][2] == 2 ||
        arr[0][0] == 2 && arr[1][1] == 2 && arr[2][2] == 2 ||
        arr[0][2] == 2 && arr[1][1] == 2 && arr[2][0] == 2
    ) {
        setTimeout(() => {
            swal("O", "is winner!", "success");
        }, 200);
        return true
    }
}