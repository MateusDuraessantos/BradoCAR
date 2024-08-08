const plain = document.getElementById('plain__grid')

const plainsInfos = [
  {
    plain: 'BÁSICO',
    value: 65,
    plainsOptions: [
      'Rastreamento pelo app',
      'Monitoramento pela central',
      'Bloqueio pelo app em caso de roubo',
      '2 prontas respostas por ano',
    ],
  },
  {
    plain: 'PLUS',
    value: 75,
    plainsOptions: [
      'Rastreamento pelo app',
      'Monitoramento pela central',
      'Bloqueio pelo app em caso de roubo',
      '2 prontas respostas por ano'
    ],
  },
  {
    plain: 'PRO',
    value: 75,
    plainsOptions: [
      'Rastreamento pelo app',
      'Monitoramento pela central',
      'Bloqueio pelo app em caso de roubo',
      '2 prontas respostas por ano',
      'Cerca virtual com alerta no APP',
    ],
  },
  {
    plain: 'FULL',
    value: 106.9,
    plainsOptions: [
      'Rastreamento pelo app',
      'Monitoramento pela central',
      'Bloqueio pelo app em caso de roubo',
      '2 prontas respostas por ano',
      'Cerca virtual com alerta no APP',
      'Assistência 24 horas',
    ],
  },
]

plainsInfos.forEach(obj => {
  const plainCard = document.createElement('div')
  plainCard.classList.add('plain__cards')

  const [valueFirst, valueSecond] = String(obj.value.toFixed(2)).split('.');

  plainCard.innerHTML = `
    <div class="plain__header"><i>${obj.plain}</i></div>
    <div class="plain__container--card">
      <div class="plain__price">
        <span class="plain__price--money">R$</span>
        <p class="plain__price--value"><i>${valueFirst}</i></p>
        <span>,${valueSecond} <br> /mensal</span>
      </div>
      <div class="plain__options">
        <ul>${obj.plainsOptions.map(options => `<li>${options}</li>`).join('')}</ul>
      </div>
      <button class="plain__button--blue">Contratar</button>
    </div>`
  plain__grid.appendChild(plainCard)
})

