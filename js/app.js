const urlUF = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
const cidade = document.querySelector('#cidade');
const uf = document.querySelector('#uf');

uf.addEventListener('change', async () => {
  const urlCidades =
    'https://servicodados.ibge.gov.br/api/v1/localidades/estados/' +
    uf.value +
    '/municipios';
  const request = await fetch(urlCidades);
  const response = await request.json();
  console.log(response.length);

  let options = '';
  response.forEach((cidades) => {
    options += '<option>' + cidades.nome + '</option>';
  });
  cidade.innerHTML = options;

  const numCidades = document.querySelector("[id = 'nc']");
  numCidades.value = response.length;
});

window.addEventListener('load', async () => {
  const request = await fetch(urlUF);
  const response = await request.json();

  const options = document.createElement('optgroup');
  options.setAttribute('label', 'Estados');

  response.forEach((uf) => {
    options.innerHTML += '<option>' + uf.sigla + '</option>';
  });

  uf.append(options);
});
