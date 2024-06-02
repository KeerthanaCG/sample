let navbar=document.querySelector('.header .navbar');
document.querySelector('#menu-btn').onclick=()=>
{
    navbar.classList.add('active');
}
document.querySelector('#nav-close').onclick=()=>
{
    navbar.classList.remove('active');
}
window.onscroll=() =>
{
navbar.classList.remove('active');
}

let themeButton = document.querySelector('#theme-btn');
themeButton.onclick = () => {
    themeButton.classList.toggle('fa-moon');
    themeButton.classList.toggle('fa-sun');
  
    if (themeButton.classList.contains('fa-moon')) {
      document.body.classList.add('active');
    } else {
      document.body.classList.remove('active');
    }
  };