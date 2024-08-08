
let images = [
  {
    path: '1.png',
    alt: 'Imagem descrição',
  },
  {
    path: '4.png',
    alt: 'Imagem descrição',
  },
  {
    path: '5.png',
    alt: 'Imagem descrição',
  },
  {
    path: '7.png',
    alt: 'Imagem descrição',
  },
  {
    path: '8.png',
    alt: 'Imagem descrição',
  },
  {
    path: '1.png',
    alt: 'Imagem descrição',
  },
  {
    path: '4.png',
    alt: 'Imagem descrição',
  },
  {
    path: '5.png',
    alt: 'Imagem descrição',
  },
  {
    path: '7.png',
    alt: 'Imagem descrição',
  },
  {
    path: '8.png',
    alt: 'Imagem descrição',
  },
]


let positions = 0
const elSlide = document.getElementById('carousel__slide')

const initialIframe = 0

images = images.map((obj, index) => {
  const currentPositions = positions
  positions += 25

  let classTag

  if(index == initialIframe || index-4 == initialIframe) classTag = ''
  if(index-1 == initialIframe || index-3 == initialIframe) classTag = 'img_b' 
  if(index-2 == initialIframe) classTag = 'img_c' 

  return `
    <img
      img_default
      style="left:${currentPositions}%;"
      id="app-${index}"
      src="app/${obj.path}"
      ${classTag ? `frame_size="${classTag}"`: ''}
      alt="${obj.alt}"
    >`
})

elSlide.innerHTML = images.join('')

const littleAjustmentOnSpacing = (handle) => {
  const spacing = document.querySelectorAll('[frame_size="img_b"]')
  spacing.forEach((obj, index) => {
    index == 0 && !handle ? obj.style.transform = 'translateX(calc(-50% - 26px))' : obj.style.transform = 'translatex(calc(-50% + 26px))'
  })
}

littleAjustmentOnSpacing()

const slide = (param) => {
  const centerElement = document.querySelector('[frame_size="img_c"]')
  const centerIndex = Number(centerElement.id.split('app-')[1])
  const imagens = document.querySelectorAll('[img_default]')
  
  imagens.forEach(obj => { // Limpa os estilos
    obj.removeAttribute('frame_size')
    obj.style.transform = ''
  })

  const [less1, less2] = [centerIndex-1, centerIndex-2]
  const [plus1, plus2] = [centerIndex+1, centerIndex+2]

  const whitchSide = param == 'left'

  const teste = (obj) => {
    const value = Number(obj.style.left.replace('%', ''))
    return whitchSide ? value+25 : value-25
  } 
  
  imagens.forEach(obj => obj.style.left = `${teste(obj)}%`)

  try {
    document.getElementById(`app-${whitchSide ? less1 : plus1}`).setAttribute('frame_size', 'img_c')
    document.getElementById(`app-${centerIndex}`).setAttribute('frame_size', 'img_b')
    document.getElementById(`app-${whitchSide ? less2 : plus2}`).setAttribute('frame_size', 'img_b')
  } catch{}

  const indexCurrentCenter = Number(document.querySelector('[frame_size="img_c"]').id.split('app-')[1])
  
  const l = document.getElementById('button__l')
  indexCurrentCenter == 0 ? l.style.display= 'none' : l.style.display= ''
  const r = document.getElementById('button__r')
  indexCurrentCenter == imagens.length-1 ? r.style.display= 'none' : r.style.display= ''

  littleAjustmentOnSpacing(indexCurrentCenter == 0)
}