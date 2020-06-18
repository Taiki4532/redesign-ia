const uri = 'https://script.google.com/macros/s/AKfycbxyacpN8y4nxSAnU0Eji6E_rBRDFTY7YoWWFa0clY5ELRhskgpt/exec';
const id = '1BpGnuwC4lZf9G2yFyiSrxbJuGO8gviV8mr-I2D3x4vA';
const sheet = 'studio';
const endpoint = `${uri}?id=${id}&sheet=${sheet}`;

const renderJson = (json) => {
  const studios = json.records;
  studios.forEach(studio => {

    const studioDiv_en = document.createElement('div');
    const studioTitleEn = document.createElement("span");
    const studioPhoto = document.createElement("img");
    studioTitleEn.className = 'studio-title-en';
    studioTitleEn.textContent = studio['name-en'];
    studioPhoto.src = studio['photo1'];
    studioDiv_en.appendChild(studioPhoto);
    studioDiv_en.appendChild(studioTitleEn);
    document.getElementById('studios_en').appendChild(studioDiv_en);

});
document.getElementById('result').textContent = JSON.stringify(json, null, 2);
}

const getData = async () => {
try{
  const response =  await fetch(endpoint);
  if(response.ok){
    let jsonResponse = await response.json();
      jsonResponse.records.pop();
      renderJson(jsonResponse);
  }
}
catch(error){
  console.log(error);
}
}

getData();
