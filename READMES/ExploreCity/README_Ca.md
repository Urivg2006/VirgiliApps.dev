# ExploreCity

Aplicació Flutter (Material 3) per **descobrir, filtrar i comparar ciutats** segons les teves preferències: demografia, clima, seguretat, economia, serveis i turisme.

Pantalla principal amb hero nocturn, cercador i filtres → fitxa de detall per ciutat → comparador paral·lel de 2 a 4 ciutats.

**Producció:** https://explorecity.web.app

## Funcionalitats

- **Cercador** de ciutats per nom o país, amb neteja ràpida.
- **Puntuació general 0–100** calculada a l'app a partir de les mètriques amb normalització per percentil, amb subtotals per categoria a la fitxa de detall. Cinc perfils de preferència (Equilibri, Pressupost, Qualitat de vida, Viatge i Família) ajusten els pesos des d'un desplegable a la capçalera de resultats. La llista s'ordena de més a menys puntuació i mostra un badge a cada ciutat.
- **14 filtres** organitzats en 6 seccions (demografia, medi ambient, seguretat, economia, serveis, cultura/turisme) en un panell plegable.
- **Fitxa de detall** per ciutat: població, temperatura, salari, 7 seccions de mètriques, llocs d'interès i exemples d'allotjament.
- **Comparador de 2 a 4 ciutats** amb les mètriques en paral·lel i el millor valor de cada fila ressaltat en verd.
- **50 idiomes** amb selector a la capçalera i preferència guardada al dispositiu.
- **Contacte i report de dades**: formulari per enviar missatges i informar d'errors a les dades.

## Puntuació de ciutats

Cada ciutat rep una **puntuació general de 0 a 100** i uns subtotals per categoria, calculats a l'app a partir de les mètriques de cada ciutat. El càlcul és automàtic: en afegir o modificar ciutats, els percentils i les puntuacions es recalculen en carregar les dades.

### Normalització

- Cada mètrica es converteix en un **rang percentil** (0–1) dins del conjunt de ciutats carregades. Així els valors extrems (per exemple, una àrea mal importada) no aplanen la resta.
- La puntuació final es rescalfa perquè ocupi tot el rang 0–100: la millor ciutat puntua 100 i la pitjor 0.
- Els subtotals de cada categoria es rescalfen de manera independent perquè les barres siguin comparables entre si.
- Si una ciutat no té una dada, la mètrica s'ignora per a ella i el pes es reparteix entre les mètriques disponibles. Un camp absent es distingeix d'un zero legítim (transport gratuït, 0 °C).

### Categories

`demographics`, `safety`, `economy`, `services`, `environment` i `interest`. La fitxa de detall només mostra les categories amb pes en el perfil actiu.

### Perfils i pesos

El perfil es tria des del desplegable de la capçalera de resultats. **Equilibri** és el perfil per defecte i està orientat a viure-hi.

| Mètrica | Equilibri | Pressupost | Qualitat de vida | Viatge | Família |
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
| `avgTemperature` (ideal 18–24 °C) | 0 | 1 | 2 | 4 | 1 |
| **Total** | **100** | **100** | **100** | **100** | **100** |

↑ més és millor · ↓ menys és millor · `avgTemperature` es puntua per proximitat al rang ideal, no per «més calor millor».

## Idiomes

50 idiomes amb el **català com a base**.

L'idioma es canvia des del desplegable de la capçalera (opció «Idioma del sistema» + 50 idiomes) i es conserva entre sessions.

## Fonts de dades

Dades oficials municipals i Eurostat · Climate-Data.org i IQAir (aire) · Numbeo (seguretat, cost de vida, lloguer i salari) · EF English Proficiency Index · SalaryExplorer · Ookla Speedtest Global Index (internet) · UNESCO World Heritage Centre i organismes oficials de turisme · Preus d'allotjament (Booking, Hostelworld, Numbeo).

## Crèdits

Projecte de **VirgiliApps** — titular: Oriol Virgili Garrigós.
