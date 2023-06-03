<h1 align="center">
  Helsinki City Bike 
</h1>

## Introduction

Exercise for <https://github.com/solita/dev-academy-2023-exercise>

Welcome to the City Bike Helsinki App. This project aims to provide a comprehensive and user-friendly interface to explore journey and station data from the City Bike Finland service.

## Data

- <https://dev.hsl.fi/citybikes/od-trips-2021/2021-05.csv>
- <https://dev.hsl.fi/citybikes/od-trips-2021/2021-06.csv>
- <https://dev.hsl.fi/citybikes/od-trips-2021/2021-07.csv>

- <https://opendata.arcgis.com/datasets/726277c507ef4914b0aec3cbcfcbfafc_0.csv>

- **License and information:** <https://www.avoindata.fi/data/en/dataset/hsl-n-kaupunkipyoraasemat/resource/a23eef3a-cc40-4608-8aa2-c730d17e8902>

## Running locally

1. Run `git clone https://github.com/NikoSoder/solita-back.git`
2. Setup your local postgreSQL database. Examples in `queries.sql` and `.env-sample` files

```bash
$ cd solita-back/
$ npm install
$ npm run dev
```

3. You can find frontend in here <https://github.com/NikoSoder/solita-front>

## Technologies used

- Node.js
- Express
- PostgreSQL
- Sequelize

## API endpoints

| Method |                URL                 |                   Description |
| :----- | :--------------------------------: | ----------------------------: |
| `GET`  | `/api/trips?page=page&limit=limit` |   get trips, total page count |
| `GET`  |    `/api/trips/stats/stationId`    | departure count, return count |
| `GET`  |          `/api/stations`           |             get all stations. |
| `GET`  |         `/api/statistics`          |    get five busiest stations. |

## Licenses

Station Data is owned by HSL<br>
Journeys Data is owned by City Bike Finland
