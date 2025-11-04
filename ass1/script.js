
// Change Text Toggle
const changeTextBtn = document.getElementById("changeTextBtn");
const originalTexts = [
    "Will exceed your expectations;",
    "Loaded with ultimate cloud features;",
    "Higher than the clouds;",
    "We keep our standards high."
];
const newTexts = [
    "✨ This text has been updated dynamically!",
    "",
    "",
    ""
];
let isOriginal = true;
changeTextBtn.addEventListener("click", () => {
    const leads = ["lead1", "lead2", "lead3", "lead4"].map(id => document.getElementById(id));
    if (isOriginal) {
        leads.forEach((p, i) => p.textContent = newTexts[i]);
        changeTextBtn.textContent = "Show Original Text";
    } else {
        leads.forEach((p, i) => p.textContent = originalTexts[i]);
        changeTextBtn.textContent = "Change Text";
    }
    isOriginal = !isOriginal;
});

// Dark Mode Toggle
const modeToggle = document.getElementById("modeToggle");
if (modeToggle) {
    const body = document.body;
    const savedMode = localStorage.getItem("mode");
    if (savedMode === "dark") {
        body.classList.add("bg-dark", "text-white");
        modeToggle.classList.replace("btn-dark", "btn-light");
    }
    modeToggle.addEventListener("click", () => {
        const darkMode = body.classList.toggle("bg-dark");
        body.classList.toggle("text-white");
        if (darkMode) {
            localStorage.setItem("mode", "dark");
            modeToggle.classList.replace("btn-dark", "btn-light");
        } else {
            localStorage.setItem("mode", "light");
            modeToggle.classList.replace("btn-light", "btn-dark");
        }
    });
}

// Form Validation
(() => {
    'use strict';
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
})();

// Services Load More / Show Less
const loadMoreBtn = document.getElementById("loadMoreBtn");
const showLessBtn = document.getElementById("showLessBtn");
const servicesContainer = document.getElementById("servicesContainer");

const moreServices = [
    { img: "assets/imgs/ser1.png", title: "App Development", desc: "Creating apps that users love to use." },
    { img: "assets/imgs/ser2.png", title: "SEO Optimization", desc: "Improving website visibility on search engines." },
    { img: "assets/imgs/ser3.png", title: "UI/UX Design", desc: "Designing beautiful and user-friendly interfaces." },
    { img: "assets/imgs/ser1.png", title: "Hosting Solutions", desc: "Reliable and fast cloud hosting for your projects." },
    { img: "assets/imgs/ser2.png", title: "Cybersecurity", desc: "Protecting systems and data from digital threats." },
    { img: "assets/imgs/ser3.png", title: "Data Analytics", desc: "Turning raw data into valuable insights." },
    { img: "assets/imgs/ser1.png", title: "AI Integration", desc: "Adding intelligence to your business solutions." },
    { img: "assets/imgs/ser2.png", title: "E-commerce Setup", desc: "Build and manage online stores effectively." },
    { img: "assets/imgs/ser3.png", title: "Content Marketing", desc: "Crafting stories that engage your audience." }
];

let serviceCount = 3;
const maxServices = 12;

function loadInitialServices() {
    for (let i = 0; i < 3; i++) {
        const s = moreServices[i];
        const card = document.createElement("div");
        card.classList.add("col");
        card.innerHTML = `
      <div class="card border-0 shadow h-100">
        <img src="${s.img}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title fw-bold">${s.title}</h5>
          <p class="card-text text-muted">${s.desc}</p>
        </div>
      </div>`;
        servicesContainer.appendChild(card);
    }
}
loadInitialServices();

