function mostrarImagem() {
  let animal = document.getElementById("animal").value.toLowerCase();
  let resultado = document.getElementById("resultado");

  if (animal === "pato") {
    resultado.innerHTML = '<img src="image/pato.jpg" alt="Pato">';
  } else if (animal === "gato") {
    resultado.innerHTML = '<img src="image/gato.jpg" alt="Gato">';
  } else if (animal === "cachorro") {
    resultado.innerHTML = '<img src="image/dog.jpg" alt="Cachorro">';
  } else {
    resultado.innerHTML = "<p>Digite apenas: pato, gato ou cachorro.</p>";
  }
}