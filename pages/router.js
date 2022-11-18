const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};
// const home= document.getElementById('home');
// const about= document.getElementById('about');
// const chat= document.getElementById('chat');
// const car= document.getElementById('car');

function Home(a,b,c,d){
    document.getElementById(a).style.color="rgba(0, 0, 255, 0.849)";
    document.getElementById(a).style.border="1px solid rgba(0, 0, 255, 0.849)"
    document.getElementById(b).style.color="rgba(119, 116, 116, 0.89)";
    document.getElementById(b).style.border="none";
    document.getElementById(c).style.color="rgba(119, 116, 116, 0.89)";
    document.getElementById(c).style.border="none"
    document.getElementById(d).style.color="rgba(119, 116, 116, 0.89)";
    document.getElementById(d).style.border="none";
   
    route();
}

function Span(x,y,z,e){
    document.getElementById(x).style.width="100%";
    document.getElementById(y).style.width="0";
    document.getElementById(z).style.width="0";
    document.getElementById(e).style.width="0";
    route();
}

const routes = {
    404: "/pages/404.html",
    "/": "/pages/index.html",
    "/about/": "/pages/about.html",
    "/chat/": "/pages/chat.html",
    "/car/": "/pages/car.html"
};

const handleLocation = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById("main-page").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();

// ================Login INdex=============//


document.querySelector('.info_login_header').style.display = "none";
function IMG() {
  var loginUser = document.querySelector('.info_login_header');
  if (loginUser.style.display == "block") {
    loginUser.style.display = "none"
  } else {
    loginUser.style.display = "block"
  }
}


// ================= follow btn==============//
// cocknsole.log(btnFL);
// btnFL.oncli = ()=>{
  //     alert("Please");
  // }
  function test(){
  var btnFL= document.querySelector('#btnFl');
  if(btnFl.innerHTML=="+ Follow"){
    alert("following");
    btnFL.innerHTML="following";
  }else{
    alert('ko fl nưuax');
    btnFL.innerHTML="+ Follow";
  }
}

// var test = document.querySelector('#test');