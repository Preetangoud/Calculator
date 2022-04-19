let buttons = document.getElementById("buttons");
let btn = document.querySelectorAll("button");
let result = document.getElementById("result");

for(let i=0; i<btn.length; i++) {
    btn[i].addEventListener("click", function(){

        if (this.innerHTML == "="){
            result.innerHTML = eval(result.innerHTML);
        }else if (this.innerHTML == "AC"){
            result.innerHTML = "";
        }else if (this.innerHTML == "c"){

            result.innerHTML ="";
        }else {
            result.innerHTML += this.innerHTML;
        }
        

        
          
    })
}


