const uri = 'https://script.google.com/macros/s/AKfycbxyacpN8y4nxSAnU0Eji6E_rBRDFTY7YoWWFa0clY5ELRhskgpt/exec';
const id = '1BpGnuwC4lZf9G2yFyiSrxbJuGO8gviV8mr-I2D3x4vA';
const sheet = 'studio';
const endpoint = `${uri}?id=${id}&sheet=${sheet}`;
const sheet2 = 'Faculty';
const endpoint2 = `${uri}?id=${id}&sheet=${sheet2}`;

const renderJson = (json) => {
  const studios = json.records;
  studios.forEach(studio => {
    
   const studioDiv_ja = document.createElement('div');
   const studioTextLink = document.createElement('a');
   const studioPhotoLink = document.createElement('a');
   const studioTitle = document.createElement("p");
   const studioPhoto = document.createElement("img");
   studioDiv_ja.className = "studio-holder";
   studioTitle.className = 'studio-title';
   studioTitle.textContent = studio['name-ja'];
   studioPhoto.className = 'studio-photo';
   studioPhoto.src = studio['photo1'];

   var studiopages;
   switch (studio['name-ja']) {
    case "エディティングスタジオ":
      studiopages = "html/editorialDesignStudio.html";
      break;
    case "製品・サービスデザインスタジオ":
      studiopages = "html/equipmentDesignStudio.html";
      break;
    case "エルゴノミックデザインスタジオ":
      studiopages = "html/ergonimicDesignStudio.html";
      break;
    case "インタラクティブアートスタジオ":
      studiopages = "html/interactiveArtStudio.html";
      break;
    case "インタフェースデザインスタジオ":
      studiopages = "html/interfaceDesignStudio.html"; 
      break;
    case "インテリアデザインスタジオ":
      studiopages = "html/interiorDesignStudio.html";    
      break;
    case "映像デザインスタジオ":
      studiopages = "html/computerGraphicsAnimation.html";
      break;
    case "ネットワークデザインスタジオ":
      studiopages = "html/networkDesignStudio.html";  
      break;
    case "ソフトウェアデザインスタジオ":
      studiopages = "html/softwareDesignStudio.html";    
      break;
    case "空間デザインスタジオ":
      studiopages = "html/spacialDesignStudio.html";    
      break;
    case "トランスポーテーションデザインスタジオ":
      studiopages = "html/transportationDesignStudio.html";    
      break;
    case "ヴィジュアルコミュニケーションデザインスタジオ":
      studiopages = "html/visualCommunicationDesignStudio.html";
      break;
  }

   studioPhotoLink.href = studiopages;
   studioTextLink.href = studiopages;
   studioPhotoLink.appendChild(studioPhoto);
   studioTextLink.appendChild(studioTitle);
   studioDiv_ja.appendChild(studioPhotoLink);
   studioDiv_ja.appendChild(studioTextLink);
   document.getElementById('studios').appendChild(studioDiv_ja);

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

const renderJson2 = (json) => {
  const faculties = json.records;
  faculties.forEach(faculty => {

   const facultyDiv_ja = document.createElement('div');
   const facultyText = document.createElement('div');
   const facultyPhotoContainer = document.createElement('div');
   const facultyName = document.createElement("p");
   const facultyTitle = document.createElement("p");
   const facultyStudio = document.createElement("p");
   const facultyMajor = document.createElement("p");
   const facultyPhoto = document.createElement("img");
   facultyText.className = 'faculty-text';
   facultyDiv_ja.className = 'faculty-div';
   facultyName.className = 'faculty-name';
   facultyName.textContent = faculty['f-faculty-ja'];
   facultyTitle.className = 'faculty-title';
   facultyTitle.textContent = faculty['f-faculty-title-ja'];
   facultyStudio.className = 'faculty-studio';
   facultyStudio.textContent = faculty['f-studio-ja'];
   facultyMajor.className = 'faculty-major';
   facultyMajor.textContent = faculty['major-ja'];
   facultyPhoto.className = 'faculty-photo';
   facultyPhoto.src = faculty['faculty-photo'];
   facultyPhotoContainer.appendChild(facultyPhoto);
   facultyText.appendChild(facultyName);
   facultyText.appendChild(facultyTitle);
   facultyText.appendChild(facultyStudio);
   facultyText.appendChild(facultyMajor);

   if(faculty['f-link'] !== ''){
    const facultyLink = document.createElement('a');
    facultyLink.className = 'faculty-link';
    facultyLink.textContent = '教員のウェブサイト';
    facultyLink.href = faculty['f-link'];
    facultyText.appendChild(facultyLink);
  }
    facultyDiv_ja.appendChild(facultyPhotoContainer);
    facultyDiv_ja.appendChild(facultyText);
  
   document.getElementById('faculties').appendChild(facultyDiv_ja);
   //document.getElementById('faculties').appendChild(facultyText);
 });
}

const getData2 = async () => {
  try{
    const response2 =  await fetch(endpoint2);
    if(response2.ok){
      let jsonResponse2 = await response2.json();
        jsonResponse2.records.pop();
        renderJson2(jsonResponse2);
    }
  }
  catch(error){
    console.log(error);
  }
}
getData2();

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("myOpenBtn").style.opacity = "0";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("myOpenBtn").style.opacity = "1";
}

function topButtonShowing(){
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    document.getElementById("myTopBtn").style.opacity = "1";
  } else {
    document.getElementById("myTopBtn").style.opacity = "0";
  }
} 

window.onscroll = function() {topButtonShowing()};

