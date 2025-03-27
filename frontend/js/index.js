// Sidebar
const toggleButton = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

function toggleNav(){
    console.log("Sidebar")
    sidebar.classList.toggle('close')
    toggleButton.classList.toggle('rotate')
}

// Theme Switch
let lightmode = localStorage.getItem('lightmode')
const themeToggle = document.getElementById('theme-toggle')

const enableLightMode = () => {
    document.body.classList.add('lightmode')
    localStorage.setItem('lightmode', 'active')
}

const disableLightMode = () => {
    document.body.classList.remove('lightmode')
    localStorage.setItem('lightmode', null)
}

if(lightmode === 'active')
    enableLightMode()

themeToggle.addEventListener('click', () => {
    lightmode = localStorage.getItem('lightmode')
    lightmode !== 'active' ? enableLightMode() : disableLightMode()
})

