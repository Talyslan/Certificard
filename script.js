function adicionarFilme()
{
  var favoriteMovie = document.getElementById("filme").value
  
  //.endsWith = se favoriteMovie terminar com ".jpg" ou ".png" imprima isso...
  if(favoriteMovie.endsWith(".jpg") || favoriteMovie.endsWith(".png")) 
    {
      toListMovies(favoriteMovie);   //estamos enviando a variável para a outra função
    }
  else
    {
      console.error("Este endereço é inválido!")   
      //console.error é como um console.log mas para imprimir erros
    }
  document.getElementById("filme").value = ""  
  //para limpar a barra de inserir endereço

  //quebramos o código fazendo uma nova funão dentro dele
  function toListMovies(movie)   //dentro dos parênteses estamos recebendo a variavel da outra função ("favoriteMovie")
  {
    //console.log(movie)  //apenas para verificar se a variável foi recebido com sucesso
    var showInTheScreen = "<img src=" + movie + ">"
    var listMovieElement = document.getElementById("listaFilmes")
    listMovieElement.innerHTML = listMovieElement.innerHTML + showInTheScreen 
    //adicionar o que já está aparecendo na tela mais um novo endereço de filme
  }
}