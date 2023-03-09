
// all available urls
var TedLasso = ["https://www.youtube.com/embed/5m14CQFtNi8", 	
								"https://www.youtube.com/embed/A9jI7id8c1Q",
                "https://www.youtube.com/embed/SwYv1vrJ_J4",
                "https://www.youtube.com/embed/n-PkvrXQ0a8",
                "https://www.youtube.com/embed/984-jrjJ0RA",
                "https://www.youtube.com/embed/OTOWuBYj8Ho"];

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
             "https://www.youtube.com/embed/NloUStvV9y0",
             "https://www.youtube.com/embed/1g6yd0uDuQs",
             "https://www.youtube.com/embed/qKrVMM_I3y4",
             "https://www.youtube.com/embed/9gtyMSUP6k8",
             "https://www.youtube.com/embed/EAvN0X_mlpA",
             "https://www.youtube.com/embed/cHuzR-kATig"];

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
                  "https://www.youtube.com/embed/5FZasl7NofQ",
                  "https://www.youtube.com/embed/K_b5BNSa4Dw",
                  "https://www.youtube.com/embed/lmUYttDuCyE",
                  "https://www.youtube.com/embed/076pOqWrkP4",
                  "https://www.youtube.com/embed/qWk48RnyHGs",
                  "https://www.youtube.com/embed/VqiytdbsFOc"];

function loadApartments() {
  // get iframe element by id
  var el = document.getElementById('ifr');
  // get new url
  var newUrl = Apartments[Math.floor(Math.random()*Apartments.length)];
  // assign new url to src property
  el.src = newUrl; }