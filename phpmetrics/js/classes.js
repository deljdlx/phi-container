var classes = [
    {
        "name": "Phi\\Container\\Bag",
        "interface": false,
        "abstract": false,
        "methods": [
            {
                "name": "__construct",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reload",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getValue",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 8,
        "ccn": 6,
        "ccnMethodMax": 5,
        "externals": [],
        "parents": [],
        "lcom": 1,
        "length": 41,
        "vocabulary": 9,
        "volume": 129.97,
        "difficulty": 16.25,
        "effort": 2111.96,
        "level": 0.06,
        "bugs": 0.04,
        "time": 117,
        "intelligentContent": 8,
        "number_operators": 15,
        "number_operands": 26,
        "number_operators_unique": 5,
        "number_operands_unique": 4,
        "cloc": 0,
        "loc": 34,
        "lloc": 34,
        "mi": 50.98,
        "mIwoC": 50.98,
        "commentWeight": 0,
        "kanDefect": 0.36,
        "relativeStructuralComplexity": 0,
        "relativeDataComplexity": 4.33,
        "relativeSystemComplexity": 4.33,
        "totalStructuralComplexity": 0,
        "totalDataComplexity": 13,
        "totalSystemComplexity": 13,
        "package": "Phi\\Container\\",
        "pageRank": 0.3,
        "afferentCoupling": 1,
        "efferentCoupling": 0,
        "instability": 0,
        "violations": {}
    },
    {
        "name": "Phi\\Container\\Container",
        "interface": false,
        "abstract": false,
        "methods": [
            {
                "name": "set",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "get",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "reload",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 3,
        "nbMethods": 3,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 3,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 5,
        "ccn": 3,
        "ccnMethodMax": 2,
        "externals": [
            "Phi\\Container\\Interfaces\\Container",
            "Phi\\Container\\Bag",
            "Exception",
            "Exception"
        ],
        "parents": [],
        "lcom": 2,
        "length": 44,
        "vocabulary": 12,
        "volume": 157.74,
        "difficulty": 8,
        "effort": 1261.91,
        "level": 0.13,
        "bugs": 0.05,
        "time": 70,
        "intelligentContent": 19.72,
        "number_operators": 12,
        "number_operands": 32,
        "number_operators_unique": 4,
        "number_operands_unique": 8,
        "cloc": 6,
        "loc": 35,
        "lloc": 29,
        "mi": 82.22,
        "mIwoC": 52.31,
        "commentWeight": 29.92,
        "kanDefect": 0.29,
        "relativeStructuralComplexity": 16,
        "relativeDataComplexity": 1.07,
        "relativeSystemComplexity": 17.07,
        "totalStructuralComplexity": 48,
        "totalDataComplexity": 3.2,
        "totalSystemComplexity": 51.2,
        "package": "Phi\\Container\\",
        "pageRank": 0.28,
        "afferentCoupling": 1,
        "efferentCoupling": 3,
        "instability": 0.75,
        "violations": {}
    },
    {
        "name": "Phi\\Container\\Traits\\Depends",
        "interface": false,
        "abstract": true,
        "methods": [
            {
                "name": "getDependencies",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "setDependency",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "getDependency",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            },
            {
                "name": "resolveDependencies",
                "role": null,
                "public": true,
                "private": false,
                "_type": "Hal\\Metric\\FunctionMetric"
            }
        ],
        "nbMethodsIncludingGettersSetters": 4,
        "nbMethods": 4,
        "nbMethodsPrivate": 0,
        "nbMethodsPublic": 4,
        "nbMethodsGetter": 0,
        "nbMethodsSetters": 0,
        "wmc": 11,
        "ccn": 8,
        "ccnMethodMax": 4,
        "externals": [
            "Exception",
            "Phi\\Container\\Container"
        ],
        "parents": [],
        "lcom": 1,
        "length": 52,
        "vocabulary": 12,
        "volume": 186.42,
        "difficulty": 8.5,
        "effort": 1584.55,
        "level": 0.12,
        "bugs": 0.06,
        "time": 88,
        "intelligentContent": 21.93,
        "number_operators": 18,
        "number_operands": 34,
        "number_operators_unique": 4,
        "number_operands_unique": 8,
        "cloc": 14,
        "loc": 56,
        "lloc": 42,
        "mi": 82.59,
        "mIwoC": 47.62,
        "commentWeight": 34.97,
        "kanDefect": 0.8,
        "relativeStructuralComplexity": 4,
        "relativeDataComplexity": 1.67,
        "relativeSystemComplexity": 5.67,
        "totalStructuralComplexity": 16,
        "totalDataComplexity": 6.67,
        "totalSystemComplexity": 22.67,
        "package": "Phi\\Container\\Traits\\",
        "pageRank": 0.12,
        "afferentCoupling": 0,
        "efferentCoupling": 2,
        "instability": 1,
        "violations": {}
    }
]