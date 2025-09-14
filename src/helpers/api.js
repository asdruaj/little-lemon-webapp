const seededRandom = function (seed) {
  const m = 2 ** 35 - 31
  const a = 185852
  let s = seed % m
  return function () {
    return (s = s * a % m) / m
  }
}

export const fetchAPI = function (date) {
  const result = []
  const random = seededRandom(date.getDate())

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ':00')
    }
    if (random() < 0.5) {
      result.push(i + ':30')
    }
  }
  return result
}
export const submitAPI = function (formData) {
  const promise = new Promise((resolve, reject) => {
    if (formData) {
      resolve(true) // Resolve the promise with a value
    } else {
      reject(new Error('Operation failed')) // Reject the promise with an error reason
    }
  })

  return promise
}
