# Parse Proteins

If a protein, license or copyright is missing you can create a pull request

## Installation

    $ npm i @datagica/parse-proteins

## Usage

Example:

```javascript
await parse('In Humans, myomesin is encoded by the genes MYOM1 and MYOM2.')
```

Output:

```json
[
  {
    "ngram": "myomesin",
    "value": {
      "id": "myomesin",
      "label": {
        "en": "Myomesin",
        "fr": "Myomésine"
      },
      "description": {
        "en": "Myomesin",
        "fr": "Myomésine"
      },
      "keywords": [],
      "category": "protein",
      "aliases": {
        "en": [
          "Myomesin",
        ],
        "fr": [
          "Myomésine",
        ],
      },
    },
    "score": 1,
    "position": {
      "sentence": 0,
      "word": 3,
      "begin": 11,
      "end": 19
    }
  }
]
```

Also support some french:

```javascript
await parse('Les protéines S100A8 et S100A9 forment un hétérodimère appelé calprotectine.')
```

```json
[
  {
    "ngram": "S100A8",
    "value": {
      "id": "calgranulin-a",
      "label": {
        "en": "Calgranulin A",
        "fr": "Calgranuline A"
      },
      "description": {
        "en": "S100 calcium-binding protein A8 (S100A8, Calgranulin A)",
        "fr": "S100A8 (Calgranuline A)"
      },
      "keywords": [],
      "category": "protein",
      "aliases": {
        "en": [
          "S100 calcium-binding protein A8",
          "S100 calcium binding protein A8",
          "S100A8",
          "calgranulin A",
          "calgranulins A",
        ],
        "fr": [
          "calgranuline A",
          "calgranulines A",
        ],
      },
    },
    "score": 1,
    "position": {
      "sentence": 0,
      "word": 2,
      "begin": 14,
      "end": 20
    }
  }, {
    "ngram": "S100A9",
    "value": {
      "id": "calgranulin-b",
      "label": {
        "en": "S100A9 (Calgranulin B)",
        "fr": "S100A9 (Calgranuline B)"
      },
      "description": {
        "en": "S100 calcium-binding protein A9 (S100A9, Calgranulin B)",
        "fr": "S100A9 (Calgranuline B)"
      },
      "keywords": [],
      "category": "protein",
      "aliases": {
        "en": [
          "calgranulin B",
          "calgranulins B",
          "S100 calcium-binding protein A9",
          "S100A9",
          "migration inhibitory factor-related protein 14",
          "migration inhibitory factor related protein 14",
          "MRP14",
        ],
        "fr": [
          "calgranuline B",
          "calgranulines B",
        ],
      },
    },
    "score": 1,
    "position": {
      "sentence": 0,
      "word": 4,
      "begin": 24,
      "end": 30
    }
  }, {
    "ngram": "calprotectine",
    "value": {
      "id": "calprotectin",
      "label": {
        "en": "Calprotectin",
        "fr": "Calprotectin"
      },
      "description": {
        "en": "Calprotectin",
        "fr": "Calprotectine"
      },
      "keywords": [],
      "category": "protein",
      "aliases": {
        "en": [
          "calprotectin",
          "calprotectins",
        ],
        "fr": [
          "calprotectine",
          "calprotectines",
        ],
      },
    },
    "score": 1,
    "position": {
      "sentence": 0,
      "word": 9,
      "begin": 62,
      "end": 75
    }
  }
]
```
