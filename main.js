
//create an array with the cat images.
var cats= [];

//object constructor for cats
function cat(name, imageURL){
    this.name = name;
    this.numClicks = 0;
    this.imageURL= imageURL;
}

//stores the data for each cat object into the cats array
    cats[0] = new cat("Harold", "https://s-media-cache-ak0.pinimg.com/736x/b6/e8/5f/b6e85f2631fd74df894418a7ac51abc3.jpg");
    cats[1] = new cat("Maple","https://s-media-cache-ak0.pinimg.com/736x/65/09/0b/65090ba68e4d61f8f203a76a91e6cd29.jpg");
    cats[2] = new cat("Felix", "https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg");
    cats[3] = new cat("Marie", "https://s-media-cache-ak0.pinimg.com/736x/d8/1f/53/d81f53608e1c359cfd14c770fa502a66.jpg");
    cats[4] = new cat("Crookshanks", "http://farm3.staticflickr.com/2831/12660151764_c25940554d.jpg");




//loop over the cats in our array of cats
//function listNames(){
        for (var j = 0; j < cats.length; j++) {
            
            //This is the cat number that we are on
            var num = j;
            
            //create a DOM element for each cat
            var catElem = document.createElement('li'); //create li element
            catElem.textContent = cats[j].name; //fills the content of li with the cat's name
            
            //when the cat's name in the list is clicked, update the cat's picture
            catElem.addEventListener('click', (function(numCopy) {
                return function(){
                cats[numCopy].numClicks = cats[numCopy].numClicks + 1; //increments cat clicker
                displayCat(numCopy);
                };
            })(num));

            document.getElementById("names").appendChild(catElem); //append li elements to the list

};
//}


var displayCat = function(num) {
    document.getElementById("catImage").src = cats[num].imageURL; //changes the cat image
    document.getElementById("catName").innerHTML = cats[num].name; //changes the cat's name above the image
    document.getElementById("displayClicks").innerHTML = "Number of times this cat was clicked: " + cats[num].numClicks; //displays number of times this cat was clicke
};








