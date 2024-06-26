const redSlider = document.getElementById("redSlider");
const grnSlider = document.getElementById("grnSlider");
const bluSlider = document.getElementById("bluSlider");

const redValueSpan = document.getElementById("redValue");
const grnValueSpan = document.getElementById("grnValue");
const bluValueSpan = document.getElementById("bluValue");

const colorBox = document.getElementById("colorBox");
const copyBtn = document.getElementById("copyBtn");
const finalRGB = document.getElementById("inputType");


redSlider.addEventListener('input',updateColor);
grnSlider.addEventListener('input',updateColor);
bluSlider.addEventListener('input',updateColor);

copyBtn.addEventListener('click',copyRGBValue);



function updateColor(){

    const redValue = redSlider.value;
    const grnValue = grnSlider.value;
    const bluValue = bluSlider.value;

    //console.log(redValue,grnValue,bluValue);

    const rgbColor = `rgb(${redValue}, ${grnValue}, ${bluValue})`;
    //console.log(rgbColor);

    colorBox.style.backgroundColor = rgbColor;

    redValueSpan.textContent = redValue;
    grnValueSpan.textContent = grnValue;
    bluValueSpan.textContent = bluValue;

    finalRGB.textContent = rgbColor;

}


updateColor();


function copyRGBValue(){

    const redValue = redSlider.value;
    const grnValue = grnSlider.value;
    const bluValue = bluSlider.value;

    const rgbColor = `rgb(${redValue}, ${grnValue}, ${bluValue})`;

    navigator.clipboard.writeText(rgbColor)
        .then(()=>{
            alert("RGB color values copied to clipboard: " + rgbColor);
        })
        .catch((error)=>{
            console.error("Failed to copy RGB values.",error);
        });

}