import { doctors } from './data.js';

const home = document.getElementById('home');
const searchInput = document.getElementById('searchInput');
const doctorList = document.getElementById('doctorList');
const chat = document.getElementById('chat');
const messages = document.getElementById('messages');
const input = document.getElementById('input');

function navigate(page) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById(page).style.display = 'block';
    if (page === 'home') renderDoctors(doctors);
}

function renderDoctors(list) {
    let html = "";
    list.forEach((d, i) => {
        const stars = '★'.repeat(Math.floor(d.rating)) + '☆'.repeat(5 - Math.floor(d.rating));
        html += `
            <div class="card">
                <img src="${d.img}" alt="${d.name}">
                <h3>${d.name}</h3>
                <div class="spec">${d.spec}</div>
                <div class="short">${d.short}</div>
                <div class="rating">${stars} <span>(${d.rating})</span></div>
                <button class="profile-btn" onclick="window.location.href='perfil.html?id=${i}'">VER PERFIL</button>
            </div>
        `;
    });
    doctorList.innerHTML = html;
}

searchInput.addEventListener("input", () => {
    let v = searchInput.value.toLowerCase();
    let filtered = doctors.filter(d =>
        d.name.toLowerCase().includes(v) || d.spec.toLowerCase().includes(v)
    );
    renderDoctors(filtered);
});

function toggleChat() {
    chat.style.display = chat.style.display === 'block' ? 'none' : 'block';
}

function send() {
    let text = input.value.trim();
    if (!text) return;
    add(text, 'user');
    let reply = ai(text);
    setTimeout(() => add(reply, 'bot'), 800);
    input.value = "";
}

function add(t, type) {
    let msg = document.createElement("div");
    msg.className = "msg " + type;
    msg.innerHTML = t;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
}

function ai(text) {
    text = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let spec = '';
    let detail = '';
    const advice = 'Recuerda que esto no sustituye una consulta médica profesional. Si los síntomas son graves, busca atención inmediata.';

    if (/pecho|corazon|palpitaciones|dolor.*pecho|opresion|arritmia|hipertension|taquicardia|infarto/.test(text)) {
        spec = "Cardióloga";
        detail = "Síntomas cardíacos como dolor en el pecho o palpitaciones pueden ser serios. Monitorea tu pulso y presión arterial.";
    } else if (/piel|erupcion|acne|picazon|manchas|sarpullido|eccema|psoriasis/.test(text)) {
        spec = "Dermatóloga";
        detail = "Problemas cutáneos suelen mejorar con cuidado local y evitando irritantes.";
    } else if (/ansiedad|estres|depresion|panico|insomnio|tristeza/.test(text)) {
        spec = "Psicólogo";
        detail = "Síntomas emocionales responden bien a terapia y técnicas de relajación.";
    } else if (/nino|bebe|fiebre.*infantil|vomito.*nino|diarrea.*bebe/.test(text)) {
        spec = "Pediatra";
        detail = "En niños la hidratación y control de fiebre son prioritarios.";
    } else if (/cabeza|migrana|dolor.*cabeza|mareo|vertigo/.test(text)) {
        spec = "Neurólogo";
        detail = "Dolores de cabeza intensos o mareos pueden necesitar evaluación neurológica.";
    } else if (/embarazo|menstruacion|ginecologico|dolor.*ovario|ciclo.*irregular/.test(text)) {
        spec = "Ginecólogo";
        detail = "Alteraciones del ciclo o dolor pélvico requieren valoración ginecológica.";
    } else if (/hueso|fractura|articulacion|dolor.*espalda|rodilla/.test(text)) {
        spec = "Traumatólogo";
        detail = "Lesiones musculoesqueléticas mejoran con reposo, hielo, compresión y elevación (RICE).";
    } else if (/peso|dieta|alimentacion|nutricion|obesidad|bajar.*peso/.test(text)) {
        spec = "Nutrióloga";
        detail = "Para control de peso o dieta, un plan personalizado es lo más efectivo.";
    } else if (/fiebre|tos|gripe|resfriado|dolor.*garganta/.test(text)) {
        detail = "Síntomas gripales suelen ser virales. Descansa, hidrátate y usa paracetamol si hay fiebre.";
        return `${detail} Si persiste más de 5 días o hay dificultad para respirar, consulta médico general. ${advice}`;
    }

    if (spec) {
        const index = doctors.findIndex(d => d.spec.toLowerCase().includes(spec.toLowerCase()));
        if (index !== -1) {
            return `${detail} Te recomiendo consultar a nuestro especialista en <a href="perfil.html?id=${index}">${spec}</a>. ¿Puedes darme más detalles? ${advice}`;
        }
    }

    return `No identifico claramente el problema. Describe más tus síntomas (dónde duele, cuánto tiempo, intensidad 1-10, otros síntomas). ${advice}`;
}

navigate('home');
renderDoctors(doctors);
add("¡Hola! Soy Jelfen 🦩<br>¿En qué puedo ayudarte hoy?", "bot");

window.navigate = navigate;
window.toggleChat = toggleChat;
window.send = send;