const form = document.getElementById('form')

const inNama = form.elements['nama']
const inNim = form.elements['nim']
const inNilai = form.elements['nilai']

const output = document.getElementById('output')
const [nama, hasil, label, ket] = [...output.querySelectorAll('div > span > span')]

form.addEventListener('reset', ev => {
  [nama, hasil, label, ket].forEach(e => e.textContent = '')
  output.style.visibility = 'hidden'
})

form.onsubmit = ev => {
  ev.preventDefault()

  let l = ''
  const nilai = inNilai.value

  switch (true) {
    case nilai >= 85:
      l = 'A'
      break;
    case nilai < 85 && nilai >= 80:
      l = 'A-'
      break
    case nilai < 80 && nilai >= 78:
      l = 'B+'
      break
    case nilai < 78 && nilai >= 75:
      l = 'B'
      break
    case nilai < 75 && nilai >= 70:
      l = 'B-'
      break
    case nilai < 70 && nilai >= 67:
      l = 'C+'
      break
    case nilai < 67 && nilai >= 63:
      l = 'C'
      break
    case nilai < 63 && nilai >= 60:
      l = 'C-'
      break
    case nilai < 60 && nilai >= 57:
      l = 'D'
      break
    case nilai < 57:
      l = 'E'
      break

    default:
      break;
  }

  nama.innerText = inNama.value
  hasil.innerText = nilai
  label.innerText = l

  if (nilai >= 63) {
    ket.innerText = 'Lulus'
  } else {
    ket.innerText = 'Gagal'
  }

  output.style.visibility = 'visible'
}
