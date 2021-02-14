let images = [
   
    {img:'https://placeimg.com/640/480/animals', type: 'Animals'},
    {img:'https://placeimg.com/640/480/arch', type: 'Architecture'},
    {img:'https://placeimg.com/640/480/nature', type: 'Nature'},
    {img:'https://placeimg.com/640/480/people', type: 'People'},
    {img:'https://placeimg.com/640/480/tech', type: 'Tech'},
    {img:'https://placeimg.com/640/480/tech/grayscale', type: 'Grayscale'},
    {img:'https://placeimg.com/640/480/tech/sepia', type: 'Sepia'}
]
let i = 0;
let image = document.getElementById("sliderImage");
document.getElementById('number').innerHTML = images[i].type;
image.src = images[i].img;
function prev(){
    i--;
    if (i < 0) {
        i = images.length - 1;
    } 
    image.src = images[i].img;
    document.getElementById('number').innerHTML = images[i].type;
}

function next(){
    i++;
    if (i > images.length - 1) {
        i = 0;
    } 
    image.src = images[i].img;
    document.getElementById('number').innerHTML = images[i].type;
}