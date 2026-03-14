export const doctors = [
    {
        name: "Dr. Carlos Martínez",
        spec: "Cardiólogo",
        exp: "20 años",
        img: "https://c8.alamy.com/comp/2J1TXK4/portrait-of-young-peruvian-male-doctor-smiling-and-looking-at-camera-isolated-2J1TXK4.jpg",
        short: "Especialista en enfermedades cardiovasculares.",
        desc: "Cardiólogo con más de 20 años de experiencia en diagnóstico y tratamiento del corazón.",
        location: "Hospital Ángeles CDMX",
        comments: [
            { name: "Juan Pérez", age: 45, rating: 5, text: "Excelente atención, me diagnosticó rápidamente y el tratamiento funcionó a la primera. Muy recomendado." },
            { name: "Ana García", age: 30, rating: 4, text: "Mi hija se recuperó rápido gracias a su atención. Muy empático y profesional." },
            { name: "María López", age: 38, rating: 3, text: "Buen profesional, aunque la espera fue un poco larga. Me ayudó con el diagnóstico." },
            { name: "Luis Rodríguez", age: 52, rating: 2, text: "No me ayudó mucho, la consulta fue muy breve y no resolvió mis dudas." },
            { name: "Carmen Ruiz", age: 41, rating: 5, text: "Gran doctor, explicó todo con detalle y el seguimiento fue excelente." }
        ]
    },
    {
        name: "Dra. Sofía Ramírez",
        spec: "Pediatra",
        exp: "15 años",
        img: "https://c8.alamy.com/comp/2G360FD/portrait-of-smiling-mexican-nurse-or-medical-student-at-hospital-2G360FD.jpg",
        short: "Especialista en salud infantil.",
        desc: "Pediatra dedicada al cuidado integral de bebés y niños.",
        location: "Clínica Infantil México",
        comments: [
            { name: "Pedro Hernández", age: 28, rating: 5, text: "Muy amable con los niños, mi hijo se sintió cómodo y el tratamiento fue efectivo." },
            { name: "Laura Fernández", age: 35, rating: 4, text: "Buena doctora, atenta y clara. Me ayudó con el tratamiento de mi hija." },
            { name: "Roberto Sánchez", age: 42, rating: 3, text: "La consulta fue buena, pero un poco fría en el trato. El diagnóstico fue correcto." },
            { name: "Elena Vargas", age: 29, rating: 1, text: "No me ayudó, el tratamiento no funcionó y no dio alternativas." },
            { name: "Miguel Torres", age: 50, rating: 5, text: "Excelente pediatra, siempre disponible y con consejos útiles para padres." },
            { name: "Sofía Medina", age: 33, rating: 4, text: "Muy profesional, resolvió el problema de mi bebé en unas semanas." }
        ]
    },
    {
        name: "Dr. Alejandro Gómez",
        spec: "Dermatólogo",
        exp: "12 años",
        img: "https://thumbs.dreamstime.com/b/young-handsome-hispanic-male-doctor-stethoscope-smiling-confidently-against-white-background-389416164.jpg",
        short: "Especialista en enfermedades de la piel.",
        desc: "Dermatólogo experto en tratamientos clínicos y estéticos.",
        location: "Dermacenter",
        comments: [
            { name: "Diego Morales", age: 40, rating: 5, text: "Excelente especialista, me ayudó a resolver mi problema de piel en unas semanas." },
            { name: "Clara Mendoza", age: 27, rating: 4, text: "Buen doctor, aunque un poco reservado. El tratamiento funcionó." },
            { name: "Jorge Vargas", age: 55, rating: 2, text: "No me ayudó, el tratamiento fue costoso y no vi resultados." },
            { name: "Patricia Ortiz", age: 36, rating: 5, text: "Muy recomendado, explicó todo y el resultado fue fantástico." },
            { name: "Andrés López", age: 48, rating: 3, text: "Atención regular, ayudó parcialmente pero tuve que volver varias veces." }
        ]
    },
    {
        name: "Dra. Laura Fernández",
        spec: "Psicóloga",
        exp: "18 años",
        img: "https://thumbs.dreamstime.com/b/dentist-professional-s-gaze-compassionate-skilled-practitioner-focused-look-conveys-intensity-her-caring-profession-301435864.jpg",
        short: "Especialista en ansiedad y estrés.",
        desc: "Psicóloga clínica especializada en terapia cognitivo conductual.",
        location: "Centro de Psicología",
        comments: [
            { name: "Valeria Gómez", age: 32, rating: 5, text: "Gran terapeuta, me ayudó a manejar mi ansiedad de forma efectiva con sesiones prácticas." },
            { name: "Tomás Ruiz", age: 29, rating: 4, text: "Buena profesional, aunque las sesiones fueron un poco cortas. Me sentí mejor." },
            { name: "Isabel Castro", age: 45, rating: 1, text: "No conecté con su método, no me ayudó y perdí tiempo." },
            { name: "Fernando Díaz", age: 38, rating: 5, text: "Excelente, changed my life with her guidance on stress management." },
            { name: "Raquel Silva", age: 50, rating: 3, text: "Ayudó en parte, pero esperaba más herramientas personalizadas." },
            { name: "Óscar Mendoza", age: 26, rating: 4, text: "Muy empática, las sesiones fueron útiles para mi depresión." }
        ]
    }
];

