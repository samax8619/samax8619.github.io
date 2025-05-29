document.getElementById("formularioNotas").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita que se recargue la página

    const c1 = parseFloat(document.getElementById("corte1").value);
    const c2 = parseFloat(document.getElementById("corte2").value);
    const c3 = parseFloat(document.getElementById("corte3").value);

    const resultado1 = c1 * 0.3;
    const resultado2 = c2 * 0.3;
    const resultado3 = c3 * 0.4;
    const notaFinal = resultado1 + resultado2 + resultado3;

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <p>Nota final estimada: <strong>${notaFinal.toFixed(2)}</strong></p>
        ${notaFinal >= 2.96 
            ? "<p style='color:green'>¡Felicidades! Con esa nota podrías pasar la materia.</p>" 
            : "<p style='color:red'>Lo siento. Con esa nota no alcanzarías el mínimo para pasar.</p>"
        }
    `;
});
