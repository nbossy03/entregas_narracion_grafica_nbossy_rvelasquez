# Documentación técnica del trabajo realizado

## Visualizaciones desarrolladas

En esta entrega se desarrollaron dos visualizaciones principales:

1. **Porcentaje de desempeño destacado (WIN o HIGH) por tipo de desafío entre las ganadoras de RuPaul’s Drag Race.**
2. **Cantidad de veces que un tipo de desafío fue ganado (WIN) por ganadoras del show.**

Ambas visualizaciones se realizaron utilizando Python y la biblioteca Altair, a partir de una base de datos consolidada en formato Excel, posteriormente convertida y procesada como si fuera un CSV para su tratamiento analítico.

---

## Proceso de visualización: pasos y decisiones tomadas

1. **Carga y filtrado de los datos**  
   Se utilizó pandas para leer el archivo dragrace-database-CLEAN-FINAL-.xlsx. Se filtraron los datos para quedarnos solo con las concursantes marcadas como "WINNER" en la columna *finale*.

2. **Definición de desafíos**  
   Se seleccionaron columnas representativas de distintos tipos de desafíos recurrentes en el programa, como acting, improv, snatch-game, runway, design, entre otros.

3. **Cálculo de métricas**  
   - Para la primera visualización se calculó el porcentaje de veces que una ganadora obtuvo un resultado "WIN" o "HIGH" en cada tipo de desafío.
   - Para la segunda visualización se contó cuántas veces un tipo de desafío fue ganado ("WIN") por las ganadoras.

4. **Visualización con Altair**  
   Se empleó la biblioteca `Altair` para construir gráficos de barras. Ambos incluyen etiquetas, títulos y tooltips para mejorar la legibilidad y comprensión visual.

5. **Exportación y uso**  
   Cada gráfico fue exportado en formato HTML para su visualización externa y después pasado a jpg.

---

## Base de datos utilizada

Se utilizó el archivo `dragrace-database-CLEAN-FINAL-.xlsx`, el cual contiene el desempeño por episodio de cada concursante de todas las temporadas analizadas. (El mismo archivo en csv. se encuentra subido aquí).

---
## Preguntas que responde nuestra visualización

1. **¿Cuáles son los tipos de desafíos donde las ganadoras suelen destacarse (obtener HIGH o WIN)?**
2. **¿Qué tipo de desafíos fueron ganados más veces por las campeonas del programa?**

Estas preguntas permiten no solo identificar patrones competitivos, sino también trazar perfiles de éxito dentro del formato del programa. Los gráficos ayudan a respaldar la hipótesis de que ciertas características comunes, como el buen desempeño en runway o desafíos actorales, pueden predecir el triunfo final.

