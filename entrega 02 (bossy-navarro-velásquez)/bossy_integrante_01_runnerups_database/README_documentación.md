# README - Documentación de la limpieza de datos

##  El proceso como tal: 

El objetivo de este proyecto fue construir una base de datos limpia y estructurada a partir de información pública recopilada sobre las concursantes que obtuvieron el segundo lugar ("runner-up") en cada temporada de la versión original de *RuPaul's Drag Race* (EE.UU.). A continuación se detalla el proceso seguido para garantizar la calidad, la transparencia y la replicabilidad del trabajo:

### 1) Definición del universo
Se definió que el universo de análisis estaría compuesto exclusivamente por las "runner-ups" de cada temporada numerada del programa *RuPaul's Drag Race*, excluyendo versiones internacionales y *All Stars*.

### 2) Recolección de datos
Se utilizó la Wikia oficial de *RuPaul's Drag Race* (https://rupaulsdragrace.fandom.com) como fuente principal. La recolección de datos fue manual, registrando para cada runner-up información clave como:

- Nombre drag runner up
- Temporada (season)
- Ciudad de origen (city)
- Cantidad de desafíos ganados (maxi challenges won)
- Participaciones en el bottom 2 (times in bottom for elimination)
- Participaciones en el bottom en general (times in bottom)
- Número de veces que actuaron como team captain (times as team captain)
- Cantidad de Lip Syncs perdidos (derivados de su desempeño) (lip sync lost)
- Cantidad de Lip Syncs ganados (lip sync won).

Cada dato fue contrastado con diferentes secciones de la Wikia (perfil del concursante, resumen de la temporada, episodios individuales) para asegurar su veracidad.

### 3) Estandarización
Para asegurar una estructura coherente de datos, se normalizaron todas las entradas:

- Se transformaron las variables categóricas en formatos estandarizados.
- Se evitó el uso de texto libre y se priorizaron valores numéricos para facilitar futuros análisis.

### 4) Limpieza del archivo en Excel
Los datos fueron organizados en una hoja de cálculo y limpiados directamente en Microsoft Excel:
- Se eliminaron filas vacías o con errores.
- Se revisó la coherencia entre valores (por ejemplo, que las ganadoras de Lip Sync no tuvieran Lip Sync losses mayores a 0).
- Se eliminaron columnas no relevantes.

### 5) Exportación a CSV
Una vez completada la limpieza, la base fue exportada en formato `.csv` con codificación UTF-8 desde Excel para asegurar compatibilidad y lectura universal.

### 6) Carga en Google Colab
Para efectos de análisis y visualización, el archivo `.csv` fue cargado en un entorno de Google Colaboratory utilizando Python y la librería `pandas`. Se verificó la correcta lectura del archivo y se visualizaron las primeras filas del DataFrame para asegurar su integridad.

---

##  Fuentes utilizadas

### Fuente principal:
- [Wikia de RuPaul's Drag Race](https://rupaulsdragrace.fandom.com): fuente colaborativa detallada, que contiene información episodio por episodio y perfiles de concursantes. Fue elegida por ser la fuente más completa, organizada y actualizada sobre el programa, con información que no está disponible en fuentes oficiales o IMDb.

Esta fuente fue contrastada internamente, verificando los datos con diversas secciones del sitio.

---

## Preguntas que se pueden responder con la base de datos limpia

1. **¿Cuáles runner-ups ganaron la mayor cantidad de maxi challenges?**  
   A través de una tabla dinámica con `runner_up_drag_name` como fila y `maxi_challenges_won` como valor (suma), se puede responder esta pregunta.

2. **¿Existe una correlación entre ser team captain y llegar al bottom 2?**  
   Con una tabla que cruce `times_as_team_captain` y `times_in_bottom`, es posible explorar si asumir liderazgo tuvo consecuencias negativas o positivas en el desempeño.

3. **¿Cuántas runner-ups llegaron a la final sin haber estado nunca en el bottom?**  
   Filtrando por `times_in_bottom == 0`, se obtiene cuántas finalistas no enfrentaron riesgo de eliminación.

4. **¿Las participantes que ganaron Lip Syncs también fueron team captains?**  
   Filtrando por `lip_sync_losses < times_in_bottom_for_elimination` y `times_as_team_captain > 0`.

5. **¿Existen temporadas donde la runner-up tuvo más victorias en desafíos que la ganadora?** (puede investigarse extendiendo la base con datos de ganadoras)

