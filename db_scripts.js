/**
 * These scripts are used to include new data into DB
 */

// insert a category
db.categories.insert(
    {
        _id: 1,
        entries: [
            {
                label: {en: "Politics", de: "Politik"},
                subcategorie: 0,
                associated_polls: [4]
            },
            {
                label: {en: "Woman's matter", de: "Frauensache"},
                subcategorie: 0,
                associated_polls: [1, 2]
            },
            {
                label: {en: "Only 4 men", de: "Männersache"},
                subcategorie: 2,
                associated_polls: [3]
            }
        ]
    });

db.categories.insert(
    {
        _id: 2,
        entries: [
            {
                label: {en: "Cars", de: "Autos"},
                subcategorie: 0,
                associated_polls: [5]
            },
            {
                label: {en: "Girls", de: "Frauen"},
                subcategorie: 0,
                associated_polls: [6]
            }
        ]
    });

// insert a poll
db.polls.insert(
    {
        _id: 6,
        date: new Date(),
        author: 1,
        choices: [
            {
                _id: 1, count: 0, label: {en: "Give her a cookie", de: "Ihr einen Keks geben"}
            },
            {
                _id: 2, count: 0, label: {en: "Ignore her", de: "Sie ignorieren"}
            },
            {
                _id: 3, count: 0, label: {en: "Bitch slap", de: "Bitch slap"}
            },
            {
                _id: 4, count: 0, label: {en: "Buy her shoes", de: "Ihr Schuhe kaufen"}
            }
        ],
        comment: {
            en: "How do you handle your annoying girlfriend ?",
            de: "Wie wirst du mit deiner Freundin fertig, wenn sie zu einer Furie wird ?"
        },
        name: {en: "Annoying girlfriend", de: "Deine Partei"},
        tags: [
            {en: "girlfriend", de: "Freundin"},
            {en: "annoying", de: "nervt"}
        ],
        region: "default"
    }
);

db.polls.insert(
    {
        _id: 14,
        date: new Date(),
        author: 1,
        choices: [],
        comment: {en: "Select the poll you want to see on Yvote", de: "Wähle die Wahl, die du auf Yvote sehen willst."},
        name: {en: "Custom poll", de: "Eígene Wahl"},
        tags: [
            {en: "poll", de: "Wahl"}
        ],
        region: "default"
    }
);
db.polls.update(
    {_id: 14},
    {
        $set: {
            choices: []
        }
    }
);
{
    "author"
:
    1,
        "choices"
:
    [
        {
            "_id": 1,
            "count": NumberLong(0),
            "label": {
                "en": "It's only fair to ask for more money",
                "de": "Warum nicht, jeder will mehr Geld"
            }
        },
        {
            "_id": 2,
            "count": NumberInt(1),
            "label": {
                "en": "Not at all, i must be at work on time",
                "de": "Geht gar nicht, ich muss pünktlich zur Arbeit"
            }
        }
    ],
        "comment"
:
    {
        "en"
    :
        "What do you think about the current conductor strike ?",
            "de"
    :
        "Wie stehen Sie zum Lockführerstreik?"
    }
,
    "date"
:
    ISODate("2014-11-03T20:36:38.438Z"),
        "expdate"
:
    ISODate("2014-12-01T09:19:38.438Z"),
        "name"
:
    {
        "en"
    :
        "Conductor strike",
            "de"
    :
        "Lockführerstreik"
    }
,
    "region"
:
    "de",
        "tags"
:
    [
        {
            "en": "conductor strike",
            "de": "Lockführerstreik"
        }
    ]
}