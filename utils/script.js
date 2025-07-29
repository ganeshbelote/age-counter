const form = document.querySelector('form')
const age = document.querySelector('.age')
const output = document.querySelector('#output')

form.addEventListener('submit', e => {
  e.preventDefault()
  const bod = form.date.value
  if (!bod) {
    alert('Please, Fill the Birth Date !')
  } else {
    const birth = new Date(bod)
    const now = new Date()

    const ageInMs = now - birth
    const totalDays = Math.floor(ageInMs / (1000 * 60 * 60 * 24)) // total days

    const yearAvg = 365.25 // 1461 / 4
    const years = Math.floor(totalDays / yearAvg) // age in years
    const remainingDays = totalDays - Math.floor(years * yearAvg) // remaining days after years

    const avgMonthDays = 30.44 //yearAvg / 12
    const months = Math.floor(remainingDays / avgMonthDays) // months

    const days = Math.round(remainingDays % avgMonthDays) // days

    age.textContent = `${years} years, ${months} months & ${days} Days`
    output.classList.remove('hide')
  }
})
