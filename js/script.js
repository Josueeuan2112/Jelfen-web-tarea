import { doctors } from './data.js';

// ==================== VARIABLES GLOBALES ====================
const home = document.getElementById('home');
const profilePage = document.getElementById('profilePage');
const profileContent = document.getElementById('profileContent');
const searchInput = document.getElementById('searchInput');
const doctorList = document.getElementById('doctorList');
const chat = document.getElementById('chat');
const messages = document.getElementById('messages');
const input = document.getElementById('input');

// ==================== FUNCIONES ====================

function renderDoctors(list) {
    let html = "";
    list.forEach((d, i) => {
        html += `
            <div class="card" style="animation-delay: ${i * 0.1}s;">
                <img src="${d.img}">
                <div class="card-content">
                    <h3>${d.name}</h3>
                    <div class="spec">${d.spec}</div>
                    <div class="rating">★★★★★</div>
                    <div class="desc">${d.short}</div>
                    <button class="profile-btn" onclick="openProfile(${i})">
                        Ver perfil
                    </button>
                </div>
            </div>
        `;
    });
    doctorList.innerHTML = html;
}

function openProfile(i) {
    let d = doctors[i];
    home.style.display = "none";
    profilePage.style.display = "block";

    let commentsHtml = "";
    d.comments.forEach(c => {
        let stars = '★'.repeat(c.rating) + '☆'.repeat(5 - c.rating);
        commentsHtml += `
            <div class="comment">
                <span class="reviewer">${c.name}, ${c.age} años</span>
                <span class="stars">${stars}</span>
                <p>${c.text}</p>
            </div>
        `;
    });

    profileContent.innerHTML = `
        <h2>${d.name}</h2>
        <img src="${d.img}">
        <p><b>Especialidad:</b> ${d.spec}</p>
        <p><b>Experiencia:</b> ${d.exp}</p>
        <p><b>Ubicación:</b> ${d.location}</p>
        <p>${d.desc}</p>
        <button class="profile-btn">📅 Agendar cita virtual</button>
        <div class="comments">
            <h3>Reseñas</h3>
            ${commentsHtml}
        </div>
    `;
}

function goHome() {
    home.style.display = "block";
    profilePage.style.display = "none";
    renderDoctors(doctors);
}

function toggleChat() {
    chat.classList.toggle("min");
}

function send() {
    let text = input.value.trim();
    if (!text) return;

    add(text, "user");
    let reply = ai(text);
    setTimeout(() => add(reply, "bot"), 600);
    input.value = "";
}

function add(t, type) {
    let msg = document.createElement("div");
    msg.className = "msg " + type;
    msg.innerHTML = t;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
}

