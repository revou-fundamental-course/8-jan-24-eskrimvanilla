//get html element from calculator-form id, listens to submit, and runs the script
document.getElementById('calculator-form').addEventListener('submit', function(event) {
    //prevents the page from refreshing :)
    event.preventDefault();

    //get sisi from html id and change it to a floating point
    var sisi = parseFloat(document.getElementById('sisi').value);
    //formula for calculating the area of a square
    var luasPersegi = sisi * sisi;

    //put in html by assigning it to luas-persegi id using innerHTML
    document.getElementById('luas-persegi').innerHTML = 
    'Luas Persegi <br> L = SxS <br> L = ' + sisi +'x'+ sisi + '<br> L = ' + luasPersegi
});

//get html element from form id, listens to submit, and runs the script
document.getElementById('form').addEventListener('submit', function(event) {
    //prevents the page from refreshing :)
    event.preventDefault();

    //get side from html id and change it to a floating point
    var sisi = parseFloat(document.getElementById('side').value);
    //formula for calculating the circumference of a square
    var kelPersegi = '4' * sisi;

    //put in html by assigning it to keliling id using innerHTML
    document.getElementById('keliling').innerHTML = 
    'Keliling Persegi <br> K = 4xS <br> K = 4x' + sisi + '<br> K = ' + kelPersegi
});

document.getElementById('calculator-form').addEventListener('reset', function() {
    //reset result
    document.getElementById('luas-persegi').innerHTML = '';
});

document.getElementById('form').addEventListener('reset', function() {
    //reset result
    document.getElementById('keliling').innerHTML = '';
});
