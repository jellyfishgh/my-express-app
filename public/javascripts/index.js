document.body.onload = function () {
  console.log('page loaded')
}

document.getElementById('btn').onclick = function () {
  const xhr = new XMLHttpRequest()
  xhr.open('GET', '/javascripts/data.json', true)
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const data = JSON.parse(xhr.response)
      console.log(data)
    }
  }
  xhr.send()
}
