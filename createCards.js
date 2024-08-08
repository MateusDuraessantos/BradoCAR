const cardsInfos = [
  {
    number: '01',
    title: 'Assistência 24 hs',
    description: `Os serviços de atendimento ao cliente, chamados de assistência 24 horas, garantem, em caso de pane ou acidente, a prestação de socorro ao veículo segurado e seus ocupantes, como guincho, socorro bateria, entre outros.
    200km de reboque
    Chaveiro 24h
    Pane elétrica`,
    image: 'streets.jpg',
    css: 1
  },
  {
    number: '02',
    title: 'Proteção Veicular',
    description: `A proteção veicular da Bradocar oferece tranquilidade e segurança para seu carro, com cobertura 24h em todo o país. Conte com assistência 24h, guincho, socorro mecânico e muito mais. Proteja seu patrimônio com a Bradocar!`,
    image: 'truck.jpg',
    css: 2
  },
  {
    number: '03',
    title: 'Rastreamento veicular',
    description: `O rastreamento veicular da Bradocar, tenha total controle e segurança do seu carro. Localize em tempo real, receba alertas e proteja seu veículo contra furtos e roubos. Conte com a Bradocar para manter seu patrimônio protegido.`,
    image: 'cellphone.jpg',
    css: 1
  },
  {
    number: '04',
    title: 'Locação e Venda de Veiculos',
    description: `Na Bradocar, você encontra a melhor opção para locação e venda de veículos. Com uma variedade de modelos e plainos flexíveis, atendemos suas necessidades. Conte com a qualidade e confiança da Bradocar.`,
    image: 'carkey.jpg',
    css: 2
  },
]

const solucoes = document.getElementById('solucoes')
    
cardsInfos.forEach(obj => {
  const cards = document.createElement('div')
  cards.classList.add(obj.css == 1 ? 'solucoes__card-1' : 'solucoes__card-2')
  cards.innerHTML += `
    <div class="solucoes__text">
    <span class="solucoes__text--response">
      <p class="solucoes__number">${obj.number}</p>
      <p class="solucoes__title">${obj.title}</p>
    </span>
      <p class="solucoes__p">${obj.description}</p>
    </div>
    <img class="solucoes__img" src="src/${obj.image}" alt="">
  `
  solucoes.appendChild(cards)
})