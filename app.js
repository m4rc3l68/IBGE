const urlUF = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
const uf = document.querySelector('#uf');

window.addEventListener('load', async () => {
  const request = await fetch(urlUF);
  const response = await request.json();

  const options = document.createElement('optgroup');
  options.setAttribute('label', 'Estados');
  response.forEach(function (uf) {
    options.innerHTML += '<option>' + uf.sigla + '</option>';
  });

  uf.append(options);
});
