window.onload = () => {    
    let url = "https://api.chucknorris.io/jokes/categories";
    fetchURL(url,populateList);    
};

let randomJoke = document.getElementById("randomJoke");
let categoryJoke = document.getElementById("categoryJoke");
let textJoke = document.getElementById("textJoke");
let start = document.getElementById("letstart");

start.addEventListener('click', () => {
    document.getElementById("container").scrollIntoView();
});


randomJoke.addEventListener('click', () => {  // display random joke
    let url = "https://api.chucknorris.io/jokes/random";
    fetchURL(url,displayJoke);
});

categoryJoke.addEventListener('click', () => {  // display joke that filtered by category  
    const x = document.getElementById("selectedNumber").options[document.getElementById("selectedNumber").selectedIndex].text;
    let url = "https://api.chucknorris.io/jokes/random?category=" + x;
    if (x !== 'Category') {
      fetchURL(url,displayJoke);
    }
});

textJoke.addEventListener('click', () => {    // display joke that filtered by text 
    const x = document.getElementById("textInput").value;
    let url = "https://api.chucknorris.io/jokes/search?query=" + x;   
    if( x !== '') {
        fetchURL(url,displayJokeByText);    
    }
});

function populateList(responseData) {
    var selectElement = document.getElementById("selectedNumber"); 
    for(var i = 0; i < responseData.length; i++) {
        var categoryList = responseData[i];
        var optionElement = document.createElement("option");
        optionElement.textContent = categoryList;
        optionElement.value = categoryList;
        selectElement.appendChild(optionElement);
    }
}

function fetchURL(url,functionName) {    
    fetch(url) 
    .then(response => {
        return response.json();
    })
    .then(responseData => {
       functionName(responseData);               
    });
}

function displayJoke(responseData) {
    document.getElementById("joke").innerHTML = responseData.value;
    document.getElementById("joke").scrollIntoView();
}

function displayJokeByText(responseData) {
    let randomNumber = Math.floor(Math.random() * (Math.floor(responseData.result.length) - Math.ceil(0) + 1)) + Math.ceil(0);
    document.getElementById("joke").innerHTML = responseData.result[randomNumber].value;
    document.getElementById("joke").scrollIntoView();
}

