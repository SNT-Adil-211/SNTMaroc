// Récupérer l'élément contenant le texte
var rainbowText = document.querySelector('.rainbow-text');

// Fonction pour générer une couleur aléatoire en RGB
function getRandomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

// Changer la couleur du texte à intervalles réguliers
setInterval(function() {
  rainbowText.style.color = getRandomColor();
}, 1000); // Changer la couleur toutes les secondes (1000 ms)




