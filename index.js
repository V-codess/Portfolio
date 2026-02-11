document.addEventListener("DOMContentLoaded", function () {
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const navLinksContainer = document.getElementById("navLinks");
  const navLinks = document.querySelectorAll(".navLink");
  const sections = document.querySelectorAll("section");

  // Hamburger menu toggle
  hamburgerBtn.addEventListener("click", function () {
    navLinksContainer.classList.toggle("active");
  });

  // Active link highlight on scroll
  window.addEventListener("scroll", function () {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 90; // adjust for navbar height
      const sectionHeight = section.clientHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });
  // footer date
  const footerDate = document.getElementById("endCreds");
  const thisYear = new Date().getFullYear();
  footerDate.textContent = `Vaishnavi Vadlamudi | ${thisYear}`;

  // display project cards
  const projects = [
    {
      title: "Book Manager API",
      description:
        "Book Manager API - A RESTful API to manage books efficiently. Allows adding, updating, deleting, and searching books with JSON responses, ideal for libraries, personal collections, or app integration.",
      image: "assets/books.png",
      link: "https://github.com/V-codess/books-api",
    },
    {
      title: "Task Manager API",
      description:
        "Task Manager / To-Do App – A web application to organize tasks efficiently. Users can add, update, mark as complete, and delete tasks, helping manage daily activities and improve productivity.",
      link: "https://github.com/V-codess/Task-Manager-API",
      image: "assets/task.png",
    },
    {
      title: "E-Com using Microservices",
      description:
        "E-Commerce Platform (Microservices) – A scalable e-commerce application built with microservices architecture. Each service (products, orders, users, payments) operates independently, enabling flexibility, faster development, and seamless integration, while ensuring reliability and performance in handling online shopping operations.",
      image: "assets/ecom.png",
      link: "https://github.com/V-codess/ecommerce-microservices",
    },
  ];
  const container = document.getElementById("cardContainer");

  projects.forEach((project, index) => {
    const isEven = (index + 1) % 2 === 0;
    container.innerHTML += isEven
      ? `
      <div class="card">
        <img src="${project.image}" alt="${project.title}" class="cardImage">
        <div class="cardContent">
          <h2 class="cardTitle">${project.title}</h2>
          <p class="cardDescription">${project.description}</p>
          <a href = "${project.link}"><button class="cardButton">View Project</button></a>
        </div>
      </div>
    `
      : `
      <div class="card">
        <div class="cardContent">
          <h2 class="cardTitle">${project.title}</h2>
          <p class="cardDescription">${project.description}</p>
          <a href="${project.link}"><button class="cardButton">View Project</button></a>
        </div>
        <img src="${project.image}" alt="${project.title}" class="cardImage">
      </div>
    `;
  });
 // display skills
 const skills = [{
    name:"JavaScript",
    range: 70
 },
{
    name:"NodeJS",
    range: 80
 },
{
    name:"ReactJS",
    range: 80 
 },
 {
    name:"React Native",
    range: 70 
 },
 {
    name:"MongoDB",
    range: 80 
 },
]
  const skillsContainer = document.getElementById("skills-container");
  skills.forEach((skill)=>{
     skillsContainer.innerHTML += `<div class="skill">
                <div class="circle" style="--percentage: ${skill.range};">
                    <div class="insideCircle">
                        <span class="percentageData">${skill.range}%</span>
                    </div>
                </div>
                <p class="skillText">${skill.name}</p>
            </div>`
  })

  // Close mobile menu on link click
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinksContainer.classList.remove("active");
    });
  });
});
