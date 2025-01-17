const $horas = document.querySelector('#horas');
const $minutos = document.querySelector('#minutos');
const $segundos = document.querySelector('#segundos');

const $btnHorasSumar = document.querySelector('#btn-sumar-horas');
const $btnMinutosSumar = document.querySelector('#btn-sumar-minutos');
const $btnMegundosSumar = document.querySelector('#btn-sumar-segundos');

const $btnPause = document.querySelector('#btn-pausa')
const $btnDetener = document.querySelector('#btn-detener')
const $btnIniciar = document.querySelector('#btn-iniciar')

const $buttons = document.querySelector("#buttons")
const $buttonsFunctions = document.querySelector('.container-temporizador')

const initTemporizador = () => {
  let start = false;
  let temporizador;
  let horas = +$horas.textContent
  let minutos = +$minutos.textContent
  let segundos = +$segundos.textContent

  $buttons.addEventListener('click', (element) => {
    if (element.target === $btnIniciar) start = true
    if (element.target === $btnPause) start = false
    console.log(start)
    if (start) {
      temporizador = setInterval(() => {


        if (segundos !== 0) {
          segundos -= 1;
          $segundos.innerText = segundos
        } else {
          //los segundos son 0
          if (minutos !== 0) {
            segundos = 60;
            minutos -= 1;
            $minutos.innerText = minutos
          } else {
            //minutos son 0
            if (horas !== 0) {
              minutos = 60;
              horas -= 1
            } else {
              start = false;
              clearInterval(temporizador)

            }
          }
        }

        console.log(horas, minutos, segundos)
        console.log(start)
      }, 1000)
    } else {
      clearInterval(temporizador)
    }



  })



}

initTemporizador()


const buttonsHandler = () => {
  let horas = +$horas.textContent
  let minutos = +$minutos.textContent
  let segundos = +$segundos.textContent
  $buttonsFunctions.addEventListener('click', function (event) {


    if (event.target === $btnMegundosSumar && segundos < 60) {
      $segundos.textContent = `${segundos += 1}`
    } else if (event.target === $btnMegundosSumar && segundos === 60) {
      segundos = 0
      $minutos.textContent = `${minutos += 1}`
      $segundos.textContent = `${segundos}`
    }

    if (event.target === $btnMinutosSumar && minutos < 60) {
      $minutos.textContent = `${minutos += 1}`
    } else if (event.target === $btnMinutosSumar && minutos < 60) {
      minutos = 0
      $horas.textContent = `${horas += 1}`
      $minutos.textContent = `${minutos}`
    }
  })


}

buttonsHandler()