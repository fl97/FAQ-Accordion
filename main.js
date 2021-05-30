let collapse = document.getElementsByClassName("question")
let i

for (i = 0; i < collapse.length; i++) {
    collapse[i].addEventListener("click", function() {
        this.classList.toggle("active")
        let answer = this.nextElementSibling
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px"
        }
    })
}