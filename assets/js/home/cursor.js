let mouseCursor = document.querySelector('.cursor');
const links = document.querySelectorAll('h1,a');
const loginBtn = document.querySelector(".login");
const image = document.querySelector(".links img");


window.addEventListener('mousemove', cursor);
function cursor(e) {
  mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    mouseCursor.classList.add('hovered-link');
  });
  link.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('hovered-link');
  });
});
image.addEventListener('mouseenter', () => {
    mouseCursor.classList.add('hovered-img');
  });
  image.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('hovered-img');
  });
loginBtn.addEventListener('mouseenter', () => {
    mouseCursor.classList.add('hovered-link')
})
  loginBtn.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('hovered-link')
  })