## Backend for <https://github.com/solita/dev-academy-2023-exercise>

Data:

- <https://dev.hsl.fi/citybikes/od-trips-2021/2021-05.csv>
- <https://dev.hsl.fi/citybikes/od-trips-2021/2021-06.csv>
- <https://dev.hsl.fi/citybikes/od-trips-2021/2021-07.csv>

- <https://opendata.arcgis.com/datasets/726277c507ef4914b0aec3cbcfcbfafc_0.csv>

## API endpoints

| Method |           URL           |             Description |
| :----- | :---------------------: | ----------------------: |
| `GET`  |      `/api/trips`       |     get first 10 trips. |
| `GET`  | `/api/trips/pageNumber` | get page with 10 trips. |
| `GET`  |     `/api/stations`     |       get all stations. |
| `GET`  |   `/api/stations/id`    |        get one station. |

## Installation
