const projectArr = [
  (project1 = {
    id: "project1",
    title: "LOREM, IPSUM DOLOR.",
    tag: "UI/UX",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Magna quia Lorem ipsum dolor sit amet consectetur adipisicing elit Delectus inventore",
    url: "image/portfolio/item1.png",
  }),
  (project2 = {
    id: "project2",
    title: "LOREM, IPSUM DOLOR.",
    tag: "HTML/CSS",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Magna quia Lorem ipsum dolor sit amet consectetur adipisicing elit Delectus inventore",
    url: "image/portfolio/item2.png",
  }),
  (project3 = {
    id: "project3",
    title: "LOREM, IPSUM DOLOR.",
    tag: "VANILA JS",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Magna quia Lorem ipsum dolor sit amet consectetur adipisicing elit Delectus inventore",
    url: "image/portfolio/item3.png",
  }),
  (project4 = {
    id: "project4",
    title: "LOREM, IPSUM DOLOR.",
    tag: "HTML/CSS/JS",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Magna quia Lorem ipsum dolor sit amet consectetur adipisicing elit Delectus inventore",
    url: "image/portfolio/item4.png",
  }),
  (project5 = {
    id: "project5",
    title: "LOREM, IPSUM DOLOR.",
    tag: "React",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Magna quia Lorem ipsum dolor sit amet consectetur adipisicing elit Delectus inventore",
    url: "image/portfolio/item5.png",
  }),
  (project6 = {
    id: "project6",
    title: "LOREM, IPSUM DOLOR.",
    tag: "React",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Magna quia Lorem ipsum dolor sit amet consectetur adipisicing elit Delectus inventore",
    url: "image/portfolio/item6.png",
  }),
  (project7 = {
    id: "project7",
    title: "LOREM, IPSUM DOLOR.",
    tag: "React Native",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Magna quia Lorem ipsum dolor sit amet consectetur adipisicing elit Delectus inventore",
    url: "image/portfolio/item7.png",
  }),
  (project8 = {
    id: "project8",
    title: "LOREM, IPSUM DOLOR.",
    tag: "Node JS",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Magna quia Lorem ipsum dolor sit amet consectetur adipisicing elit Delectus inventore",
    url: "image/portfolio/item8.png",
  }),
  (project9 = {
    id: "project9",
    title: "LOREM, IPSUM DOLOR.",
    tag: "Node JS",
    detail:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Magna quia Lorem ipsum dolor sit amet consectetur adipisicing elit Delectus inventore",
    url: "image/portfolio/item9.png",
  }),
];

const modalContainer = document.getElementById("modal-container");
const projectsBtn = document.querySelectorAll(".btn-project");

function showModal(e) {
  const projectID = e.target.getAttribute("id");
  const project = projectArr.find((element) => element.id === projectID);

  modalContainer.innerHTML = `
      <div class="modal-content">
          <div class="modal-image">
              <img src=${project.url} alt="${project.id}" />
          </div>
          <div class="modal-text">
              <h1>${project.title}</h1>
              <h3>${project.tag}</h3>
            
              <p>
                  ${project.detail}
              </p>
          </div>
          <div class="close" id="close">
          <i class="fa fa-times"></i>
      </div>
      </div>
    `;
  modalContainer.style.display = "block";
}

for (const project of projectsBtn) {
  project.addEventListener("click", showModal);
}

// close modal container
modalContainer.addEventListener("click", (e) => {
  if (e.target.parentElement.classList.contains("close")) {
    modalContainer.style.display = "none";
  }
});
window.addEventListener("click", (e) => {
  e.target.classList.contains("modal-container")
    ? (modalContainer.style.display = "none")
    : false;
});
