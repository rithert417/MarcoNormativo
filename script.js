document.addEventListener("DOMContentLoaded", function () {
    // 📌 CÓDIGO PARA LA LÍNEA DE TIEMPO INTERACTIVA
    let timelineContainer = document.getElementById("timeline");

    if (timelineContainer) {
        timelineContainer.innerHTML = ""; // Limpiar el contenido anterior

        // Lista de normas con sus respectivos años
        const normasPorAnio = {
            "1902": ["Codigo-de-Aguas-de-1902.pdf"],
            "1969": ["DecretoLey_17752.pdf"],
            "1990": ["DL_613.pdf"],
            "1992": ["DecretoLey_25965.pdf"],
            "1994": ["Ley_26338.pdf"],
            "1997": ["RD_008_97_EM.pdf"],
            "2001": ["DS_017_2001_PCM.pdf"],
            "2002": ["DS_003_2002_PRODUCE.pdf"],
            "2005": ["DS_023_2005_VIVIENDA.pdf", "LEY_28611.pdf"],
            "2006": ["LEY_28870.pdf"],
            "2008": ["DS_021_2008_AG.pdf", "DS_037_2008_PCM.pdf"],
            "2009": ["DS_021_2009_VIVIENDA.pdf", "LEY_29338.pdf"],
            "2010": ["DS_001_2010_AG.pdf", "DS_003_2010.pdf", "DS_010_2010_MINAM.pdf", "DS_031_2010_SA.pdf"],
            "2011": ["DS_003_2011_VIVIENDA.pdf"],
            "2013": ["RM_273_2013_VIVIENDA.pdf"],
            "2015": ["DS_001_2015_VIVIENDA.pdf"],
            "2016": ["DL_1280.pdf", "DL_1284.pdf", "DL_1285.pdf", "RJ_010_2016_ANA.pdf"],
            "2017": ["DS_004_2017_MINAM.pdf", "DS_007_2017_VIVIENDA.pdf", "DS_019_2017_VIVIENDA.pdf", "RM_431_2017_VIVIENDA.pdf"],
            "2018": ["DS_010_2018_MINAM.pdf"],
            "2019": ["RM_235_2019_MINAM.pdf"],
            "2020": ["RJ_079_2020_ANA.pdf"],
            "2021": ["RM_399_2021_VIVIENDA.pdf"],
            "2024": ["DS_001_2024_MIDAGRI.pdf"]
        };

        // Generar la línea de tiempo
        Object.keys(normasPorAnio).sort().forEach(year => {
            let yearBlock = document.createElement("div");
            yearBlock.classList.add("timeline-year");

            let yearTitle = document.createElement("h3");
            yearTitle.textContent = year;
            yearTitle.classList.add("year-title");
            yearBlock.appendChild(yearTitle);

            let list = document.createElement("ul");
            list.classList.add("normas-list");
            list.style.display = "none";

            normasPorAnio[year].forEach(file => {
                let listItem = document.createElement("li");
                let link = document.createElement("a");
                link.href = `normas/${file}`;
                link.textContent = file.replace(/_/g, " ").replace(".pdf", "");
                link.target = "_blank";
                listItem.appendChild(link);
                list.appendChild(listItem);
            });

            yearBlock.appendChild(list);
            timelineContainer.appendChild(yearBlock);

            // Evento para expandir/cerrar normas al hacer clic en el año
            yearTitle.addEventListener("click", function () {
                list.style.display = (list.style.display === "none") ? "block" : "none";
            });
        });
    } else {
        console.error("El contenedor 'timeline' no se encontró en el HTML.");
    }
});
