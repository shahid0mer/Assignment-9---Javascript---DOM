// const getQuote = document.getElementById("quote")

// getQuote.innerText = "Be the change that you wish to see in the world"

                        // or

document.getElementById("quote").innerText = "Be the change that you wish to see in the world"    

const bgColor = document.getElementsByClassName("info-box") 
for (let i=0;i<bgColor.length;i++) {
    
    bgColor[i].style.backgroundColor = "lightgreen"
}

document.querySelectorAll("li")[2].textContent = "Updated Task 3";

document.querySelector("span").innerText = "Have a great day"