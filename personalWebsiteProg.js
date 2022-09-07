/* allow for switching content */
function show(toShow) {
  document.getElementById('personalWebsite').style.display = 'none';
  document.getElementById('portfolio').style.display ='none';
  document.getElementById('service').style.display = 'none';
  document.getElementById('qualifications').style.display='none';
  document.getElementById(toShow).style.display='block';
  return false;
}

/* picture slideshow on landing page */
let picIndex = 1;
displayPics(picIndex);

function nextPic(num) {
  displayPics(picIndex = picIndex + num);
}

function displayPics(num) {
  let pictures = document.getElementsByClassName("myPics");
  let i = 0;
  if (num < 1) {
    picIndex = pictures.length;
  }
  if (num > pictures.length) {
    picIndex = 1;
  }
  for (i = 0; i < pictures.length; i++) {
    pictures[i].style.display = "none";
  }
  pictures[picIndex-1].style.display = "block";
}
