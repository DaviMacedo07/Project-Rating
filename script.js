// const toggleButton = document.getElementsByClassName('bt');

// toggleButton.addEventListener('click', () => {
//  toggleButton.classList.toggle('active');
// });

function clicou() {
  let stars = document.querySelector('input[name="stars"]:checked');
  let resultado = document.getElementById('resultado')
  if (stars) {
    var rating = stars.value;
    window.location.href = "resultado.html?rating=" + rating;
  } else {
    alert("Por favor, selecione uma quantidade de estrelas.");
  }
}