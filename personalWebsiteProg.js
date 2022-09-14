/* load new website display */
function loadNewStyle()
{
	page_style = localStorage.getItem("page_stylesheet_name", "personalStyle.css");

	if (page_style === null)
	{
		page_style = "personalStyle.css";
	}

	document.getElementById('page_style').setAttribute("href", page_style);
}

/* display the first website display/formatting */
function showStyle1()
{
    localStorage.setItem("page_stylesheet_name", "personalStyle.css");
	  loadNewStyle();
}

/* display the second website display/formatting */
function showStyle2()
{
    localStorage.setItem("page_stylesheet_name", "style2.css");
	  loadNewStyle();
}

/* load default display to start */
loadNewStyle();


/* picture slideshow on landing page */

/* display new image based on which arrow clicked */
function displayPics(num) {

  let landingPictures = document.getElementsByClassName("myPics");

  /* handle out of bounds */
  if (num < 1) {
    picIndex = landingPictures.length;
  }
  if (num > landingPictures.length) {
    picIndex = 1;
  }

  /* hide all pictures */
  for (i = 0; i < landingPictures.length; i++) {
    landingPictures[i].style.display = "none";
  }

  /* show picture at correct index */
  landingPictures[picIndex-1].style.display = "block";
}

/* display new image when arrow clicked */
function nextPic(num) {
  displayPics(picIndex = picIndex + num);
}

/* start picture slideshow at beginning */
let picIndex = 1;
displayPics(picIndex);
