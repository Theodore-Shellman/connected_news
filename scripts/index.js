const initialCards = [
  {
    name: "Val Thorens",
    number: "01",
    link: "./assets/images/image-retro-pcs.jpg",
    description: "What happens when old PCs are given modern upgrades?",
    title: "Reviving Retro PCs",
  },
  {
    name: "Val Thorens",
    number: "02",
    link: "./assets/images/image-top-laptops.jpg",
    description: "Our best picks for various needs and budgets.",
    title: "Top 10 Laptops of 2022",
  },
  {
    name: "Val Thorens",
    number: "03",
    link: "./assets/images/image-gaming-growth.jpg",
    description: "How the pandemic has sparked fresh opportunities.",
    title: "The Growth of Gaming",
  },
];


const moreTemplate = document.querySelector("#more-template");
const moreList = document.querySelector(".more");

function getMoreElement(data) {
  const templateContent = moreTemplate.content
    .querySelector(".more")
    .cloneNode(true);

  const moreDescriptionEl = templateContent.querySelector(".more__text");
  const moreTitleEl = templateContent.querySelector(".more__title");
  const moreImageEl = templateContent.querySelector(".more__img");
  const moreNumberEl = templateContent.querySelector(".more__number");
  // <!-- todo add likeBtn and trashBtn and style them -->

  // const LikeBtn = templateContent.querySelector(".card__like-btn");
  // const trashButton = templateContent.querySelector(".card__trash-button");

  moreDescriptionEl.textContent = data.description;
  moreNumberEl.textContent = data.number;
  moreImageEl.src = data.link;
  moreImageEl.alt = data.name;
  moreTitleEl.textContent = data.title;

  
  console.log(templateContent);
  return templateContent;
}

initialCards.forEach((item) => {
  const templateContent = getMoreElement(item);
  moreList.append(templateContent);
});

