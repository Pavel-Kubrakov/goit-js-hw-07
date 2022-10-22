import * as basicLightbox from '../package/src/scripts/main.js'
import { galleryItems } from './gallery-items.js';
// Change code below this line
const imagesValue = galleryItems.length

const galleryRef = document.querySelector('.gallery')
const createUl = document.createElement('ul')
createUl.classList.add('gallery__item')
galleryRef.insertAdjacentElement('afterbegin', createUl)
const createLi = galleryItems.map((item)=>{
        const liText = `<div class="gallery__item"><a class="gallery__link" href="gdgs${item.original}">
        <img
            class="gallery__image"
            srcset="${item.preview} 360w,
                    ${item.original} 1200w""
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </div>`
        createUl.insertAdjacentHTML('afterbegin', liText)       
    }
)
const imgRef = document.querySelector('.gallery__image')
const handlerClickImg = galleryRef.addEventListener('click', onClickImg)
createUl.addEventListener('click', (event) => {
    console.log(event.target, createUl)
    if(event.target)
    preventDefault(event)
}
)

function onClickImg (event){
    window.addEventListener('ketdown', isClose)
    console.dir(event.currensTarget)
    if(event.target !== event.currensTarget){
        const instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`)
instance.show()
    }
    }
function isClose(event){
    window.removeEventListener('keydown', isClose)
    const instance = basicLightbox.create(`<img src="${event.target.dataset.source}">`)
instance.close()
        }
function esc (event){
     if(event.code === 'Escape'){
        instance.close()
     }
}