const title = document.createElement('h2');
const underLine = document.createElement('div');
const featuredContainer = document.createElement('div');
const showHide = document.createElement('div');

const container = document.getElementById('container');

// const contain = document.createElement('div');
// contain.classList.add('container');

const featuredSection = document.createElement('section');
featuredSection.classList.add('featured');

container.appendChild(featuredSection);
container.insertBefore(featuredSection, container.children[1]);

// next
const btn = document.createElement('button');
const span = document.createElement('span');
const span2 = document.createElement('span');
const icon = document.createElement('i');

span2.classList.add('chevron');
icon.classList.add('fas', 'fa-chevron-down');
span2.appendChild(icon);

btn.appendChild(span);
btn.appendChild(span2);

btn.classList.add('btn-more');
span.innerHTML = 'More';

function next(elem) {
  do {
    elem = elem.nextElementSibling;
  } while (elem && elem.nodeType !== 1);

  return elem;
}

// if (window.innerWidth < 768) {
btn.addEventListener('click', (e) => {
  console.log(e, 'clicked');
  const hide = document.querySelector('.showMore');
  let nextElem = next(hide);
  console.log(nextElem);
  if (nextElem) {
    while (nextElem) {
      nextElem.classList.toggle('showMore');
      nextElem = next(nextElem);
    }
    btn.style.display = 'flex';
  }
});
// }

fetch('https://api.jsonbin.io/b/621603041b38ee4b33cac0ea', {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})
  .then((response) => response.json())
  .then((cards) => {
    const data = Object.values(cards);
    console.log(data);
    data.forEach((cardItem) => {
      const {
        name, description, image, subdescription,
      } = cardItem;

      featuredContainer.innerHTML += `
         <div class="featured-item">
            <div class="featured-img">
              <img
                src="${image}"
                alt="profile picture"
              />
            </div>
            <div class="featured-description">
              <p class="description-title">
                ${name}
              </p>
              <p class="subdescription">
                ${subdescription}
              </p>
              
              <p class="featured-separator"></p>
              <p class="description-body">
                ${description}
              </p>
            </div>
          </div>`;
    });
  })
  .then(() => {
    showHide.classList.add('showMore');

    underLine.classList.add('featured-underline');
    featuredContainer.classList.add('featured-container');

    title.innerHTML = 'Featured speakers';
    featuredSection.appendChild(title);
    featuredSection.appendChild(underLine);
    featuredSection.appendChild(featuredContainer);
    featuredContainer.appendChild(btn);
    featuredContainer.insertBefore(showHide, featuredContainer.children[2]);

    if (window.innerWidth < 768) {
      if (featuredContainer.children.length > 2) {
        featuredContainer.children[2].classList.toggle('showMore');
        featuredContainer.children[3].classList.toggle('showMore');
        featuredContainer.children[4].classList.toggle('showMore');

        btn.style.display = 'flex';
      }
    }
  })
  .catch((error) => {
    console.log(error);
  });
