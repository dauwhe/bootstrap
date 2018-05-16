
// find manifest
var manifest = JSON.parse(document.querySelectorAll('script[type]')[0].text)



console.log(manifest.spine.length);

// dont do any of this stuff for single-file publication
if (manifest.spine.length > 1) {

// create main element
var mainFrame = document.createElement('main');


//fetch manifest



 
  
  for (i=0; i < manifest.spine.length; i++) {
  var listItem = document.createElement('li');
  
  var iframe= document.createElement('iframe');
  iframe.setAttribute('name', manifest.spine[i].href);
   iframe.setAttribute('id', manifest.spine[i].href);
    iframe.setAttribute('src', manifest.spine[i].href);
    mainFrame.appendChild(iframe);
  };
window.location.hash = manifest.spine[0].href;

console.log(window.location.hash);



var tableOfContents = document.querySelectorAll('nav[role="doc-toc"]')[0];
    tableOfContents.addEventListener("click", interceptClickEvent, false);

   function showTOC() {
    
    
    if (tableOfContents.style.display === "none") {
        tableOfContents.style.display = "block";
    } else {
        tableOfContents.style.display = "none";
    }
    };

// add iframes to body
  
    document.getElementsByTagName('body')[0].appendChild(mainFrame);
    
    
    

 function nextPage() {
  console.log('clicked next page');
  var currentTarget = window.location.hash.split('#')[1];
  
  
  
var current = manifest.spine.indexOf(currentTarget);

var current = manifest.spine.map((el) => el.href).indexOf(currentTarget);

console.log(current);


window.location.hash = manifest.spine[current + 1].href;

};


 function prevPage() {
  console.log('clicked previous page');
  var currentTarget = window.location.hash.split('#')[1];
  
  

  
var current = manifest.spine.map((el) => el.href).indexOf(currentTarget);


window.location.hash = manifest.spine[current - 1].href;

};


var prevButton = document.createElement('button');
prevButton.innerHTML = '&lt;';
prevButton.setAttribute('id', 'prev');
prevButton.setAttribute('onclick', 'prevPage();');
prevButton.style.position = 'fixed';
prevButton.style.top = '50%';
prevButton.style.backgroundColor = 'rebeccapurple';
prevButton.style.color = 'white';
prevButton.style.fontWeight = 'bold';
prevButton.style.fontSize = '30px';
prevButton.style.borderStyle = 'solid';
prevButton.style.borderColor = 'rebeccapurple';
prevButton.style.paddingBottom = '44px';
prevButton.style.paddingLeft = '0px';
prevButton.style.left = '0';
prevButton.style.borderTopRightRadius = '30px';
prevButton.style.borderBottomRightRadius = '30px';
prevButton.style.height = '30px';
prevButton.style.width = '30px';
document.body.prepend(prevButton);
    

  
  var nextButton = document.createElement('button');
nextButton.innerHTML = '&gt;';
nextButton.setAttribute('id', 'next');
nextButton.setAttribute('onclick', 'nextPage();');
nextButton.style.position = 'fixed';
nextButton.style.top = '50%';
nextButton.style.backgroundColor = 'rebeccapurple';
nextButton.style.color = 'white';
nextButton.style.fontWeight = 'bold';
nextButton.style.fontSize = '30px';
nextButton.style.borderStyle = 'solid';
nextButton.style.borderColor = 'rebeccapurple';
nextButton.style.paddingBottom = '44px';
nextButton.style.right = '0';
nextButton.style.borderTopLeftRadius = '30px';
nextButton.style.borderBottomLeftRadius = '30px';
nextButton.style.height = '30px';
nextButton.style.width = '30px';
document.body.prepend(nextButton);


var tocButton = document.createElement('button');
tocButton.innerHTML = 'TOC';
tocButton.setAttribute('id', 'toc-button');
tocButton.setAttribute('onclick', 'showTOC();');
tocButton.style.position = 'fixed';
tocButton.style.top = '0';
tocButton.style.backgroundColor = 'rebeccapurple';
tocButton.style.color = 'white';
tocButton.style.fontWeight = 'bold';
tocButton.style.fontSize = '12px';
tocButton.style.borderStyle = 'solid';
tocButton.style.borderColor = 'rebeccapurple';
tocButton.style.paddingBottom = '0px';
tocButton.style.paddingRight = '12px';
tocButton.style.left = '30px';
tocButton.style.borderTopRightRadius = '30px';
tocButton.style.borderBottomRightRadius = '30px';
tocButton.style.borderTopLeftRadius = '30px';
tocButton.style.borderBottomLeftRadius = '30px';
tocButton.style.height = '30px';
tocButton.style.width = '45px';
document.body.prepend(tocButton);
  
 function interceptClickEvent(e) {
    var href;
    var target = e.target || e.srcElement;
    if (target.tagName === 'A') {
        href = target.getAttribute('href');


   var linkTargetIframe = href.split('#')[0];
   window.location.hash = linkTargetIframe;
   console.log(linkTargetIframe);
   
   var newframe = document.getElementById(linkTargetIframe);
   
   console.log(href.split('#')[1]);

//newframe.contentWindow.document.getElementById(href.split('#')[1]).scrollIntoView();




   
   
        //put your logic here...
        if (true) {

           //tell the browser not to respond to the link click
           e.preventDefault();
        }
    }
}


}