// Generar 12 doctores adicionales
const specs = ["Cardiólogo", "Pediatra", "Dermatólogo", "Psicólogo", "Neurólogo", "Ginecólogo", "Traumatólogo"];
const namePrefixes = ['Dr. Juan', 'Dra. Maria', 'Dr. Pedro', 'Dra. Luisa', 'Dr. Miguel', 'Dra. Carmen', 'Dr. Antonio'];
const locations = ['Hospital Ángeles CDMX', 'Clínica Infantil México', 'Dermacenter', 'Centro de Psicología', 'Hospital General', 'Clínica Especializada', 'Centro Médico ABC'];
const doctorImages = [
    "https://www.keckmedicine.org/wp-content/uploads/2024/09/Mack-William_01a_online.jpg",
    "https://www.datocms-assets.com/21281/1726587381-cyclematters-dr-kerry-nc2.jpg?auto=compress%2Cformat&q=75&w=900",
    "https://www.orthobethesda.com/wp-content/uploads/2020/05/IMG_3258-scaled-e1610479406335-1024x683.jpg",
    "https://content.presspage.com/uploads/2110/1920_aakriti-gupta-md-cedars-sinai.jpeg?16688",
    "https://thumbs.dreamstime.com/b/medicine-healtcare-pediatry-people-concept-happy-doctor-pediatrician-holding-baby-medical-exam-clinic-100666872.jpg",
    "https://orangecoast.com/wp-content/uploads/2023/05/zena-gabriel-md-dermatologist-horizontal-1024x683.jpg",
    "https://ca-times.brightspotcdn.com/dims4/default/686e5ec/2147483647/strip/true/crop/5820x3056+0+412/resize/1200x630!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.us-east-1.amazonaws.com%2F1d%2F39%2Fffafa2bd43a0ae1b1fe35227eef8%2F1534224-sci-1215-psychiatrist-gilberg-rcg-148.jpg",
    "https://ysm-res.cloudinary.com/image/upload/ar_16:9,c_fill,dpr_3.0,f_auto,g_faces:auto,q_auto:eco,w_500/v1/yms/prod/2e70b83a-814b-40d8-8a30-fb49455d379e",
    "https://www.rmany.com/media/pages/our-team/physicians/dr-hernandez-nieto/fdfa856acb-1729794594/carlos_hernandez-hero.jpg",
    "https://cf-images.us-east-1.prod.boltdns.net/v1/jit/1009789292001/40ffce5b-a785-4213-ae3e-5f43423572d4/main/1280x720/34s485ms/match/image.jpg",
    "https://cdn.castleconnolly.com/dims4/default/0d30283/2147483647/strip/true/crop/2048x1536+0+0/resize/840x630!/quality/90/?url=http%3A%2F%2Fcastle-connolly-brightspot.s3.us-east-1.amazonaws.com%2F94%2F6d%2F6f239f72471fab698cb2f96fd362%2Fspotlight-header-images-77.png"
];

for (let i = 5; i <= 16; i++) {
    const specIndex = (i - 1) % specs.length;
    const nameIndex = (i - 1) % namePrefixes.length;
    doctors.push({
        name: namePrefixes[nameIndex] + " " + ['Pérez', 'García', 'Hernández', 'López', 'Martínez', 'Rodríguez', 'Sánchez'][specIndex],
        spec: specs[specIndex],
        exp: Math.floor(Math.random() * 15 + 5) + " años",
        img: doctorImages[(i - 5) % doctorImages.length],
        short: `Especialista en ${specs[specIndex].toLowerCase()} con enfoque personalizado.`,
        desc: `Experto en el manejo de casos complejos en ${specs[specIndex].toLowerCase()}, con énfasis en prevención y tratamiento avanzado.`,
        location: locations[specIndex],
        comments: [
            { name: "Juan Pérez", age: 45, rating: 5, text: "Excelente atención, me diagnosticó rápidamente y el tratamiento funcionó a la primera. Muy recomendado para problemas cardíacos." },
            { name: "Ana García", age: 30, rating: 4, text: "Muy empática, ayudó a mi hijo con su condición. El seguimiento fue bueno, aunque la espera fue larga." },
            { name: "Diego Morales", age: 40, rating: 2, text: "No resolví mi problema, el tratamiento no fue efectivo y sentí que no escuchó mis preocupaciones." },
            { name: "María López", age: 38, rating: 5, text: "Profesional excepcional, me guió paso a paso y ahora me siento mucho mejor." },
            { name: "Luis Rodríguez", age: 52, rating: 3, text: "Atención decente, pero podría mejorar en explicación. Ayudó parcialmente." },
            { name: "Carmen Ruiz", age: 41, rating: 1, text: "No recomiendo, la consulta fue apresurada y no vi mejoras en mi salud." }
        ]
    });
}