//Declaration

var birthinput = document.querySelector(".birthday");
var submit = document.querySelector(".submit-type");
var num = document.querySelector(".lucky-no");
var dial = document.querySelector(".dialog");
var out = document.querySelector(".modal");
var txt = document.querySelector(".para");
var img = document.querySelector(".image");
var content = document.querySelector(".modal-content");
content.style.display = "none";
out.style.display = "none";


// Event Handler 
submit.addEventListener("click", getResult);

//Functions
function getResult(e) {

    e.preventDefault();
    var scrollingElement = (document.scrollingElement || document.body);
    scrollingElement.scrollTop = scrollingElement.scrollHeight;
    if (birthinput.value === "") {
        alert("Please Enter Birthday");
    } else {

        if (num.value === "") {
            alert("Please Enter Your Lucky Number ");


        } else {


            var str = birthinput.value;

            var split = str.split("-").join("");
            var mod = 0;
            var length = split.length;
            for (var i = 0; i < length; i++) {
                mod = mod + split % 10;
                split = parseInt(split / 10);
            }

            if (mod % num.value === 0) {
                content.style.display = "block";
                out.style.display = "block";
                txt.innerText = "!!Hurray your birthday is Lucky!!";

            } else {

                out.style.display = "block";
                content.style.display = "block";

                txt.innerText = "!! Oops your birthday is not Lucky!!";
            }




        }
    }


}