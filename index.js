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
      title: "Books Catalog API (Node.js, Express, MongoDB)",
      description:
        "Book Manager API - A RESTful API to manage books efficiently. Allows adding, updating, deleting, and searching books with JSON responses, ideal for libraries, personal collections, or app integration.",
      image: "assets/books.png",
      link: "https://github.com/V-codess/books-api",
      techStack: [
        "TypeScript",
        "Node.js",
        "Express",
        "MongoDB",
        "REST",
        "AWS S3",
        "Multer"
      ],
       whatItDoes: [
        {
          service:
            "Practiced schema modeling.",
        },
        {
          service: "Integrated AWS S3 for storing book cover images.",
        },
        {
          service: "JWT with refresh tokens for secure stateless auth.",
        },
      ],
      testing:"Postman collection for API testing",
      postmanLink:"",
    },
    {
      title: "Task Manager REST API (Node.js, Express, MongoDB, JWT)",
      description:
        "Task Manager / To-Do App – A web application to organize tasks efficiently. Users can add, update, mark as complete, and delete tasks, helping manage daily activities and improve productivity.",
      link: "https://github.com/V-codess/Task-Manager-API",
      image: "assets/task.png",
      techStack: [
        "Node.js",
        "Express",
        "Bcrypt",
        "Postman",
        "JWT auth",
      ],
       whatItDoes: [
        {
          service:
            "Secure API with hashed passwords and JWTs. Built complete REST API with filtering & pagination",
        },
        {
          service: "Error handling middleware for consistency.",
        },
        {
          service: "JWT with refresh tokens for secure stateless auth",
        },
      ],
      testing:"Postman collection for API testing",
      postmanLink:"https://v22222-8789.postman.co/workspace/Library~324a92fa-3868-456d-a813-6811c7743aa9/collection/24230181-1adc29b9-9945-45df-bf51-d7c747470595?action=share&creator=24230181&active-environment=24230181-24d7b67a-db6b-4531-9b57-73d58cf014e3",
    },
    {
      title: "Ecommerce Microservices Backend (Node.js, Docker)",
      description:
        "Microservices e-commerce backend built using Node.js, Express, MongoDB, PostgreSQL, Docker, and Nginx. This project demonstrates scalable architecture, JWT authentication, role-based access control.",
      image: "assets/ecom.png",
      techStack: [
        "Node.js",
        "Express",
        "MongoDB",
        "Docker",
        "Redis",
        "JWT auth",
      ],
      whatItDoes: [
        {
          service:"Microservices to enable team independence and fault isolation. Designed horizontally scalable backend.",
        },
        {
          service: "Redis Cache to reduce DB load for frequent reads.",
        },
        {
          service: "JWT with refresh tokens for secure stateless auth.",
        },
      ],
      testing:"Postman collection for API testing",
      postmanLink:"https://v22222-8789.postman.co/workspace/Library~324a92fa-3868-456d-a813-6811c7743aa9/collection/24230181-24c3de5c-5b7d-452b-9935-182819c909c3?action=share&creator=24230181&active-environment=24230181-24d7b67a-db6b-4531-9b57-73d58cf014e3",
      link: "https://github.com/V-codess/ecommerce-microservices",
    },
  ];
  const container = document.getElementById("cardContainer");

  projects.map((project, index) => {
    const isEven = (index + 1) % 2 === 0;
    container.innerHTML += isEven
      ? `
      <div class="card">
        <img src="${project.image}" alt="${project.title}" class="cardImage">
        <div class="cardContent">
          <h2 class="cardTitle">${project.title}</h2>
          <p class="cardDescription">${project.description}</p>
          <h6 class="cardStack">Tech Stack</h6>
           <ul class="cardList">
            ${
              project.techStack
                .map((tech) => `<li  class="list-item">${tech}</li>`)
                .join("") || ""
            }
           </ul>
            <h6 class="cardStack">Outcomes</h6>
            <ul style="list-style: none;">
            ${
              project.whatItDoes
                .map((tech) => `<li  class="cardDescription">${tech.service}</li>`)
                .join("") || ""
            }
           </ul>
          <h6 class="cardStack">API Testing</h6>
          <p class="cardDescription">${project.testing} - <a class="cardPostman" href="${project.postmanLink}" target="_blank">Collection</a></p>
          <a target="_blank" href = "${project.link}"><button class="cardButton">View Project</button></a>
        </div>
      </div>
    `
      : `
      <div class="card">
        <div class="cardContent">
          <h2 class="cardTitle">${project.title}</h2>
          <p class="cardDescription">${project.description}</p>
          <h6 class="cardStack">Tech Stack</h6>
           <ul class="cardList">
            ${
              project.techStack
                .map((tech) => `<li class="list-item">${tech}</li>`).join("") || ""
            }
           </ul>
            <h6 class="cardStack">Outcomes</h6>
            <ul style="list-style: none;">
            ${
              project.whatItDoes
                .map((tech) => `<li class="cardDescription">${tech.service}</li>`)
                .join("") || ""
            }
           </ul>
          <h6 class="cardStack">API Testing</h6>
          <p class="cardDescription">${project.testing} - <a class="cardPostman" href="${project.postmanLink}" target="_blank">Collection</a></p>
          <a target="_blank" href="${project.link}"><button class="cardButton">View Project</button></a>
        </div>
        <img src="${project.image}" alt="${project.title}" class="cardImage">
      </div>
    `;
  });
  // display skills
  const skills = [
    {
      name: "Backend Engineering",
      list: [{
        name:"REST API Design & TypeScript Integration"
      },{
        name:"Middleware Architecture"
      },
    {
        name:"Authentication (JWT)"
      },{
        name:"Input Validation & Error Handling"
      }],
    },
    {
      name: "Databases & Data Modeling",
      list: [{
        name:"MongoDB Schema Design"
      },{
        name:"PostgreSQL Relational Modeling"
      },
    {
        name:"Indexing & Query Optimization"
      },{
        name:"Pagination & Filtering"
      }],
    },
    {
      name: "Cloud & Infrastructure",
      list: [{
        name:"Microservices Architecture"
      },{
        name:"Docker Containerization"
      },
    {
        name:"Environment Configuration"
      },{
        name:"AWS services"
      }],
    },
    {
      name: "Frontend Collaboration",
      list: [{
        name:"React API Integration"
      },{
        name:"Redux/Context State Management"
      },
    {
        name:"Backend-Frontend Contract Design"
      }, {
        name:"Mobile app development with React Native"
      }],
    },
  ];
  const skillsContainer = document.getElementById("skills-container");
  skills.forEach((skill) => {
    skillsContainer.innerHTML += `<div class="skill-card">
        <div>
          <h2 class="skill-cardTitle">${skill.name}</h2>
           <ul class="skill-cardList">
            ${
              skill.list
                .map((tech) => `<li  class="skill-cardDescription">${tech.name}</li>`)
                .join("") || ""
            }
           </ul>
        </div>
      </div>`;
  });

  // Close mobile menu on link click
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinksContainer.classList.remove("active");
    });
  });
});
