var saturate = document.getElementById('saturate');
let contrast = document.getElementById('contrast');
let brightness = document.getElementById('brightness');
let sepia = document.getElementById('sepia');
let grayscale = document.getElementById('grayscale');
let blure = document.getElementById('blure');
let hue_rotate = document.getElementById('hue_rotate');
let uplad = document.getElementById('uplad');
let download = document.getElementById('download');
let img = document.getElementById('img');
let span = document.querySelector('span');
let img_box = document.querySelector('.img-box');
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let resetValue = () => {
    img.style.filter = 'none';
    saturate.value = '100';
    contrast.value = '100';
    brightness.value = '100';
    sepia.value = '0';
    grayscale.value = '0';
    blure.value = '0';
    hue_rotate.value = '0';
};
window.onload =  () => {
    download.style.display = 'none';
    span.style.display = 'none';
    img_box.style.display = 'none';
};
uplad.onchange =  () => {
    resetValue();
    download.style.display = 'block';
    span.style.display = 'block';
    img_box.style.display = 'block';
    let file = new FileReader();
    file.readAsDataURL(uplad.files[0]);
    file.onload =  () => {
        img.src = file.result;
    };
    img.onload =  () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        img.style.display = 'none';
    };
};
let filters = document.querySelectorAll("ul li input");
filters.forEach((filter) => {
    filter.addEventListener('input', () => {
        ctx.filter = "\n        saturate(".concat(saturate.value, "%)\n        contrast(").concat(contrast.value, "%)\n        brightness(").concat(brightness.value, "%)\n        sepia(").concat(sepia.value, "%)\n        grayscale(").concat(grayscale.value, ")\n        blur(").concat(blure.value, "px)\n        hue-rotate(").concat(hue_rotate.value, "deg)\n        ");
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        img.style.display = 'none';
    });
});
download.onclick = () => {
    download.href = canvas.toDataURL();
};

