
/**
 *
 * @param {HTMLDivElement} element
 */
export const getMessage = ( element ) => {

  const divMessage = document.querySelector(".message");

  const messageDiv = document.createElement("div");
  messageDiv.className = "txt";
  messageDiv.innerText = ' ';
  divMessage.appendChild(messageDiv);


  // Función para actualizar mensajes
  function getRandomMessage() {

    const message = [
      "Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree no se pierda, sino que tenga vida eterna. - Juan 3:16",
      "El Señor es mi pastor, nada me faltará. - Salmo 23:1",
      "Ama a tu prójimo como a ti mismo. - Mateo 22:39",
      "La fe es la certeza de lo que se espera, la convicción de lo que no se ve. - Hebreos 11:1",
      "Respodiendo Jesús les dijo: Tened Fe en Dios. . - Marcos 11:22",
      "Porque de cierto os digo que cualquiera que dijere a este monte: Quitate y echate al mar, y no dudare en su corazón sino creyese que será hecho lo que dice, lo que diga le será hecho. . - Marcos 11:23",
      "Por tanto os digo que todo lo que pidiereis en oración creis que lo recibiréis, y es verdad. . - Marcos 11:24",
      " 'Puesto que en él vivimos, nos movemos y existimos' como algunos de vuestros propios poetas también han dicho: Porque linaje suyo somos. - Hechos 17:28"
    ];

    const randomIndex = Math.floor(Math.random() * message.length);
    return message[randomIndex];
  }

  function updateMessage() {

    const messageElement = document.querySelector('.txt');
    const message = getRandomMessage();

    messageElement.textContent = message;

    setTimeout(updateMessage, 25000)
  }

  updateMessage();
}
