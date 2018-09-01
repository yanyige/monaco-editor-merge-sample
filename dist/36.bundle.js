(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/_monaco-editor@0.14.3@monaco-editor/esm/vs/basic-languages/apex/apex.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/_monaco-editor@0.14.3@monaco-editor/esm/vs/basic-languages/apex/apex.js ***!
  \**********************************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    // the default separators except `@$`\n    wordPattern: /(-?\\d*\\.\\d\\w*)|([^\\`\\~\\!\\#\\%\\^\\&\\*\\(\\)\\-\\=\\+\\[\\{\\]\\}\\\\\\|\\;\\:\\'\\\"\\,\\.\\<\\>\\/\\?\\s]+)/g,\n    comments: {\n        lineComment: '//',\n        blockComment: ['/*', '*/'],\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')'],\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' },\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' },\n        { open: '<', close: '>' },\n    ],\n    folding: {\n        markers: {\n            start: new RegExp(\"^\\\\s*//\\\\s*(?:(?:#?region\\\\b)|(?:<editor-fold\\\\b))\"),\n            end: new RegExp(\"^\\\\s*//\\\\s*(?:(?:#?endregion\\\\b)|(?:</editor-fold>))\")\n        }\n    }\n};\nvar keywords = [\n    'abstract',\n    'activate',\n    'and',\n    'any',\n    'array',\n    'as',\n    'asc',\n    'assert',\n    'autonomous',\n    'begin',\n    'bigdecimal',\n    'blob',\n    'boolean',\n    'break',\n    'bulk',\n    'by',\n    'case',\n    'cast',\n    'catch',\n    'char',\n    'class',\n    'collect',\n    'commit',\n    'const',\n    'continue',\n    'convertcurrency',\n    'decimal',\n    'default',\n    'delete',\n    'desc',\n    'do',\n    'double',\n    'else',\n    'end',\n    'enum',\n    'exception',\n    'exit',\n    'export',\n    'extends',\n    'false',\n    'final',\n    'finally',\n    'float',\n    'for',\n    'from',\n    'future',\n    'get',\n    'global',\n    'goto',\n    'group',\n    'having',\n    'hint',\n    'if',\n    'implements',\n    'import',\n    'in',\n    'inner',\n    'insert',\n    'instanceof',\n    'int',\n    'interface',\n    'into',\n    'join',\n    'last_90_days',\n    'last_month',\n    'last_n_days',\n    'last_week',\n    'like',\n    'limit',\n    'list',\n    'long',\n    'loop',\n    'map',\n    'merge',\n    'native',\n    'new',\n    'next_90_days',\n    'next_month',\n    'next_n_days',\n    'next_week',\n    'not',\n    'null',\n    'nulls',\n    'number',\n    'object',\n    'of',\n    'on',\n    'or',\n    'outer',\n    'override',\n    'package',\n    'parallel',\n    'pragma',\n    'private',\n    'protected',\n    'public',\n    'retrieve',\n    'return',\n    'returning',\n    'rollback',\n    'savepoint',\n    'search',\n    'select',\n    'set',\n    'short',\n    'sort',\n    'stat',\n    'static',\n    'strictfp',\n    'super',\n    'switch',\n    'synchronized',\n    'system',\n    'testmethod',\n    'then',\n    'this',\n    'this_month',\n    'this_week',\n    'throw',\n    'throws',\n    'today',\n    'tolabel',\n    'tomorrow',\n    'transaction',\n    'transient',\n    'trigger',\n    'true',\n    'try',\n    'type',\n    'undelete',\n    'update',\n    'upsert',\n    'using',\n    'virtual',\n    'void',\n    'volatile',\n    'webservice',\n    'when',\n    'where',\n    'while',\n    'yesterday'\n];\n// create case variations of the keywords - apex is case insensitive, but we can't make the highlighter case insensitive\n// because we use a heuristic to assume that identifiers starting with an upper case letter are types.\nvar uppercaseFirstLetter = function (lowercase) { return lowercase.charAt(0).toUpperCase() + lowercase.substr(1); };\nvar keywordsWithCaseVariations = [];\nkeywords.forEach(function (lowercase) {\n    keywordsWithCaseVariations.push(lowercase);\n    keywordsWithCaseVariations.push(lowercase.toUpperCase());\n    keywordsWithCaseVariations.push(uppercaseFirstLetter(lowercase));\n});\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.apex',\n    keywords: keywordsWithCaseVariations,\n    operators: [\n        '=', '>', '<', '!', '~', '?', ':',\n        '==', '<=', '>=', '!=', '&&', '||', '++', '--',\n        '+', '-', '*', '/', '&', '|', '^', '%', '<<',\n        '>>', '>>>', '+=', '-=', '*=', '/=', '&=', '|=',\n        '^=', '%=', '<<=', '>>=', '>>>='\n    ],\n    // we include these common regular expressions\n    symbols: /[=><!~?:&|+\\-*\\/\\^%]+/,\n    escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n    digits: /\\d+(_+\\d+)*/,\n    octaldigits: /[0-7]+(_+[0-7]+)*/,\n    binarydigits: /[0-1]+(_+[0-1]+)*/,\n    hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,\n    // The main tokenizer for our languages\n    tokenizer: {\n        root: [\n            // identifiers and keywords\n            [/[a-z_$][\\w$]*/, {\n                    cases: {\n                        '@keywords': { token: 'keyword.$0' },\n                        '@default': 'identifier'\n                    }\n                }],\n            // assume that identifiers starting with an uppercase letter are types\n            [/[A-Z][\\w\\$]*/, {\n                    cases: {\n                        '@keywords': { token: 'keyword.$0' },\n                        '@default': 'type.identifier'\n                    }\n                }],\n            // whitespace\n            { include: '@whitespace' },\n            // delimiters and operators\n            [/[{}()\\[\\]]/, '@brackets'],\n            [/[<>](?!@symbols)/, '@brackets'],\n            [/@symbols/, {\n                    cases: {\n                        '@operators': 'delimiter',\n                        '@default': ''\n                    }\n                }],\n            // @ annotations.\n            [/@\\s*[a-zA-Z_\\$][\\w\\$]*/, 'annotation'],\n            // numbers\n            [/(@digits)[eE]([\\-+]?(@digits))?[fFdD]?/, 'number.float'],\n            [/(@digits)\\.(@digits)([eE][\\-+]?(@digits))?[fFdD]?/, 'number.float'],\n            [/(@digits)[fFdD]/, 'number.float'],\n            [/(@digits)[lL]?/, 'number'],\n            // delimiter: after number because of .\\d floats\n            [/[;,.]/, 'delimiter'],\n            // strings\n            [/\"([^\"\\\\]|\\\\.)*$/, 'string.invalid'],\n            [/'([^'\\\\]|\\\\.)*$/, 'string.invalid'],\n            [/\"/, 'string', '@string.\"'],\n            [/'/, 'string', '@string.\\''],\n            // characters\n            [/'[^\\\\']'/, 'string'],\n            [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],\n            [/'/, 'string.invalid']\n        ],\n        whitespace: [\n            [/[ \\t\\r\\n]+/, ''],\n            [/\\/\\*\\*(?!\\/)/, 'comment.doc', '@apexdoc'],\n            [/\\/\\*/, 'comment', '@comment'],\n            [/\\/\\/.*$/, 'comment'],\n        ],\n        comment: [\n            [/[^\\/*]+/, 'comment'],\n            // [/\\/\\*/, 'comment', '@push' ],    // nested comment not allowed :-(\n            // [/\\/\\*/,    'comment.invalid' ],    // this breaks block comments in the shape of /* //*/\n            [/\\*\\//, 'comment', '@pop'],\n            [/[\\/*]/, 'comment']\n        ],\n        //Identical copy of comment above, except for the addition of .doc\n        apexdoc: [\n            [/[^\\/*]+/, 'comment.doc'],\n            [/\\*\\//, 'comment.doc', '@pop'],\n            [/[\\/*]/, 'comment.doc']\n        ],\n        string: [\n            [/[^\\\\\"']+/, 'string'],\n            [/@escapes/, 'string.escape'],\n            [/\\\\./, 'string.escape.invalid'],\n            [/[\"']/, { cases: { '$#==$S2': { token: 'string', next: '@pop' },\n                        '@default': 'string' } }]\n        ],\n    },\n};\n\n\n//# sourceURL=webpack:///./node_modules/_monaco-editor@0.14.3@monaco-editor/esm/vs/basic-languages/apex/apex.js?");

/***/ })

}]);