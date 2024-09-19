function piada() {
  const url = 'https://api.chucknorris.io/jokes/random';
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  fetch(url, options)
   .then(response => response.json())
   .then(data => { document.getElementById('pi').innerHTML = data.value; 
    })
  .catch(error => {
    console.error('Erro:', error);
  });
}