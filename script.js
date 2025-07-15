// Datos completos de la malla
const mallaData = {
    carrera: "Medicina (OS)",
    universidad: "UACh",
    totalAnios: 7,
    semestresPorAnio: 2,
    asignaturas: [
        // Año 1
        {id: "CIDI080", nombre: "Inglés para la salud I", anio: 1, semestre: 1, prerrequisitos: []},
        {id: "DYRE060", nombre: "Educación física y salud", anio: 1, semestre: 1, prerrequisitos: []},
        {id: "ESME001", nombre: "Introducción a los estudios médicos y primeros auxilios", anio: 1, semestre: 1, prerrequisitos: []},
        {id: "QUIM020", nombre: "Biología humana I: Bases biofísicas y moleculares", anio: 1, semestre: 1, prerrequisitos: []},
        {id: "ESME115", nombre: "Biología humana II: Bases estructurales y funcionales", anio: 1, semestre: 2, prerrequisitos: ["ESME001"]},
        
        // Año 2
        {id: "ESME125", nombre: "Biología humana III: Bases bioquímicas, inmunológicas y farmacológicas", anio: 2, semestre: 1, prerrequisitos: ["ESME115"]},
        {id: "PEDI130", nombre: "Haciendo salud", anio: 2, semestre: 1, prerrequisitos: []},
        {id: "PSIQ134", nombre: "Psicoantropología médica", anio: 2, semestre: 1, prerrequisitos: []},
        {id: "SALP132", nombre: "Introducción a la salud pública", anio: 2, semestre: 1, prerrequisitos: []},
        {id: "ESME240", nombre: "Neurociencias", anio: 2, semestre: 1, prerrequisitos: ["ESME115"]},
        {id: "ESME120", nombre: "Agresión y respuesta", anio: 2, semestre: 2, prerrequisitos: ["ESME125"]},
        {id: "ESME140", nombre: "Fisiopatología de sistemas integrados I: Endocrino, reproductor, locomotor, digestivo", anio: 2, semestre: 2, prerrequisitos: ["ESME125"]},
        {id: "SALP142", nombre: "Salud pública aplicada", anio: 2, semestre: 2, prerrequisitos: ["SALP132"]},
        
        // Año 3
        {id: "ESME133", nombre: "Respuesta orgánica multisistémica", anio: 3, semestre: 1, prerrequisitos: ["ESME120", "ESME240"]},
        {id: "ESME155", nombre: "Fisiopatología de sistemas integrados II: Renal, respiratorio, cardiovascular", anio: 3, semestre: 1, prerrequisitos: ["ESME120", "ESME140", "ESME240"]},
        {id: "HIPA121", nombre: "Patología molecular", anio: 3, semestre: 1, prerrequisitos: ["ESME125"]},
        {id: "MEDI155", nombre: "Semiología médica integrada", anio: 3, semestre: 1, prerrequisitos: ["DYRE060", "CIDI080", "ESME001", "ESME120", "ESME115", "ESME125", "ESME140", "PEDI130", "SALP132", "ESME240", "PSIQ134", "SALP142"]},
        {id: "PSIQ135", nombre: "Bioética I", anio: 3, semestre: 1, prerrequisitos: []},
        {id: "SALP192", nombre: "Investigación epidemiológica aplicada", anio: 3, semestre: 1, prerrequisitos: ["SALP142"]},
        {id: "CCOS252", nombre: "Clínica médica I", anio: 3, semestre: 2, prerrequisitos: ["ESME155", "HIPA121", "ESME133", "MEDI155"]},
        {id: "CCOS261", nombre: "Medicina familiar y comunitaria", anio: 3, semestre: 2, prerrequisitos: ["SALP192"]},
        
        // Año 4
        {id: "CCOS254", nombre: "Clínica médica II", anio: 4, semestre: 1, prerrequisitos: ["CCOS252"]},
        {id: "CCOS266", nombre: "Otorrinolaringología", anio: 4, semestre: 1, prerrequisitos: ["CCOS252"]},
        {id: "CCOS268", nombre: "Oftalmología", anio: 4, semestre: 1, prerrequisitos: ["CCOS252"]},
        {id: "CCOS172", nombre: "Antropología jurídico penal", anio: 4, semestre: 2, prerrequisitos: []},
        {id: "CCOS259", nombre: "Cirugía general y de urgencias", anio: 4, semestre: 2, prerrequisitos: ["CCOS254"]},
        {id: "CCOS262", nombre: "Neurología y neurocirugía", anio: 4, semestre: 2, prerrequisitos: ["CCOS254"]},
        {id: "CCOS263", nombre: "Políticas y gestión de servicios de salud", anio: 4, semestre: 2, prerrequisitos: ["CCOS261"]},
        {id: "CCOS265", nombre: "Bioética II", anio: 4, semestre: 2, prerrequisitos: ["PSIQ135"]},
        
        // Año 5
        {id: "CCOS240", nombre: "Psicopatología y psiquiatría I", anio: 5, semestre: 1, prerrequisitos: ["CCOS254", "CCOS262"]},
        {id: "CCOS246", nombre: "Patología del aparato locomotor", anio: 5, semestre: 1, prerrequisitos: ["CCOS259", "CCOS262"]},
        {id: "CCOS248", nombre: "Pediatría", anio: 5, semestre: 1, prerrequisitos: ["CCOS259", "CCOS262"]},
        {id: "CCOS250", nombre: "Cirugía infantil", anio: 5, semestre: 1, prerrequisitos: ["CCOS259", "CCOS262"]},
        {id: "CCOS264", nombre: "Dermatología", anio: 5, semestre: 1, prerrequisitos: ["CCOS254"]},
        {id: "CCOS267", nombre: "Bioética III", anio: 5, semestre: 1, prerrequisitos: ["CCOS265"]},
        {id: "CCOS242", nombre: "Psicopatología y psiquiatría II", anio: 5, semestre: 2, prerrequisitos: ["CCOS240"]},
        {id: "CCOS256", nombre: "Medicina legal", anio: 5, semestre: 2, prerrequisitos: ["CCOS254"]},
        {id: "CCOS258", nombre: "Urología", anio: 5, semestre: 2, prerrequisitos: ["CCOS259"]},
        {id: "CCOS260", nombre: "Obstetricia y ginecología", anio: 5, semestre: 2, prerrequisitos: ["CCOS254"]},
        {id: "CCOS269", nombre: "Introducción al internado", anio: 5, semestre: 2, prerrequisitos: []}, // Simplificado para demo
        
        // Año 6
        {id: "CCOS255", nombre: "Internado de urología", anio: 6, semestre: 1, prerrequisitos: []},
        {id: "CCOS272", nombre: "Internado de ortopedia y traumatología", anio: 6, semestre: 1, prerrequisitos: []},
        {id: "CCOS289", nombre: "Internado de cirugía", anio: 6, semestre: 1, prerrequisitos: []},
        {id: "CCOS292", nombre: "Pregrado cirugía", anio: 6, semestre: 1, prerrequisitos: []},
        {id: "ESME299", nombre: "Internado de atención primaria y administración en salud", anio: 6, semestre: 1, prerrequisitos: []},
        {id: "CCOS276", nombre: "Internado de obstetricia y ginecología", anio: 6, semestre: 2, prerrequisitos: []},
        {id: "CCOS282", nombre: "Internado de dermatología", anio: 6, semestre: 2, prerrequisitos: []},
        {id: "CCOS284", nombre: "Internado de oncología y cuidados paliativos", anio: 6, semestre: 2, prerrequisitos: []},
        {id: "CCOS285", nombre: "Internado de otorrinolaringología", anio: 6, semestre: 2, prerrequisitos: []},
        {id: "CCOS286", nombre: "Internado de oftalmología", anio: 6, semestre: 2, prerrequisitos: []},
        {id: "CCOS287", nombre: "Internado de anestesia", anio: 6, semestre: 2, prerrequisitos: []},
        {id: "CCOS291", nombre: "Pregrado obstetricia y ginecología", anio: 6, semestre: 2, prerrequisitos: []},
        
        // Año 7
        {id: "CCOS278", nombre: "Internado de neurología y neurocirugía", anio: 7, semestre: 1, prerrequisitos: []},
        {id: "CCOS280", nombre: "Internado de medicina interna", anio: 7, semestre: 1, prerrequisitos: []},
        {id: "CCOS290", nombre: "Pregrado de medicina interna", anio: 7, semestre: 1, prerrequisitos: []},
        {id: "CCOS270", nombre: "Internado de psiquiatría", anio: 7, semestre: 2, prerrequisitos: []},
        {id: "CCOS274", nombre: "Internado de pediatría", anio: 7, semestre: 2, prerrequisitos: []},
        {id: "CCOS293", nombre: "Pregrado pediatría", anio: 7, semestre: 2, prerrequisitos: []},
        {id: "ELECT01", nombre: "Optativo 1", anio: 7, semestre: 2, prerrequisitos: []}
    ]
};

