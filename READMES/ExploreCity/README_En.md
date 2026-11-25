# ExploreCity

A Flutter (Material 3) app to **discover, filter, and compare cities** based on your preferences: demographics, climate, safety, economy, services, and tourism.

Main screen with a nighttime hero, search, and filters → city detail page → side-by-side comparison of 2 to 4 cities.

**Production:** https://explorecity.web.app

## Features

- **City search** by name or country, with a quick clear option.
- **Overall score from 0 to 100**, calculated in the app from percentile-normalized metrics, with category subtotals on the detail page. Five preference profiles (Balance, Budget, Quality of Life, Travel, and Family) adjust the weights through a dropdown in the results header. The list is sorted from highest to lowest score and displays a badge for each city.
- **14 filters** organized into 6 sections (demographics, environment, safety, economy, services, culture/tourism) in a collapsible panel.
- **City detail page**: population, temperature, salary, 7 metric sections, places of interest, and sample accommodations.
- **Comparison of 2 to 4 cities** with side-by-side metrics and the best value in each row highlighted in green.
- **50 languages**, with a selector in the header and the preference saved on the device.
- **Contact and data reports**: a form to send messages and report data errors.

## City scoring

Each city receives an **overall score from 0 to 100** and category subtotals, calculated in the app from each city's metrics. Scoring is automatic: when cities are added or updated, percentiles and scores are recalculated as the data is loaded.

### Normalization

- Each metric is converted to a **percentile rank** (0–1) within the set of loaded cities. This prevents extreme values (for example, an incorrectly imported area) from flattening the rest.
- The final score is rescaled to span the full 0–100 range: the highest-scoring city gets 100 and the lowest gets 0.
- Each category's subtotals are rescaled independently so the bars can be compared with one another.
- If a city is missing a value, that metric is ignored for that city and its weight is redistributed among the available metrics. A missing field is distinguished from a legitimate zero (free transport, 0 °C).

### Categories

`demographics`, `safety`, `economy`, `services`, `environment`, and `interest`. The detail page only displays categories with a non-zero weight in the active profile.

### Profiles and weights

Choose a profile from the dropdown in the results header. **Balance** is the default profile and is geared toward living in the city.

| Metric | Balance | Budget | Quality of Life | Travel | Family |
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

↑ higher is better · ↓ lower is better · `avgTemperature` is scored by proximity to the ideal range, not by «hotter is better».

## Languages

50 languages with **Catalan as the base language**.

Change the language from the header dropdown («System language» plus 50 languages); the selection is preserved between sessions.

## Data sources

Official municipal data and Eurostat · Climate-Data.org and IQAir (air quality) · Numbeo (safety, cost of living, rent, and salary) · EF English Proficiency Index · SalaryExplorer · Ookla Speedtest Global Index (internet) · UNESCO World Heritage Centre and official tourism organizations · Accommodation prices (Booking, Hostelworld, Numbeo).

## Credits

Project by **VirgiliApps** — owner: Oriol Virgili Garrigós.
