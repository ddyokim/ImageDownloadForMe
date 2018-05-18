
/*
function downloadURI(uri, name) {
  var link = document.createElement("a");
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  delete link;
} */
/*
function downloadURL(imgURL){
  var url = imgURL;

  console.log(url);
//  document.getElementById('fileDown').src = url;
//  document.getElementById('fileDown').location.reload();
 }

let x = 160;
let y = 105;

function DownloadImage() {
  let images = document.getElementsByTagName("img");
  let ret = [];
  for (var i = 0; i < images.length; i++) {
    if (images[i].style.width >= x && images[i].style.height >= y) {
      //downloadURI(images, images);
      ret.append(images[i].src);
      downloadURL(images[i]);
    }
  }
  return ret;
}
*/
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log('asd');
  if (request.action == 'saySomething') {
    alert('hi');
    //sendResponse(DownloadImage());
  }
})
