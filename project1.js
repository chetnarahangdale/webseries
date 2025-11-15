function changename(){
    let name = document.querySelector("h1")
    let getname=prompt("enter the name");
    name.innerHTML= getname
}

let btn= document.querySelector("button")
btn.addEventListener("click",changename)