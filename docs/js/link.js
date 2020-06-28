const uri = 'https://script.google.com/macros/s/AKfycbxyacpN8y4nxSAnU0Eji6E_rBRDFTY7YoWWFa0clY5ELRhskgpt/exec';
const id = '1BpGnuwC4lZf9G2yFyiSrxbJuGO8gviV8mr-I2D3x4vA';
const sheet = 'Link';
const endpoint = `${uri}?id=${id}&sheet=${sheet}`;

const renderJson = (json) => {
  const links = json.records;
  links.forEach(link => {
   const linkDiv_ja = document.createElement('div');
   const linkText = document.createElement('div');
   const linkTitle = document.createElement("h2");
   const linkVanue = document.createElement("h3");
   const linkDates = document.createElement("h3");
   const linkDiscription = document.createElement("p");
   const linkPhoto = document.createElement("img");
   const linkLink = document.createElement("a");
   const linkPhotoLink = document.createElement('a');
   linkDiv_ja.className = "link-holder";
   linkTitle.className = 'link-title';
   linkTitle.textContent = link['name-ja'];
   linkVanue.className = "link-venue";
   linkVanue.textContent = link["venue-ja"];
   linkDates.className = "link-date";
   linkDates.textContent = link["event-dates-ja"];
   linkDiscription.className = "link-description";
   linkDiscription.textContent = link["description-ja"];
   linkPhoto.className = 'link-photo';
   linkPhoto.align = 'left';
   linkPhoto.src = link['photo'];
   linkPhotoLink.href = link['link'];
   linkPhotoLink.appendChild(linkPhoto);
   linkLink.className = "link-link";
   linkLink.href = link["link"];
   linkLink.appendChild(linkTitle);
   linkDiv_ja.appendChild(linkPhotoLink);
   linkDiv_ja.appendChild(linkLink);
   linkDiv_ja.appendChild(linkVanue);
   linkDiv_ja.appendChild(linkDates);
   linkDiv_ja.appendChild(linkDiscription);
   
   document.getElementById('links').appendChild(linkDiv_ja);

 });
  
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

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("myOpenBtn").style.opacity = "0";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("myOpenBtn").style.opacity = "1";
}