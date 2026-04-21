# ⚽ Escudos Futebol API

API leve para consultar escudos de times de futebol sul-americanos.
Disponível em SVG e PNG (512x512).

## Endpoints

### `GET /badges`

Retorna todos os times disponíveis.

```json
[
  {
    "name": "sao-paulo",
    "svg": "https://cdn.jsdelivr.net/gh/washingtonos/escudos-futebol-api@main/assets/badges/sao-paulo.svg",
    "png": "https://cdn.jsdelivr.net/gh/washingtonos/escudos-futebol-api@main/assets/badges-png/sao-paulo.png"
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
  "name": "palmeiras",
  "svg": "https://cdn.jsdelivr.net/gh/washingtonos/escudos-futebol-api@main/assets/badges/palmeiras.svg",
  "png": "https://cdn.jsdelivr.net/gh/washingtonos/escudos-futebol-api@main/assets/badges-png/palmeiras.png"
}
```

## Rodando localmente

```bash
npm install
npm start
```

A API sobe em `http://localhost:3000`.

## Converter SVGs para PNG

```bash
npm run convert-png
```

Gera os PNGs em `assets/badges-png/` (512x512, fundo transparente).
