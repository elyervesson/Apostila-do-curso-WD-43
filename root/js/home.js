funcion validaBusca() {
  if(document.querySelector('#q').value == '') {
	alert('Não podia ter deixado em branco a busca!');
	return false; 
  }
}
document.querySelector('#form-busca').onsubmit = validaBusca;
/* fazendo a associação da função com o evento
 *(função anterior deve ser executada quando o usuário disparar o 
 *evento de enviar o formulário (onsubmit). )
 */
