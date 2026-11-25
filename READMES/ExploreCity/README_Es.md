# ExploreCity

Aplicación Flutter (Material 3) para **descubrir, filtrar y comparar ciudades** según tus preferencias: demografía, clima, seguridad, economía, servicios y turismo.

Pantalla principal con un hero nocturno, buscador y filtros → ficha de detalle de cada ciudad → comparador paralelo de 2 a 4 ciudades.

**Producción:** https://explorecity.web.app

## Funcionalidades

- **Buscador** de ciudades por nombre o país, con opción para borrar rápidamente.
- **Puntuación general de 0 a 100** calculada en la app a partir de las métricas normalizadas por percentiles, con subtotales por categoría en la ficha de detalle. Cinco perfiles de preferencias (Equilibrio, Presupuesto, Calidad de vida, Viaje y Familia) ajustan los pesos desde un menú desplegable en la cabecera de resultados. La lista se ordena de mayor a menor puntuación y muestra una insignia para cada ciudad.
- **14 filtros** organizados en 6 secciones (demografía, medio ambiente, seguridad, economía, servicios, cultura y turismo) en un panel desplegable.
- **Ficha de detalle** de cada ciudad: población, temperatura, salario, 7 secciones de métricas, lugares de interés y ejemplos de alojamiento.
- **Comparador de 2 a 4 ciudades** con las métricas en paralelo y el mejor valor de cada fila resaltado en verde.
- **50 idiomas** con selector en la cabecera y preferencia guardada en el dispositivo.
- **Contacto e informes de datos**: formulario para enviar mensajes e informar de errores en los datos.

## Puntuación de las ciudades

Cada ciudad recibe una **puntuación general de 0 a 100** y subtotales por categoría, calculados en la app a partir de las métricas de cada ciudad. El cálculo es automático: al añadir o modificar ciudades, los percentiles y las puntuaciones se vuelven a calcular al cargar los datos.

### Normalización

- Cada métrica se convierte en un **rango percentil** (0–1) dentro del conjunto de ciudades cargadas. Así, los valores extremos (por ejemplo, un área mal importada) no aplanan el resto.
- La puntuación final se reescala para cubrir todo el rango de 0 a 100: la mejor ciudad obtiene 100 y la peor, 0.
- Los subtotales de cada categoría se reescalan de forma independiente para que las barras puedan compararse entre sí.
- Si una ciudad no tiene un dato, la métrica se ignora para esa ciudad y el peso se reparte entre las métricas disponibles. Un campo ausente se distingue de un cero válido (transporte gratuito, 0 °C).

### Categorías

`demographics`, `safety`, `economy`, `services`, `environment` e `interest`. La ficha de detalle solo muestra las categorías con peso en el perfil activo.

### Perfiles y pesos

El perfil se selecciona desde el menú desplegable de la cabecera de resultados. **Equilibrio** es el perfil predeterminado y está orientado a vivir en la ciudad.

| Métrica | Equilibrio | Presupuesto | Calidad de vida | Viaje | Familia |
|---|---:|---:|---:|---:|---:|
| `safetyIndex` ↑ | 16 | 10 | 18 | 14 | 18 |
| `englishLevel` ↑ | 5 | 4 | 6 | 6 | 6 |
| `costOfLivingIndex` ↓ | 11 | 20 | 5 | 4 | 12 |
| `avgNetSalaryEur` ↑ | 11 | 8 | 5 | 0 | 8 |
| `avgRentEur` ↓ | 7 | 18 | 3 | 3 | 10 |
| `transportCostEur` ↓ | 5 | 8 | 4 | 8 | 5 |
| `accommodationMidRangeEur` ↓ | 5 | 10 | 2 | 16 | 3 |
| `healthcareIndex` ↑ | 14 | 6 | 20 | 3 | 16 |
| `internetMbps` ↑ | 9 | 6 | 12 | 3 | 6 |
| `aqi` ↓ | 9 | 6 | 15 | 5 | 8 |
| `sunHoursPerYear` ↑ | 3 | 0 | 4 | 8 | 2 |
| `touristAttractions` ↑ | 3 | 2 | 2 | 14 | 1 |
| `unescoSites` ↑ | 2 | 1 | 2 | 12 | 1 |
| `areaKm2` ↑ | 0 | 0 | 0 | 0 | 2 |
| `density` ↓ | 0 | 0 | 0 | 0 | 1 |
| `avgTemperature` (ideal: 18–24 °C) | 0 | 1 | 2 | 4 | 1 |
| **Total** | **100** | **100** | **100** | **100** | **100** |

↑ más es mejor · ↓ menos es mejor · `avgTemperature` se puntúa según la proximidad al rango ideal, no según «cuanto más calor, mejor».

## Idiomas

50 idiomas con el **catalán como idioma base**.

El idioma se cambia desde el menú desplegable de la cabecera (opción «Idioma del sistema» y 50 idiomas) y se conserva entre sesiones.

## Fuentes de datos

Datos municipales oficiales y Eurostat · Climate-Data.org e IQAir (calidad del aire) · Numbeo (seguridad, coste de vida, alquiler y salario) · EF English Proficiency Index · SalaryExplorer · Ookla Speedtest Global Index (internet) · UNESCO World Heritage Centre y organismos oficiales de turismo · Precios de alojamiento (Booking, Hostelworld y Numbeo).

## Créditos

Proyecto de **VirgiliApps** — titular: Oriol Virgili Garrigós.
