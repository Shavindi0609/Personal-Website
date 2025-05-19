const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');

const activePage = () => {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
}

navLinks.forEach((link, idx) => {
    link.addEventListener('click' , () => {
        if (!link.classList.contains('active')) {
            activePage();

            link.classList.add('active');
        }
    })
});

logoLink.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')){
        activePage();

        navLinks[0].classList.add('active');
    }
});

// resume

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for (tablink of tablinks){
        tablink.classList.remove("active-link")
    }

    for (tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}
// const resumeBtns = document.querySelectorAll('.resume-btn');
//
// resumeBtns.forEach((btn, idx) => {
//     btn.addEventListener('click', () => {
//         const resumeDetails = document.querySelectorAll('.resume-detail');
//         resumeBtns.forEach(btn => {
//             btn.classList.remove('active');
//         });
//         btn.classList.add('active');
//
//         resumeDetails.forEach(detail => {
//             detail.classList.remove('active');
//         });
//         resumeDetails[idx].classList.add('active');
//     });
// });

// project
const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');

}

arrowRight.addEventListener('click', () => {
    if (index < 4) {
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else {
        index = 5;
        arrowRight.classList.add('disabled');
    }

    activePortfolio();
});

arrowLeft.addEventListener('click', () => {
    if (index > 1) {
        index--;
        arrowRight.classList.remove('disabled');
    }
    else {
        index = 0;
        arrowLeft.classList.add('disabled');
    }

    activePortfolio();
});