const MAX_ROWS = 4;
const MAX_COLUMNS = 4;
/*WARNING!! IF YOU CHANGE THE NUMBER OF COLUMNS YOU MUST CHANGE THE CSS IN .items OTHERWISE IT WILL CAUSE ERRORS
  THE PERCENTAGES MUST BE CHANGED TO ((100/MAX_COLUMNS) - 2) */

/* String array of images file locations */
let imageLoc = ['../res/item1.png', '../res/item2.png', '../res/item3.png' , '../res/item4.png', '../res/item5.png', '../res/item6.png', '../res/item7.png', '../res/item8.png', '../res/item9.png', '../res/item10.png', '../res/item11.png', '../res/item12.png', '../res/item13.png', '../res/item14.png', '../res/item15.png', '../res/item16.png'];
/* intialize empty string */
let imgElement = '';
let isOn = 0;

addItems();


/* adds items to the main page*/
function addItems(){
    /* adds rows to the main page */
    for (let x = 0; x < MAX_ROWS; x++){

        /* Creates a div element */
        var div = document.createElement("div");

        /* Sets the divs arttibute */
        div.setAttribute('class', 'row');

        /* adds random images to the div */
        for ( let i = 0; i < MAX_COLUMNS; i++){
            imgElement = imgElement + '<img alt="colorful background" class="items" src="' + getRandomImage() + '" >' ;
        }

        /* returns a random string of a image file location */
        function getRandomImage(){

            /* returns a random number within the constraints of the size of the array */
            var randNum = Math.floor(Math.random() * (imageLoc.length) );
            return imageLoc[randNum];
        }

        /* adds the images to the inner html of the corresponding div */
        div.innerHTML = imgElement;

        /* adds the div to the html div */
        document.getElementById("table").appendChild(div);

        /* resets the string */
        imgElement = '';
    }
}

function inputSearchBar(){

    let searchBar = '<div class="search"><input type="text" name="searchInput" placeholder="Search..." class="input" id="searchButton"> <button id="goButton" onclick="searchItem()">Go</button></div>';

    document.getElementById('searchButton').outerHTML = searchBar;
}
function searchItem() {
    const inQuery = document.getElementById("searchButton").value;
    alert(inQuery);
}
function toggleFilter(){
    var x = document.getElementById("filterPopUp");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
