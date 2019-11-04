document.addEventListener('DOMContentLoaded', () => {
  console.log('🍔')

  window.addEventListener('keydown', function(e) {
    // const audio = document.querySelector(`audio[data-key="${e.keycode}"]`)
    const audio = document.querySelector('audio')

    console.log('audio', audio)
    console.log('e.keyCode', e.keyCode)
  })
})
