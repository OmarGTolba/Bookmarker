
var siteName = document.getElementById("siteName")
var siteUrl = document.getElementById("siteUrl")
var siteList= []
var nameRegex = /^[A-Z] {0,1}/
var urlRegex = /[a-zA-Z0-9!@#$&()\\-`.+,/\"]/
if(localStorage.getItem("sitesList") ==null){
  siteList =[]
}
else{
siteList = JSON.parse( localStorage.getItem("sitesList"))
displaySites(siteList)
}


function submit(){
  if(nameRegex.test(siteName.value) ){
if(urlRegex.test(siteUrl.value)){
    var Site = {
      name: siteName.value,
      Url: siteUrl.value,
      }
   
    }
    else{ 
    document.getElementById("validUrl").innerHTML="Please enter Url"
 return;
  }
  }
  else{
    document.getElementById("validName").innerHTML="First Uppercase"
    return;
  }  
  siteList.push(Site)
displaySites(siteList);
localStorage.setItem("sitesList",JSON.stringify(siteList))
clear()
}


function clear(){
  siteName.value = ""
  siteUrl.value = ""
  document.getElementById("validName").innerHTML=""

  document.getElementById("validUrl").innerHTML=""
}
function displaySites(sites){
var cartona =``
for(var i=0;i<sites.length;i++){
   cartona += `
   <div class="row p-0 m-0 mb-2 py-3">
     <div class="mb-3 col-lg-4 ">
     <h4> ${sites[i].name} </h4>
     </div>
   <div class=" mb-3  col-lg-1">
   
     <a target="_blank" href="https://${sites[i].Url}"> Visit</a></td>
       
   </div>
   <div class="mb-3  col-lg-1">
     <button class="bg-danger" onclick="deleteSite(${[i]})">Delete</button>
   </div>
   </div>
     `
}
document.getElementById("sitesTable").innerHTML = cartona;
}

function deleteSite(index){
  siteList.splice(index,1);
  localStorage.setItem("sitesList",JSON.stringify(siteList))

  displaySites(siteList);


}

