// const jousection = document.querySelectorAll('.journey-section');
// const journeylink = document.querySelectorAll('.jou-link');

// journeylink.forEach((link) => {
//   link.addEventListener('click', (e) => {
//     e.preventDefault(); // prevent the default navigation behavior
//     const targetid = e.target.getAttribute('data-target');
//     const targetsection = document.getElementById(targetid);
//     jousection.forEach((section) => {
//       section.classList.remove('active');
//     });
//     targetsection.classList.add('active');
//   });
// });


const jousection = document.querySelectorAll('.journey-section');
const journeylink = document.querySelectorAll('.jou-link');

// Add the active class to the default section and link
jousection[0].classList.add('active');
journeylink[0].classList.add('active');

journeylink.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    jousection.forEach((section) => {
      section.classList.remove('active');
    });
    journeylink.forEach((link) => {
      link.classList.remove('active');
    });
    const targetid = e.target.getAttribute('data-target');
    const targetsection = document.getElementById(targetid);
    targetsection.classList.add('active');
    const targetlink = document.querySelector('.jou-link[data-target="${targetid}"]');
    targetlink.classList.add('active');
});
});
