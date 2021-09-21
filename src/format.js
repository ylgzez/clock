const formatTime = (time) => {
  const minutes = Math.trunc(time / 60)
  const seconds = time % 60
  const mm = minutes < 10 ? '0' + minutes.toString() : minutes.toString()
  const ss = seconds < 10 ? '0' + seconds.toString() : seconds.toString()
  return `${mm}:${ss}`
}

export default formatTime
