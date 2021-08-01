const botonPiedra = document.querySelector("#piedra");
const botonPapel = document.querySelector("#papel");
const botonTijera = document.querySelector("#tijera");
const movimientoMaquina = document.querySelector("#movimiento-maquina");
const movimientoJugador = document.querySelector("#movimiento-jugador");
const puntajeJugador = document.querySelector("#puntaje-jugador");
const puntajeMaquina = document.querySelector("#puntaje-maquina");
const resultadoRonda = document.querySelector("#resultado-ronda");

let pJugador = 0;
let pMaquina = 0;

let mJugador;
let mMaquina;

let piedra = 0;
let papel = 0;
let tijera = 0;

const ejecutarMovimientoMaquina = (jPiedra, jPapel, jTijera) => {
    if (jPiedra === jPapel && jPiedra === jTijera) {
        let movimientoRandom = Math.floor(Math.random() * 3 + 1);
        mMaquina = movimientoRandom;
        if (mMaquina === 1) {
            movimientoMaquina.innerText = "Piedra";
        } else if (mMaquina === 2) {
            movimientoMaquina.innerText = "Papel";
        }
        else {
            movimientoMaquina.innerText = "Tijera";
        }
    }
    else if (jPiedra >= jPapel && jPiedra >= jTijera) {
        mMaquina = 2;
        movimientoMaquina.innerText = "Papel";
    }
    else if (jPapel >= jPiedra && jPapel >= jTijera) {
        mMaquina = 3;
        movimientoMaquina.innerText = "Tijera";
    }
    else {
        mMaquina = 1;
        movimientoMaquina.innerText = "Piedra";
    }
}

const verificarGanador = (movJugador, movMaquina) => {
    if (movJugador === movMaquina) {
        resultadoRonda.innerText = "Empate";
    }
    else if ((movJugador === 1 && movMaquina === 3) || (movJugador === 2 && movMaquina === 1) || (movJugador === 3 && movMaquina == 2)) {
        resultadoRonda.innerText = "Gano Jugador";
        pJugador++;
        return pJugador;
    }
    else {
        resultadoRonda.innerText = "Gano Maquina";
        pMaquina++;
        return pMaquina;
    }
}

botonPiedra.addEventListener('click', (e) => {
    e.preventDefault();
    mJugador = 1;
    ejecutarMovimientoMaquina(piedra, papel, tijera);
    verificarGanador(mJugador, mMaquina,);
    piedra++;
    movimientoJugador.innerText = "Piedra";
    puntajeJugador.innerText = pJugador;
    puntajeMaquina.innerText = pMaquina;
});

botonPapel.addEventListener('click', (e) => {
    e.preventDefault();
    mJugador = 2;
    ejecutarMovimientoMaquina(piedra, papel, tijera);
    verificarGanador(mJugador, mMaquina);
    papel++;
    movimientoJugador.innerText = "Papel";
    puntajeJugador.innerText = pJugador;
    puntajeMaquina.innerText = pMaquina;
});

botonTijera.addEventListener('click', (e) => {
    e.preventDefault();
    mJugador = 3;
    ejecutarMovimientoMaquina(piedra, papel, tijera);
    verificarGanador(mJugador, mMaquina);
    tijera++;
    movimientoJugador.innerText = "Tijera";
    puntajeJugador.innerText = pJugador;
    puntajeMaquina.innerText = pMaquina;
});
