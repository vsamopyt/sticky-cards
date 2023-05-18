let stickTitle = document.querySelectorAll("a h2");
let stickText = document.querySelectorAll("a p");
const stickBox =document.querySelectorAll("ul li");
let stickArray = []




// FUNCTIONS

// to get data from sticks
function getStickData () {
       for (let k=0; k<stickBox.length; k++) {
            const stickData ={}
            stickData.title = stickTitle[k].textContent;
            stickData.text = stickText[k].textContent;
            stickArray[k] = stickData; 
        }
        return stickArray;
}

// get data form local storsge
function getLocalStorage () {
    stickArray = JSON.parse(localStorage.getItem("sticks"));
    return  stickArray;
}

// to set from localstorage to sticks
function setSticksData () {
    for (let i=0; i<stickBox.length; i++) {
        stickTitle[i].textContent = stickArray[i].title
        stickText[i].textContent =stickArray[i].text
    }
    
}

//  to check if there is data in localstorage if ok to get them if not to get data from sticks
function checkLocalStorage () {
    if( localStorage.getItem("sticks") === null) {
        getStickData()
    }
    else { 
        getLocalStorage();
        setSticksData ();  
    }
}


//WORKING AREA

checkLocalStorage ()

for (let i=0; i<stickBox.length; i++) {
    stickBox[i].addEventListener("mouseleave", ()=>{
        const stickData ={}
        stickData.title = stickTitle[i].textContent;
         stickData.text = stickText[i].textContent;
            stickArray[i]=stickData
            localStorage.setItem("sticks", JSON.stringify(stickArray))
    })
           
}

