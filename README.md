# ⚽ Escudos Futebol API

API leve para consultar escudos de times de futebol sul-americanos.

## Endpoints

### `GET /badges`

Retorna todos os times disponíveis.

```json
[
  {
    "name": "sao-paulo",
    "image": "https://raw.githubusercontent.com/washingtonos/escudos-futebol-api/main/assets/badges/sao-paulo.svg"
  }
]
```

### `GET /badges/:name`

Retorna o escudo de um time específico.

```
GET /badges/palmeiras
```

```json
{
  "name": "sao-paulo",
  "image": "https://raw.githubusercontent.com/washingtonos/escudos-futebol-api/main/assets/badges/sao-paulo.svg"
}
```

## Rodando localmente

```bash
npm install
npm start
```

A API sobe em `http://localhost:3000`.
