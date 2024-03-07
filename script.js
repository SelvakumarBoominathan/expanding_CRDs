const panel = document.querySelectorAll('.Back-panel');

panel.forEach((pan) => {
  pan.addEventListener('click', () => {
    removeActiveClasses()
    const activeClass = pan.classList.add('active');
  })
})


function removeActiveClasses() {

  panel.forEach((pan) => {
    pan.classList.remove('active');
  })
}