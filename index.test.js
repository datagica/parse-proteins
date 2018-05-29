const parse = require('./index')
const testDataEN = [{
  input: "In Humans, myomesin is encoded by the genes MYOM1 and MYOM2.",
  expected: [{
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
  }]
}, {
  input: "Cdh1 regulates the activity and substrate specificity of this ubiquitin E3-ligase.",
  expected: [{
    "ngram": "Cdh1",
    "value": {
      "id": "apc-c-activator-protein-cdh1",
      "label": {
        "en": "APC/C activator protein CDH1"
      },
      "description": {
        "en": "APC/C activator protein CDH1"
      },
      "keywords": [],
      "category": "protein",
      "aliases": {
        "en": [
          "APC/C activator protein CDH1",
          "cdh1",
        ],
      },
    },
    "score": 1,
    "position": {
      "sentence": 0,
      "word": 0,
      "begin": 0,
      "end": 4
    }
  }, {
    "ngram": "ubiquitin",
    "value": {
      "id": "ubiquitin",
      "label": {
        "en": "Ubiquitin"
      },
      "description": {
        "en": "Ubiquitin"
      },
      "keywords": [],
      "category": "protein",
      "aliases": {
        "en": [
          "Ubiquitin",
        ],
      },
    },
    "score": 1,
    "position": {
      "sentence": 0,
      "word": 9,
      "begin": 62,
      "end": 71
    }
  }]
}]

const testDataFR = [{
  input: "La caséine est la protéine du lait de vache",
  expected: [{
    "ngram": "caséine",
    "value": {
      "id": "casein",
      "label": {
        "en": "Casein",
        "fr": "Caséine"
      },
      "description": {
        "en": "Casein",
        "fr": "Caséine"
      },
      "keywords": [],
      "category": "protein",
      "aliases": {
        "en": [
          "casein",
          "caseins",
        ],
        "fr": [
          "caséine",
          "caséines",
          "caseine",
          "caseines",
        ],
      }
    },
    "score": 1,
    "position": {
      "sentence": 0,
      "word": 1,
      "begin": 3,
      "end": 10
    }
  }]
}, {
  input: "Les protéines S100A8 et S100A9 forment un hétérodimère appelé calprotectine.",
  expected: [{
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
  }]
}]

test('extract proteins (EN)', () => Promise.all(
  testDataEN.map(async ({
    input,
    expected
  }) => expect(await parse(input)).toEqual(expected))
))

test('extract proteins (FR)', () => Promise.all(
  testDataFR.map(async ({
    input,
    expected
  }) => expect(await parse(input)).toEqual(expected))
))