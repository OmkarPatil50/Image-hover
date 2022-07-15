const imageUploaded = document.querySelector("#image-uploaded");
const imageDisplay = document.querySelector(".image");
const btnNext = document.querySelector("#next")





function clickHandler(){
imageDisplay.innerHTML= imageUploaded;
}

btnNext.addEventListener("click", clickHandler)
