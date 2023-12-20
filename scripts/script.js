const imgs = ['images/img1.jpg', 'images/img2.jpg', 'images/img3.jpg', 'images/img4.jpg', 'images/img5.jpg'];

let currIndex = 0;
displayImage(currIndex);
function displayImage(index) {
    const ImageContainer = document.getElementById("imageContainer");
    const imageUrl = imgs[index];
    ImageContainer.innerHTML = `<img src="${imageUrl}" alt="image ${index+1}">`;
};

function nxtImg(){
    currIndex = (currIndex + 1) % imgs.length;
    displayImage(currIndex);
};

const nxtImage = document.getElementById("imageContainer");
nxtImage.addEventListener('click', nxtImg);

document.getElementById("s").addEventListener('click', function() {
    var n = document.getElementById("nName").value;
    var p = document.getElementById("nPhone").value;
    var e = document.getElementById("nEmail").value;
    var a = document.getElementById("aI").value;
    alert('Do you want to submit this registration?' + '\nName: ' + n + '\nPhone: ' + p + '\nEmail: ' + e + '\nArea Of Interest: ' + a);
});