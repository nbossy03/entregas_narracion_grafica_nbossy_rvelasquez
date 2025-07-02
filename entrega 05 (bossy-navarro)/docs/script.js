// Botón de compartir
function sharePage() {
  const url = window.location.href;
  navigator.clipboard.writeText(url)
    .then(() => {
      alert("¡Enlace copiado al portapapeles!");
    })
    .catch(err => {
      alert("Error al copiar el enlace");
      console.error(err);
    });
}

// Ajuste dinámico para Datawrapper
(function () {
  "use strict";
  window.addEventListener("message", function (e) {
    if (e.data["datawrapper-height"] !== undefined) {
      const iframes = document.querySelectorAll("iframe");
      for (const key in e.data["datawrapper-height"]) {
        for (let i = 0; i < iframes.length; i++) {
          if (iframes[i].contentWindow === e.source) {
            iframes[i].style.height = e.data["datawrapper-height"][key] + "px";
          }
        }
      }
    }
  });
})();

// Abrir sección colapsable de participantes
document.addEventListener("DOMContentLoaded", function () {
  const link = document.querySelector('a[href="#participantes"]');
  const participantes = document.querySelector("#participantes");

  link.addEventListener("click", function (e) {
    e.preventDefault();
    participantes.classList.add("open");
    setTimeout(() => {
      participantes.scrollIntoView({ behavior: "smooth" });
    }, 300);
  });
});

// Vega Lite embed para el gráfico de desafíos ganados
const spec = {
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 700,
  "height": 400,
  "title": "Desafíos más ganados por las ganadoras de RuPaul's Drag Race",
  "data": {
    "values": [
      {"challenge": "acting", "win_count": 4},
      {"challenge": "acting-2", "win_count": 1},
      {"challenge": "advert", "win_count": 5},
      {"challenge": "advert-2", "win_count": 0},
      {"challenge": "design", "win_count": 2},
      {"challenge": "design-2", "win_count": 2},
      {"challenge": "design-3", "win_count": 1},
      {"challenge": "improv", "win_count": 4},
      {"challenge": "improv-2", "win_count": 1},
      {"challenge": "snatch-game", "win_count": 3},
      {"challenge": "stand-up", "win_count": 0},
      {"challenge": "rusical", "win_count": 0},
      {"challenge": "rusical-2", "win_count": 0},
      {"challenge": "girl-groups", "win_count": 0},
      {"challenge": "runway", "win_count": 1},
      {"challenge": "singing", "win_count": 1},
      {"challenge": "singing-2", "win_count": 0},
      {"challenge": "main-ball", "win_count": 5},
      {"challenge": "ball-2", "win_count": 0},
      {"challenge": "choreo", "win_count": 0},
      {"challenge": "makeover", "win_count": 2},
      {"challenge": "talent-show", "win_count": 0}
    ]
  },
  "mark": "bar",
  "encoding": {
    "x": {
      "field": "challenge",
      "type": "nominal",
      "sort": "-y",
      "title": "Tipo de desafío"
    },
    "y": {
      "field": "win_count",
      "type": "quantitative",
      "title": "Veces ganado por ganadoras"
    },
    "tooltip": [
      {"field": "challenge", "type": "nominal"},
      {"field": "win_count", "type": "quantitative"}
    ]
  }
};

vegaEmbed('#vis_02', spec).catch(console.error);
