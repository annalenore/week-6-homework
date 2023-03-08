
// all available urls
var TedLasso = ["https://www.youtube.com/embed/5m14CQFtNi8", 	
								"https://www.youtube.com/embed/_UMIcM66S1M",
								"https://www.youtube.com/embed/A9jI7id8c1Q"];

function loadTedLasso() {
  // get iframe element by id
  var el = document.getElementById('ifr');
  // get new url
  var newUrl = TedLasso[Math.floor(Math.random()*TedLasso.length)];
  // assign new url to src property
  el.src = newUrl; }

// all available urls
var ArtVlogs = ["https://www.youtube.com/embed/0Ojj0tSBebQ",
             "https://www.youtube.com/embed/wCb0OjOgBxQ",
             "https://www.youtube.com/embed/NloUStvV9y0"];

function loadArtVlogs() {
  // get iframe element by id
  var el = document.getElementById('ifr');
  // get new url
  var newUrl = ArtVlogs[Math.floor(Math.random()*ArtVlogs.length)];
  // assign new url to src property
  el.src = newUrl; }

// all available urls
var Apartments = ["https://www.youtube.com/embed/zyJoKAOkrwk",
                  "https://www.youtube.com/embed/zyJoKAOkrwk",
                  "https://www.youtube.com/embed/5FZasl7NofQ"];

function loadApartments() {
  // get iframe element by id
  var el = document.getElementById('ifr');
  // get new url
  var newUrl = Apartments[Math.floor(Math.random()*Apartments.length)];
  // assign new url to src property
  el.src = newUrl; }