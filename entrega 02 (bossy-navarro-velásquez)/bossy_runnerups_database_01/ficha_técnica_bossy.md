# Ficha Técnica —  *Runner-Ups de RuPaul’s Drag Race*

## Fuente de datos  
Los datos fueron recopilados manualmente desde la [Wikia de RuPaul’s Drag Race](https://rupaulsdragrace.fandom.com), una enciclopedia colaborativa en línea donde se encuentra información detallada sobre cada temporada, desafío, concursante y resultado del programa.

## Metodología de construcción de la base  
La base fue construida a partir de un proceso de verificación manual. Para cada temporada del programa principal (*RuPaul’s Drag Race*, versión original de EE.UU.), se identificó a la *runner-up* (segundo lugar). Luego, se recopilaron una serie de variables clave de cada concursante directamente desde los datos disponibles, contrastando y validandolos con múltiples entradas (biografía del concursante, episodio final de la temporada, resúmenes de desafíos, etc.).  
Una vez recopilada la información, esta fue organizada y normalizada en una hoja de cálculo a través de Excel, que luego fue exportada como archivo `.csv`. Se realizaron procesos de limpieza para corregir errores, normalizar nombres y asegurar la consistencia en la codificación.

##  Alcance de los datos  
- El conjunto abarca a las *runner-ups* de todas las temporadas numeradas de *RuPaul’s Drag Race* (temporadas 1 a 17).
- No incluye datos de versiones internacionales ni los shows especiales.
- Cada fila representa a una *runner-up* individual.

## Características de los datos  
- **Formato**: CSV (valores separados por comas)  
- **Total de registros**: _(completar con la cantidad exacta)_  
- **Total de variables**: _(completar con el número de columnas)_  
- No se incluyen datos personales sensibles; toda la información es de carácter público.

##  Variables incorporadas

| Variable | Descripción |
|---------|-------------|
| `runner_up_drag_name` | Nombre drag de la persona o las personas que obtuvo/obtuvieron el segundo lugar. |
| `season` | Temporada en la que participó. |
| `city` | Ciudad de origen mencionada en el programa. |
| `maxi_challenges_won` | Cantidad de desafíos principales ganados durante la temporada. |
| `times_in_bottom` | Número total de veces que estuvo en el *bottom*. |
| `times_in_bottom_for_elimination` | Número de veces que estuvo en el *bottom* y tuvo que hacer *Lip Sync for Your Life*. |
| `times_as_team_captain` | Número de veces que fue capitana de equipo en desafíos grupales. |
| `lip_sync_lost` | Número de *Lip Syncs* que perdió (usado como medida para inferir victorias también). |
| `lip_sync_won` | Número de *Lip Syncs* que ganó. 

##  Detalles 
- Al tratarse de una base construida desde una fuente colaborativa, algunos datos pueden variar dependiendo de cómo se codifiquen en la Wikia. Se priorizó la interpretación más directa según lo mostrado en el programa.
- Algunas variables podrían tener leves sesgos de interpretación (por ejemplo, quién fue o no considerado team captain), debido a la falta de estandarización explícita en el show.
- La base puede expandirse a otros concursos (*All Stars*, versiones internacionales, etc.)