// ==================== IA SIMULADA (SIN CAMBIOS) ====================
function ai(text) {
    text = text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    let spec = '';
    let detail = '';
    let generalAdvice = 'Recuerda que esto no sustituye una consulta médica profesional. Si los síntomas son graves, busca atención inmediata.';

    if (text.includes("pecho") || text.includes("corazon") || text.includes("palpitaciones") || text.includes("dolor pecho") || text.includes("opresion pecho") || text.includes("arritmia") || text.includes("hipertension") || text.includes("taquicardia") || text.includes("infarto") || text.includes("me duele el corazon")) {
        spec = "Cardiólogo";
        detail = "Sintomas como dolor en el pecho, palpitaciones o opresión podrían indicar problemas cardíacos como arritmias, hipertensión arterial o incluso un evento cardiovascular agudo. Monitorea tu pulso, evita actividades extenuantes y mide tu presión si es posible.";
    } else if (text.includes("piel") || text.includes("erupcion") || text.includes("acne") || text.includes("picazon") || text.includes("manchas") || text.includes("sarpullido") || text.includes("eccema") || text.includes("psoriasis") || text.includes("dermatitis") || text.includes("me pica la piel") || text.includes("ronchas")) {
        spec = "Dermatólogo";
        detail = "Problemas en la piel como erupciones, picazón, manchas o acné podrían ser causados por alergias, infecciones fúngicas, bacterianas o condiciones crónicas como eczema o psoriasis. Evita rascarte para no empeorar, usa jabones suaves y mantén la piel hidratada.";
    } else if (text.includes("ansiedad") || text.includes("estres") || text.includes("depresion") || text.includes("panico") || text.includes("insomnio") || text.includes("tristeza") || text.includes("ataque panico") || text.includes("me siento ansioso") || text.includes("no puedo dormir") || text.includes("fatiga mental") || text.includes("bajo animo")) {
        spec = "Psicólogo";
        detail = "Sintomas emocionales como ansiedad, estrés crónico, depresión o insomnio podrían relacionarse con trastornos mentales. Prueba técnicas de relajación como meditación o ejercicio ligero; una terapia como la cognitivo-conductual puede ser muy efectiva para manejar estos.";
    } else if (text.includes("nino") || text.includes("bebe") || text.includes("fiebre infantil") || text.includes("vomito nino") || text.includes("diarrea bebe") || text.includes("tos nino") || text.includes("mi hijo tiene fiebre") || text.includes("bebe llora mucho") || text.includes("colicos") || text.includes("infeccion infantil")) {
        spec = "Pediatra";
        detail = "En niños o bebés, síntomas como fiebre, vómitos, diarrea o tos podrían indicar infecciones virales, bacterianas o problemas digestivos. Asegura hidratación constante, mide la fiebre cada pocas horas y evita medicamentos sin prescripción.";
    } else if (text.includes("cabeza") || text.includes("migrana") || text.includes("dolor cabeza") || text.includes("mareo") || text.includes("vertigo") || text.includes("jaqueca") || text.includes("convulsion") || text.includes("me duele la cabeza") || text.includes("zumbido oidos") || text.includes("perdida equilibrio") || text.includes("neurologico")) {
        spec = "Neurólogo";
        detail = "Dolores de cabeza, migrañas, mareos o vértigo podrían deberse a tensión muscular, problemas vasculares, sinusitis o trastornos neurológicos como epilepsia. Descansa en un ambiente oscuro y silencioso, hidrátate bien y evita triggers como luces brillantes.";
    } else if (text.includes("embarazo") || text.includes("menstruacion") || text.includes("ginecologico") || text.includes("dolor abdominal mujer") || text.includes("ciclo irregular") || text.includes("sangrado") || text.includes("dolor ovario") || text.includes("nauseas embarazo") || text.includes("mi periodo esta atrasado") || text.includes("endometriosis")) {
        spec = "Ginecólogo";
        detail = "Sintomas ginecológicos como irregularidades menstruales, dolor abdominal, náuseas o sangrado inusual podrían indicar desequilibrios hormonales, embarazo, endometriosis o infecciones. Lleva un registro de tu ciclo y evita automedicarte con hormonales.";
    } else if (text.includes("hueso") || text.includes("fractura") || text.includes("articulacion") || text.includes("dolor brazo") || text.includes("esguince") || text.includes("dolor espalda") || text.includes("rodilla") || text.includes("me duele la espalda") || text.includes("torcedura") || text.includes("artritis") || text.includes("osteoporosis")) {
        spec = "Traumatólogo";
        detail = "Problemas musculoesqueléticos como dolor en huesos, articulaciones, fracturas o esguinces podrían ser por lesiones, artritis o desgaste. Aplica el método RICE (reposo, hielo, compresión, elevación) y evita cargar peso en la zona afectada.";
    } else if (text.includes("fiebre") || text.includes("tos") || text.includes("gripe") || text.includes("resfriado") || text.includes("dolor garganta") || text.includes("congestion") || text.includes("estornudos") || text.includes("fatiga") || text.includes("me siento mal") || text.includes("infeccion")) {
        detail = "Sintomas generales como fiebre, tos seca o productiva, gripe o resfriado podrían ser virales o bacterianos. Toma abundantes líquidos, descansa y usa paracetamol para la fiebre si supera 38°C. Si hay dificultad para respirar o persiste más de 5 días, busca ayuda urgente.";
        return `${detail} Esto parece una condición común, pero si es severa, consulta un médico general. ${generalAdvice}`;
    } else if (text.includes("estomago") || text.includes("diarrea") || text.includes("vomito") || text.includes("acidez") || text.includes("dolor abdominal") || text.includes("indigestion") || text.includes("gastritis") || text.includes("me duele el estomago") || text.includes("nauseas")) {
        detail = "Problemas digestivos como dolor estomacal, diarrea, vómitos o acidez podrían indicar gastritis, intoxicación alimentaria o virus gastrointestinal. Come alimentos blandos, hidrátate con sueros orales y evita comidas pesadas o lácteos si hay diarrea.";
        return `${detail} Para síntomas digestivos, un gastroenterólogo podría ser ideal, pero empieza con un médico general. ${generalAdvice}`;
    } else if (text.includes("ojo") || text.includes("vision borrosa") || text.includes("dolor ojo") || text.includes("conjuntivitis") || text.includes("me duelen los ojos") || text.includes("lagrimeo")) {
        detail = "Sintomas oculares como visión borrosa, dolor o lagrimeo podrían ser por conjuntivitis, fatiga visual o problemas refractivos. Lava los ojos con suero fisiológico y evita frotarlos; usa gotas lubricantes si es seco.";
        return `${detail} Recomiendo un oftalmólogo para evaluación visual. ${generalAdvice}`;
    } else if (text.includes("oido") || text.includes("dolor oido") || text.includes("zumbido") || text.includes("infeccion oido") || text.includes("me duele el oido") || text.includes("tinnitus")) {
        detail = "Dolores de oído, zumbidos o infecciones podrían ser otitis, acumulación de cera o tinnitus. Evita introducir objetos y usa compresas calientes para alivio temporal.";
        return `${detail} Un otorrinolaringólogo es el especialista adecuado. ${generalAdvice}`;
    } else if (text.includes("dientes") || text.includes("dolor diente") || text.includes("encias") || text.includes("caries") || text.includes("me duele la muela")) {
        detail = "Problemas dentales como dolor de dientes o encías hinchadas podrían indicar caries, gingivitis o abscesos. Enjuaga con agua salada y usa analgésicos orales.";
        return `${detail} Consulta un odontólogo lo antes posible. ${generalAdvice}`;
    } else if (text.includes("alergia") || text.includes("estornudos") || text.includes("rinitis") || text.includes("picazon nariz") || text.includes("alergico")) {
        detail = "Sintomas alérgicos como estornudos, picazón o rinitis podrían ser por polen, polvo o alimentos. Usa antihistamínicos de venta libre y evita alérgenos conocidos.";
        return `${detail} Un alergólogo puede realizar pruebas para identificar causas. ${generalAdvice}`;
    } else if (text.includes("cancer") || text.includes("tumor") || text.includes("lunar cambiante") || text.includes("perdida peso inexplicable")) {
        detail = "Sintomas graves como pérdida de peso inexplicable, fatiga extrema o cambios en lunares podrían indicar condiciones serias. No ignores estos; busca evaluación inmediata.";
        return `${detail} Dependiendo de la zona, podría necesitar un oncólogo u otro especialista. Ve a urgencias si es agudo. ${generalAdvice}`;
    }

    if (spec) {
        let index = doctors.findIndex(d => d.spec.toLowerCase() === spec.toLowerCase());
        if (index !== -1) {
            return `${detail} Podría tratarse de un problema relacionado con ${spec.toLowerCase()}. Te recomiendo consultar a nuestro <span class="link" onclick="openProfile(${index})">${spec}</span>. ¿Puedes describir más síntomas, como duración o intensidad, para una mejor orientación? ${generalAdvice}`;
        }
    }
    return "No reconozco claramente los síntomas descritos. Por favor, detalla más: ¿dónde duele, desde cuándo, qué intensidad (del 1 al 10), hay fiebre o otros signos? Esto me ayuda a sugerir el especialista adecuado. Recuerda, soy un asistente simulado, no un diagnóstico real. ${generalAdvice}";
}

// ==================== INICIALIZACIÓN ====================
renderDoctors(doctors);

searchInput.addEventListener("input", function () {
    let v = this.value.toLowerCase();
    let filtered = doctors.filter(d =>
        d.name.toLowerCase().includes(v) ||
        d.spec.toLowerCase().includes(v)
    );
    renderDoctors(filtered);
});

// ==================== HACER FUNCIONES ACCESIBLES DESDE HTML ====================
window.goHome = goHome;
window.openProfile = openProfile;
window.toggleChat = toggleChat;
window.send = send;