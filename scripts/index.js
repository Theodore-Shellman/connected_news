const initalCards = [
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
    describtion: "What happens when old PCs are given modern upgrades?",
    title: "Reviving Retro PCs",
  },
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
    describtion: "What happens when old PCs are given modern upgrades?",
    title: "Reviving Retro PCs",
  },
  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
    describtion: "What happens when old PCs are given modern upgrades?",
    title: "Reviving Retro PCs",
  },
  
];

// const profileEditBtn = document.querySelector(".profile__edit-btn");
// const cardAddBtn = document.querySelector(".profile__add-btn");
// const profileName = document.querySelector(".profile__name");
// const profileDescription = document.querySelector(".profile__description");

// const editProfileModal = document.querySelector("#edit-profile-modal");
// const editFormElement = editProfileModal.querySelector(".modal__form");
// const closeProfileModal = editProfileModal.querySelector(".modal__close-btn");
// const editModalNameInput = editProfileModal.querySelector(
//   "#profile-name-input"
// );
// const editModalDescriptionInput = editProfileModal.querySelector(
//   "#profile-description-input"
// );

// const cardModal = document.querySelector("#add-card-modal");
// const cardFormElement = cardModal.querySelector(".modal__form");
// const cardSubmitBtn = cardModal.querySelector(".modal__submit-btn");
// const closeCardModal = cardModal.querySelector(".modal__close-btn");
// const cardNameInput = cardModal.querySelector("#add-card-name-input");
// const cardLinkInput = cardModal.querySelector("#add-card-link-input");

// const previewModal = document.querySelector("#preview-modal");
// const previewModalImageEl = previewModal.querySelector(".modal__image");
// const previewModalCaptionEl = previewModal.querySelector(".modal__caption");
// const previewModalClose = previewModal.querySelector(".modal__close-btn");

const moreTemplate = document.querySelector("#more-template");
const moresList = document.querySelector(".more");

// const modals = document.querySelectorAll(".modal");

function getMoreElement(data) {
  const moreElement = moreTemplate.content
    .querySelector(".more")
    .cloneNode(true);

  const moreDescriptionEl = moreElement.querySelector(".more__text");
  const moreTitleEl = moreElement.querySelector(".more__title");
  const moreImageEl = moreElement.querySelector(".more__img");
  // <!-- todo add likeBtn and trashBtn and style them -->

  // const LikeBtn = moreElement.querySelector(".card__like-btn");
  // const trashButton = moreElement.querySelector(".card__trash-button");

  moreDescriptionEl.textContent = data.describtion;
  moreImageEl.src = data.link;
  moreImageEl.alt = data.name;
  moreTitleEl.textContent = data.title;

  // cardLikeBtn.addEventListener("click", (evt) => {
  //   evt.target.classList.toggle("card__like-btn_liked");
  // });

  // trashButton.addEventListener("click", () => {
  //   cardElement.remove();
  // });

  // cardImageEl.addEventListener("click", () => {
  //   openModal(previewModal);
  //   previewModalImageEl.src = data.link;
  //   previewModalCaptionEl.textContent = data.name;
  //   previewModalImageEl.alt = data.name;
  // });
console.log(moreElement);
  return moreElement;
}

// function openModal(modal) {
//   modal.classList.add("modal_opened");
//   document.addEventListener("keydown", closeEscapeKey);

// }
// function closeModal(modal) {
//   modal.classList.remove("modal_opened");
//   document.removeEventListener("keydown", closeEscapeKey);
// }
// function handleEditFormSubmit(evt) {
//   evt.preventDefault();
//   profileName.textContent = editModalNameInput.value;
//   profileDescription.textContent = editModalDescriptionInput.value;
//   closeModal(editProfileModal);
// }
// // tes

// function closeEscapeKey(evt) {
//   if (evt.key === "Escape") {
//     const openModal = document.querySelector(".modal_opened");
//     if (openModal) {
//       closeModal(openModal);
//     }
//   }
// }

// function handleCardFormSubmit(evt) {
//   evt.preventDefault();
//   const inputValues = {
//     name: cardNameInput.value,
//     link: cardLinkInput.value,
//   };
//   const cardElement = getCardElement(inputValues);
//   cardsList.prepend(cardElement);
//   evt.target.reset();
//   disableButton(cardSubmitBtn, settings);
//   closeModal(cardModal);
// }

// profileEditBtn.addEventListener("click", () => {
//   editModalNameInput.value = profileName.textContent;
//   editModalDescriptionInput.value = profileDescription.textContent;

//   resetValidation(
//     editFormElement,
//     [editModalNameInput, editModalDescriptionInput],
//     settings
//   );
//   openModal(editProfileModal);
// });

// cardAddBtn.addEventListener("click", () => {
//   openModal(cardModal);
// });

// editFormElement.addEventListener("submit", handleEditFormSubmit);
// cardFormElement.addEventListener("submit", handleCardFormSubmit);
initalCards.forEach((item) => {
  const moreElement = getMoreElement(item);
  moresList.prepend(moreElement);
});

// modals.forEach((modal) => {
//   modal.addEventListener("click", (evt) => {
//     if (
//       evt.target.classList.contains("modal_opened") ||
//       evt.target.classList.contains("modal__close-btn")
//     ) {
//       closeModal(modal);
//     }
//   });
// });
