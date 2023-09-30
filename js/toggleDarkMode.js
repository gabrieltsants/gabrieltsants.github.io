function toggleDarkMode() {
  var body = document.body;
  var buttonToggleDarkMode = document.getElementsByClassName('buttontoggleDarkmodeImg');
  var profileBackground = document.getElementsByClassName('about');
  var contactLinks = document.getElementsByClassName('contact');

  // Changing all text element tags (except cards)
  var textElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  var elementCount = 0, elementLength = textElements.length;
  var actualElementColor = document.querySelectorAll('h3');
  
  // Defines an array of classes to be ignored
  var ignoreClasses = ['terminal'];

  for (; elementCount < elementLength; elementCount++) {
    var hasIgnoreClass = ignoreClasses.some(function(className) {
      return textElements[elementCount].classList.contains(className);
    });

    if (!hasIgnoreClass) {
      if (actualElementColor[0].style.color != 'black') {
        textElements[elementCount].style.color = 'black';
      } else {
        textElements[elementCount].style.color = 'white';
      }
    }
  }

  body.classList.toggle('body-light');
  profileBackground[0].classList.toggle('about-light');
  buttonToggleDarkMode[0].classList.toggle('buttontoggleWhitemodeImg');
  contactLinks[0].classList.toggle('contact-light');
}