// Estado de los ramos aprobados
let aprobados = JSON.parse(localStorage.getItem('aprobados')) || {};

// Función para guardar el estado
function guardarEstado() {
    localStorage.setItem('aprobados', JSON.stringify(aprobados));
}

// Función para verificar prerrequisitos
function cumplePrerequisitos(ramo) {
    return ramo.prerrequisitos.every(id => aprobados[id] === true);
}

// Función para renderizar la malla
function renderMalla() {
    const container = document.getElementById('malla-container');
    container.innerHTML = '';

    // Agrupar ramos por año
    const ramosPorAnio = {};
    for (let anio = 1; anio <= mallaData.totalAnios; anio++) {
        ramosPorAnio[anio] = { 1: [], 2: [] };
    }

    mallaData.asignaturas.forEach(ramo => {
        if (ramosPorAnio[ramo.anio]) {
            ramosPorAnio[ramo.anio][ramo.semestre].push(ramo);
        }
    });

    // Crear contenedores por año
    for (let anio = 1; anio <= mallaData.totalAnios; anio++) {
        const anioDiv = document.createElement('div');
        anioDiv.className = 'anio-container';
        anioDiv.innerHTML = `<h2 class="anio-title">Año ${anio}</h2>`;

        // Para cada semestre (1 y 2)
        for (let semestre = 1; semestre <= 2; semestre++) {
            const semestreRamos = ramosPorAnio[anio][semestre];
            if (semestreRamos.length === 0) continue;

            const semestreDiv = document.createElement('div');
            semestreDiv.className = 'semestre-container';
            semestreDiv.innerHTML = `<h3 class="semestre-title">Semestre ${(anio-1)*2 + semestre}</h3>`;
            const ramosContainer = document.createElement('div');
            ramosContainer.className = 'ramos-container';

            semestreRamos.forEach(ramo => {
                const ramoElement = document.createElement('div');
                ramoElement.className = 'ramo';
                ramoElement.dataset.id = ramo.id;
                
                // Comprobar estado
                if (aprobados[ramo.id]) {
                    ramoElement.classList.add('aprobado');
                } else if (ramo.prerrequisitos.length > 0 && !cumplePrerequisitos(ramo)) {
                    ramoElement.classList.add('bloqueado');
                }
                
                ramoElement.innerHTML = `
                    <div class="ramo-id">${ramo.id}</div>
                    <div class="ramo-nombre">${ramo.nombre}</div>
                `;
                
                // Añadir evento click si no está bloqueado
                if (!ramoElement.classList.contains('bloqueado')) {
                    ramoElement.addEventListener('click', () => {
                        aprobados[ramo.id] = !aprobados[ramo.id];
                        guardarEstado();
                        renderMalla();
                    });
                }
                
                ramosContainer.appendChild(ramoElement);
            });
            
            semestreDiv.appendChild(ramosContainer);
            anioDiv.appendChild(semestreDiv);
        }
        
        container.appendChild(anioDiv);
    }
}

// Inicializar
document.addEventListener('DOMContentLoaded', renderMalla);
