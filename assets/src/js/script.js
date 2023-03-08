/* Referência Perfil with Pop-UP. ---------------------------------------------------------------------- */

const hrefPerfil = document.querySelector('#href-perfil')
hrefPerfil.addEventListener("click", () => {
    const containerPopUp = document.querySelector('.container-popup')

    containerPopUp.style.display = 'block'
})

const closepopUp = document.querySelector('.close-popup')
closepopUp.addEventListener('click', () => {
    const containerPopUp = document.querySelector('.container-popup')

    containerPopUp.style.display = 'none'
})

const closepopUpYes = document.querySelector('.yes')
closepopUpYes.addEventListener('click', () => {
    const containerPopUpYes = document.querySelector('.container-popup')

    containerPopUpYes.style.display = 'none'
    location.href = 'perfil.html'
})

const closepopUpNo = document.querySelector('.no')
closepopUpNo.addEventListener('click', () => {
    const containerPopUpNo = document.querySelector('.container-popup')

    containerPopUpNo.style.display = 'none'
    location.href = 'cadastro.html'
})