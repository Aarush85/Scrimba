/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("upper-input");
const convertBtn = document.getElementById("convert-btn");


// --> Previous approach
// const lenMeterEl = document.getElementById("len-meter-feet");
//  const volLitEl = document.getElementById("vol-lit-gal");
//   const massKgEl = document.getElementById("mass-kg-p");

const lenMeterEl = document.getElementById("conv1");
const volLitEl = document.getElementById("conv2");
const massKgEl = document.getElementById("conv3");

convertBtn.addEventListener('click', function () {
    // --> Previous approach adds p to parent div , which breaks if user clicks multiple times on convert button
    //it may lead to stacking down previous results as well
    // const lenmet = `<p class = "conversion">${conversionAndAdd(inputEl.value, 3.281, "meters", "feet")} | ${conversionAndAdd(inputEl.value, 1/(3.281),"feet", "meters")} </p>`
    // lenMeterEl.innerHTML += lenmet;
    // const litgal = `<p class = "conversion">${conversionAndAdd(inputEl.value, 0.264, "liters", "gallons")} | ${conversionAndAdd(inputEl.value, 1/(0.264),"gallons", "liters")} </p>`
    // volLitEl.innerHTML += litgal;
    // const kgp = `<p class = "conversion">${conversionAndAdd(inputEl.value, 2.204, "kilos", "pounds")} | ${conversionAndAdd(inputEl.value, 1/(2.204),"pounds", "kilos")} </p>`
    // massKgEl.innerHTML += kgp;
    const lenmet = `${conversionAndAdd(inputEl.value, 3.281, "meters", "feet")} | ${conversionAndAdd(inputEl.value, 1 / (3.281), "feet", "meters")}`
    lenMeterEl.textContent = lenmet;
    const litgal = `${conversionAndAdd(inputEl.value, 0.264, "liters", "gallons")} | ${conversionAndAdd(inputEl.value, 1 / (0.264), "gallons", "liters")}`
    volLitEl.textContent = litgal;
    const kgp = `${conversionAndAdd(inputEl.value, 2.204, "kilos", "pounds")} | ${conversionAndAdd(inputEl.value, 1 / (2.204), "pounds", "kilos")}`
    massKgEl.textContent = kgp;
})


function conversionAndAdd(num, convFactor, unit, target) {
    return `${num} ${unit} = ${(num * convFactor).toFixed(3)} ${target}`
}