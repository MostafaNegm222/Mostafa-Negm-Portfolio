const pageTurnBtn = document.querySelectorAll(".nextprev-btn");

pageTurnBtn.forEach((ele,i) => {
    ele.onclick = () => {
        const pageTurnId = ele.getAttribute("data-page");
        const pageTurn = document.getElementById(pageTurnId);
        if (pageTurn.classList.contains("turn")) {
            pageTurn.classList.remove("turn");
            setTimeout(() => {
                pageTurn.style.zIndex = 20 - i ;
            },500)
        } else {
            pageTurn.classList.add("turn")
            setTimeout(() => {
                pageTurn.style.zIndex = 20 + i ;
            },500)
        }
    }
})

const pages = document.querySelectorAll(".book-page.page-right");
const contactMeBtn = document.querySelector(".btn.contact-me");

contactMeBtn.onclick = () => {
    pages.forEach((ele , i) => {
        setTimeout(() => {
            ele.classList.add("turn");
            setTimeout(() => {
                ele.style.zIndex = 20 + i ;
            }, 500);
        }, (i + 1) * 200 + 100);
    })
}

let totalPages = pages.length;
let pageNumber = 0;

function reverseIndex() {
    pageNumber--;
    if(pageNumber < 0) {
        pageNumber = totalPages - 1 ;
    }
}

const backProfileBtn = document.querySelector(".back-profile");

backProfileBtn.onclick = () => {
    pages.forEach((ele,i) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove("turn");
            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + i ;
            }, 500);
        } , (i + 1) * 200 + 100)
    })
}

const coverRight = document.querySelector(".cover.cover-right");
const pageLeft = document.querySelector(".book-page.page-left");

setTimeout(() => {
    coverRight.classList.add("turn")
},2100); 

setTimeout(() => {
    coverRight.style.zIndex = -1 ;
},2800)
setTimeout(() => {
    pageLeft.style.zIndex = 20 ;
},3200)

pages.forEach((ele,i) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove("turn");
            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + i ;
            }, 500);
        } , (i + 1) * 200 + 2100)
    })