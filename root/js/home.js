funcion validaBusca() {
  if(document.querySelector('#q').value == '') {
	alert('N�o podia ter deixado em branco a busca!');
	return false; 
  }
}
document.querySelector('#form-busca').onsubmit = validaBusca;
/* fazendo a associa��o da fun��o com o evento
 *(fun��o anterior deve ser executada quando o usu�rio disparar o 
 *evento de enviar o formul�rio (onsubmit). )
 */
