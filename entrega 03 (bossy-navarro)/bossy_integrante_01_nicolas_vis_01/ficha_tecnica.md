# Ficha técnica de la visualización de Nicolás 

## Nombre del archivo
`dragrace-database-CLEAN-FINAL-.xlsx`

## Características generales

- **Origen**: Base consolidada a partir de datos abiertos encontrado en la wiki del show *RuPaul’s Drag Race*.
- **Formato**: Excel (`.xlsx`) procesado como si fuera CSV para efectos de análisis con `pandas`.
- **Unidades de análisis**: Cada fila representa a una drag queen participante en una temporada del show.
- **Cobertura temporal**: Múltiples temporadas de *RuPaul’s Drag Race* ordenadas desde la primera hasta la última (la 17)
- **Número aproximado de filas**: ~230
- **Número de columnas (variables)**: ~33
- **Idioma**: Inglés con nombres de columnas uniformes (algunas variables en minúsculas con guiones).

---

## Variables incorporadas

| Variable            | Descripción                                                                 |
|---------------------|-----------------------------------------------------------------------------|
| `contestant`             | Nombre de la concursante                                                    |
| `season`            | Temporada del programa en la que participó                                  |
| `finale`            | Resultado final de la reina (e.g., WINNER, RUNNER-UP, ELIMINATED)           |
| `acting`, `acting-2`| Resultado en desafíos de actuación en diferentes episodios                  |
| `improv`, `improv-2`| Resultado en desafíos de improvisación                                      |
| `design`, `design-2`, `design-3` | Resultados en desafíos de diseño y confección                    |
| `snatch-game`       | Resultado en el desafío icónico de imitaciones de celebridades              |
| `runway`            | Evaluación en pasarelas destacadas                                          |
| `rusical`, `rusical-2` | Resultados en musicales drag                                              |
| `main-ball`, `ball-2` | Resultados en desafíos de ball (con múltiples looks)                       |
| `advert`, `advert-2`| Resultados en desafíos de publicidad o comerciales ficticios                |
| `girl-groups`       | Evaluación en desafíos de grupos musicales                                  |
| `stand-up`, `singing`, `singing-2` | Evaluación en desafíos de comedia o canto                     |
| `makeover`          | Resultado en el makeover challenge                                          |
| `choreo`            | Evaluación en desafíos de coreografía o baile                               |
| `talent-show`       | Resultado en desafío de talento                                             |
| `lip-sync`     | Número de *lip syncs* ganados por la participante                           |
| `bottom`           | Cantidad de veces en el bottom                               
| `age`               | Edad de la concursante durante la competencia                          

---

## Observaciones

- Algunas variables como `improv-2` o `design-3` corresponden a repeticiones del mismo tipo de desafío en una misma temporada, lo que requiere una agrupación lógica para el análisis.
- Existen valores vacíos (`NaN`) en columnas correspondientes a desafíos no presentes en todas las temporadas.
- Las categorías de resultado (`WIN`, `HIGH`, `SAFE`, `LOW`, `BTM`, `ELIM`) están estandarizadas en mayúsculas.
- No todas las columnas están directamente utilizadas en las visualizaciones, pero la base permite una más capacidad analítica.

---

## Utilidad de la base

Esta base de datos permite explorar tendencias, patrones y correlaciones entre desempeño en desafíos específicos y el éxito en la competencia, respondiendo así directamente a las hipótesis del proyecto periodístico.
