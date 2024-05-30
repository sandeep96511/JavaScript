let text_color_sec = document.querySelector(".text-color-sec").children;
let input = document.querySelector(".color-sec").children[0];
// console.log(input, text_color_sec);
let add_note = document.querySelector("button");
// console.log(add_note);
let right_container = document.querySelector(".right-container");
// console.log(right_container);



add_note.addEventListener("click" ,()=>{
    if(text_color_sec[0].value == ""){
        alert("Enter some text");
    }

    if (text_color_sec[0].value != "") {
        addNotes(text_color_sec[0].value, input.value);

        text_color_sec[0].value = "";
        input.value = "#e66465";

        document.querySelector("span").style.display = "none";
    }

    removeNotes();
})


function addNotes(note, color){
    div1 = document.createElement("div");
    div1.innerHTML = `<p>${note}</p>
    <button class="note-button">X</button>`;
    div1.style.backgroundColor = `${color}`
    right_container.appendChild(div1);
}
 function removeNotes(){
    let buttons = document.querySelectorAll(".note-button");
    buttons.forEach(val=>{
        val.addEventListener("click", ()=>{
            // console.log(val);
            val.parentElement.remove();
        })
    })
 }
 