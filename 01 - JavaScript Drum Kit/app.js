document.addEventListener('DOMContentLoaded', () => {
  console.log('🍔')


  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return
    audio.currentTime = 0 // rewinds time to the start with each keyDown
    audio.play()
    key.classList.add('playing')
  }

  function removeTransition(e) {
    if(e.propertyName !== 'transform') return
    this.classList.remove('playing ')
  }

  const keys = document.querySelectorAll('.key')
  keys.forEach(key => key.addEventListener('transitionend', removeTransition))


  window.addEventListener('keydown', playSound)
})
