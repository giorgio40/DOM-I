const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
 ctaimg = document.getElementById("cta-img")
ctaimg.setAttribute('src',siteContent["cta"]["img-src"])
const midimg = document.getElementById("middle-img")
midimg.setAttribute('src',siteContent["main-content"]["middle-img-src"])
const title = document.querySelector("title")
title.textContent = "GREAT IDEA"

const links = document.querySelector("nav")
const link1 = document.querySelector("a")
link1.textContent = (siteContent["nav"]["nav-item-1"])
const link2 = link1.nextElementSibling;
link2.textContent = (siteContent["nav"]["nav-item-2"])
const link3 = link2.nextElementSibling;
link3.textContent = (siteContent["nav"]["nav-item-3"])
const link4 = link3.nextElementSibling;
link4.textContent= (siteContent["nav"]["nav-item-4"])
const link5 = link4.nextElementSibling;
link5.textContent = (siteContent["nav"]["nav-item-5"])
const link6 = link5.nextElementSibling;
link6.textContent = (siteContent["nav"]["nav-item-6"])
const blogLink = document.createElement("a");
blogLink.textContent = "Blog";
blogLink.href = "#";
document.querySelector("nav").appendChild(blogLink);
const homeLink = document.createElement("a");
homeLink.textContent = "Home";
homeLink.href = "#";
document.querySelector("nav").prepend(homeLink);


link1.style.color = "green"
link2.style.color = "green"
link3.style.color = "green"
link4.style.color = "green"
link5.style.color = "green"
link6.style.color = "green"
blogLink.style.color = "green"
homeLink.style.color = "green"

link1.href ="#"
link2.href ="#"
link3.href="#"
link4.href = "#"
link5.href = "#"
link6.href = "#"
homeLink.href= "#"
blogLink.href = "#"

const heading = document.querySelector("h1")
heading.textContent= (siteContent["cta"]["h1"])

const button = heading.nextElementSibling;
button.textContent = (siteContent["cta"]["button"])

const div1 = document.querySelector(".text-content")
const hd = div1.querySelector("h4");
hd.textContent = (siteContent["main-content"]["features-h4"])
const parag = div1.querySelector("p")
parag.textContent = (siteContent["main-content"]["features-content"])

// div1.classList.add("second")
// const headin  = document.querySelectorAll("h4"[1])

const div2 = div1.nextElementSibling;
const headingTwo = div2.querySelector("h4")

headingTwo.textContent =(siteContent["main-content"]["about-h4"])
const paragraph = headingTwo.nextElementSibling;
paragraph.textContent = (siteContent["main-content"]["about-content"])

const hdn = document.querySelectorAll("h4")[2]

hdn.textContent = (siteContent["main-content"]["services-h4"])

const para = hdn.nextElementSibling;
para.textContent = (siteContent["main-content"]["services-content"])
const heading4 = document.querySelectorAll("h4")[3]
heading4.textContent = (siteContent["main-content"]["product-h4"])
const paragr = heading4.nextElementSibling;
paragr.textContent = (siteContent["main-content"]["product-content"])

const heading5 = document.querySelectorAll("h4")[4]
heading5.textContent = (siteContent["main-content"]["vision-h4"])
const lastparagraph = heading5.nextElementSibling;
lastparagraph.textContent =(siteContent["main-content"]["vision-content"])

const lastheading = document.querySelectorAll("h4")[5]
lastheading.textContent = (siteContent["contact"]["contact-h4"])
const paragraph1 = lastheading.nextElementSibling;
paragraph1.textContent =(siteContent["contact"]["address"])
const para2 = paragraph1.nextElementSibling;
para2.textContent = (siteContent["contact"]["phone"])
const para3 = para2.nextElementSibling;
para3.textContent = (siteContent["contact"]["email"])