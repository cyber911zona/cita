// ===== FORMULARIO =====
const form = document.getElementById('formCita');
const mensaje = document.getElementById('mensaje');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const curp = document.getElementById('curp').value;
  const tramite = document.getElementById('tramite').value;
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;

  if(nombre === "" || curp === "" || tramite === "" || fecha === "" || hora === ""){
    mostrarMensaje("Por favor completa todos los campos.", "error");
    return;
  }

  mostrarMensaje("✅ Cita registrada con éxito para " + nombre, "exito");
  form.reset();
});

function mostrarMensaje(texto, tipo){
  mensaje.textContent = texto;
  mensaje.className = "mensaje " + tipo;
  mensaje.style.display = "block";
}

// ===== CHATBOT =====
const chatToggle = document.getElementById('chat-toggle');
const chatWindow = document.getElementById('chat-window');
const chatBody = document.getElementById('chat-body');
const chatInput = document.getElementById('chat-input');

chatToggle.addEventListener('click', () => {
  chatWindow.classList.toggle('hidden');
});

chatInput.addEventListener('keypress', (e) => {
  if(e.key === "Enter"){
    const userMsg = chatInput.value.trim();
    if(userMsg !== ""){
      addMessage("Tú", userMsg);
      responderBot(userMsg);
      chatInput.value = "";
    }
  }
});

function addMessage(sender, text){
  const p = document.createElement("p");
  p.innerHTML = `<strong>${sender}:</strong> ${text}`;
  chatBody.appendChild(p);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function responderBot(msg){
  let respuesta = "No entendí tu solicitud 😅";
  if(msg.toLowerCase().includes("acta")){
    respuesta = "Puedes agendar una cita en la sección de Acta de nacimiento.";
  } else if(msg.toLowerCase().includes("matrimonio")){
    respuesta = "Revisa los requisitos en Documentos → Matrimonio.";
  } else if(msg.toLowerCase().includes("defunción")){
    respuesta = "Para defunciones, dirígete a la sección de trámites disponibles.";
  }
  addMessage("Bot", respuesta);
}
