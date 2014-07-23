/*
Mostra uma mensagem de erro
function validaBusca() {
  if (document.querySelector('#q').value == '') {
      alert('N�o podia ter deixado em branco a busca!');
      return false;
  }  
}
*/
//Pinta o fundo do formulario de vermelho
function validaBusca() {
  if(document.querySelector('#q').value == '') {
    document.querySelector('#form-busca').style.background = 'red';
	return false;
  }
}
/* fazendo a associa��o da fun��o com o evento
 *(fun��o anterior deve ser executada quando o usu�rio disparar o 
 *evento de enviar o formul�rio (onsubmit). )
 */
document.querySelector('#form-busca').onsubmit = validaBusca;

var banners = ["img/destaque-home.png", "img/destaque-home-2.png"];
var bannerAtual = 0;

function trocaBanner() {
  bannerAtual = (bannerAtual +1) % 2;
  document.querySelector('.destaque img').src = banners[bannerAtual];
}

setInterval(trocaBanner, 4000);