let previousTitle = document.title

window.addEventListener('blur', () => {
    let previousTitle = document.title
    document.title = ' Impulso Visual '
} )

window.addEventListener('focus', () => {
    document.title = previousTitle
})