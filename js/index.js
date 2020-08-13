var allb = document.getElementById('allb');
var cupb = document.getElementById('cupb');
var iceb = document.getElementById('iceb');
var cakeb = document.getElementById('cakeb');
var all = document.getElementById('all');
var cup = document.getElementById('cup');
var ice = document.getElementById('ice');
var cake = document.getElementById('cake');
var title = document.getElementById('title');
var search = document.getElementById('search');
var body = document.getElementsByTagName('body');
search.addEventListener("keyup", function () {
    var input = search.value.toUpperCase();
    var cards = document.getElementsByClassName('card');
    for (var i = 0; i < cards.length; i++) {
        var ititle = cards[i].querySelector('.card-title').innerHTML;
        ititle = ititle.toUpperCase();
        if (ititle.includes(input)) {
            cards[i].style.display = "";
        } 
        else {
            cards[i].style.display = "none";
        }
    }
})
allb.addEventListener("click", function () {
    title.innerHTML = "All";
    cupb.classList.remove('active');
    iceb.classList.remove('active');
    cakeb.classList.remove('active');
    this.classList.add('active');
    cup.style.display = "block";
    ice.style.display = "block";
    cake.style.display = "block";
});
cupb.addEventListener("click", function () {
    title.innerHTML = "Cupcakes";
    allb.classList.remove('active');
    this.classList.add('active');
    iceb.classList.remove('active');
    cakeb.classList.remove('active');
    cup.style.display = "block";
    ice.style.display = "none";
    cake.style.display = "none";
});
iceb.addEventListener("click", function () {
    title.innerHTML = "Icecreams";
    allb.classList.remove('active');
    cupb.classList.remove('active');
    this.classList.add('active');
    cakeb.classList.remove('active');
    cup.style.display = "none";
    ice.style.display = "block";
    cake.style.display = "none";
});
cakeb.addEventListener("click", function () {
    title.innerHTML = "Cakes";
    allb.classList.remove('active');
    cupb.classList.remove('active');
    iceb.classList.remove('active');
    this.classList.add('active');
    cup.style.display = "none";
    ice.style.display = "none";
    cake.style.display = "block";
});