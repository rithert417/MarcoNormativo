document.addEventListener("DOMContentLoaded", function () {
    const normas = [
        { año: 2020, titulo: "Norma de Calidad del Agua", link: "normas/norma_agua_2020.pdf" },
        { año: 2019, titulo: "Regulación de Emisiones", link: "normas/regulacion_emisiones_2019.pdf" },
        { año: 2018, titulo: "Norma sobre Residuos Sólidos", link: "normas/residuos_2018.pdf" }
    ];

    const timeline = document.getElementById("timeline");
    normas.forEach(norma => {
        const div = document.createElement("div");
        div.innerHTML = `<h3>${norma.año}</h3><p><a href="${norma.link}" target="_blank">${norma.titulo}</a></p>`;
        timeline.appendChild(div);
    });
});