loadMoreBtn.addEventListener("click", () => {
    for (let i = 0; i < 3 && serviceCount < maxServices; i++) {
        const s = moreServices[serviceCount];
        const card = document.createElement("div");
        card.classList.add("col");
        card.innerHTML = `
      <div class="card border-0 shadow h-100">
        <img src="${s.img}" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title fw-bold">${s.title}</h5>
          <p class="card-text text-muted">${s.desc}</p>
        </div>
      </div>`;
        servicesContainer.appendChild(card);
        serviceCount++;
    }
    if (serviceCount > 3) showLessBtn.classList.remove("d-none");
    if (serviceCount >= maxServices) {
        loadMoreBtn.disabled = true;
        loadMoreBtn.textContent = "No More Services";
    }
});

showLessBtn.addEventListener("click", () => {
    while (servicesContainer.children.length > 3) {
        servicesContainer.removeChild(servicesContainer.lastChild);
        serviceCount--;
    }
    loadMoreBtn.disabled = false;
    loadMoreBtn.textContent = "Load More";
    showLessBtn.classList.add("d-none");
});

// Tech Topics Posts + Search
const techTopics = [
    {
        title: "Artificial Intelligence",
        description: "AI is transforming industries with smart algorithms that learn and adapt.",
        image: "https://cdn.pixabay.com/photo/2023/06/08/04/40/ai-generated-8048681_640.png"
    },

    {
        title: "Blockchain Technology",
        description: "Decentralized ledgers powering cryptocurrencies and secure digital transactions.",
        image: "https://th.bing.com/th/id/R.5fc5f3bcc00cf6b5f2823bad25e056a1?rik=AK%2f4ES0mGiDlZg&pid=ImgRaw&r=0"
    },

    {
        title: "Quantum Computing",
        description: "Next-gen computing power using principles of quantum mechanics.",
        image: "https://st-everywhere-cms-prod.s3.us-east-1.amazonaws.com/quantum_computer_resized_2179a53753.jpg"
    },

    {
        title: "Internet of Things (IoT)",
        description: "Connected devices exchanging data to automate and optimize tasks.",
        image: "https://tse2.mm.bing.net/th/id/OIP.Qr8VSPfpIPhAWcUm5K7DRQHaE7?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        title: "Cybersecurity",
        description: "Protecting systems and data from digital threats and attacks.",
        image: "https://images.wallpapersden.com/image/download/cybersecurity-core_bmdrZ2mUmZqaraWkpJRmbmdsrWZlbWU.jpg"
    },
    {
        title: "Cloud Computing",
        description: "On-demand computing services over the internet with scalable resources.",
        image: "https://static.vecteezy.com/system/resources/previews/001/100/153/original/cloud-computing-technology-background-vector.jpg"
    },
    {
        title: "Augmented Reality (AR)",
        description: "Blending virtual elements with the real world for enhanced experiences.",
        image: "https://cms.nsflow.com/wp-content/uploads/2023/06/magical-virtual-reality-games-using-hololens-generative-ai-2000x1121.jpg"
    },
    {
        title: "Machine Learning",
        description: "A subset of AI enabling systems to learn from data without being explicitly programmed.",
        image: "https://static.vecteezy.com/system/resources/previews/007/136/275/non_2x/machine-learning-modern-computer-technologies-concept-artificial-intelligence-ai-photo.jpg"
    },
    {
        title: "5G Networks",
        description: "The latest generation of mobile networks offering ultra-fast data speeds and low latency.",
        image: "https://th.bing.com/th/id/R.ba46cb4be794e231740c642b8bef4004?rik=MoBlNoNrK34MmA&pid=ImgRaw&r=0"
    }
];

const techContainer = document.getElementById("techPostsContainer");

function displayTechPosts(posts) {
    techContainer.innerHTML = "";
    posts.forEach(post => {
        const div = document.createElement("div");
        div.className = "col-md-4";
        div.innerHTML = `
      <div class="card h-100">
        <img src="${post.image}" class="card-img-top" alt="${post.title}">
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <p class="card-text">${post.description}</p>
        </div>
      </div>`;
        techContainer.appendChild(div);
    });
}

displayTechPosts(techTopics);

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = techTopics.filter(post =>
        post.title.toLowerCase().includes(query) || post.description.toLowerCase().includes(query)
    );
    displayTechPosts(filtered);
});