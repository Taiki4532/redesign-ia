const uri = 'https://script.google.com/macros/s/AKfycbxyacpN8y4nxSAnU0Eji6E_rBRDFTY7YoWWFa0clY5ELRhskgpt/exec';
const id = '1BpGnuwC4lZf9G2yFyiSrxbJuGO8gviV8mr-I2D3x4vA';
const sheet = 'studio';
const endpoint = `${uri}?id=${id}&sheet=${sheet}`;

const renderJson = (json) => {
  const studios = json.records;
  studios.forEach(studio => {

   const studioDiv_ja = document.createElement('div');
   const studioTitle = document.createElement("span");
   const studioPhoto = document.createElement("img");
   const studioTex = document.createElement("p");
   studioTitle.className = 'studio-title';
   studioTitle.textContent = studio[A,2];
   studioPhoto.className = 'studio-photo';
   studioPhoto.src = studio[K,2];
   studioTex.className = 'studio-text';
   studioTex.textContent = [I,2];
   //studioPhoto.appendChild(studioTitle);
   studioDiv_ja.appendChild(studioPhoto);
   studioDiv_ja.appendChild(studioTitle);
   studioDiv_ja.appendChild(studioTex);
   document.getElementById('studios').appendChild(studioDiv_ja);

 });
 
  document.getElementById('result').textContent = JSON.stringify(json, null, 1);
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
