(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/_monaco-editor@0.14.3@monaco-editor/esm/vs/basic-languages/csharp/csharp.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/_monaco-editor@0.14.3@monaco-editor/esm/vs/basic-languages/csharp/csharp.js ***!
  \**************************************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    wordPattern: /(-?\\d*\\.\\d\\w*)|([^\\`\\~\\!\\#\\$\\%\\^\\&\\*\\(\\)\\-\\=\\+\\[\\{\\]\\}\\\\\\|\\;\\:\\'\\\"\\,\\.\\<\\>\\/\\?\\s]+)/g,\n    comments: {\n        lineComment: '//',\n        blockComment: ['/*', '*/'],\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')'],\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\\'', close: '\\'', notIn: ['string', 'comment'] },\n        { open: '\"', close: '\"', notIn: ['string', 'comment'] },\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '<', close: '>' },\n        { open: '\\'', close: '\\'' },\n        { open: '\"', close: '\"' },\n    ],\n    folding: {\n        markers: {\n            start: new RegExp(\"^\\\\s*#region\\\\b\"),\n            end: new RegExp(\"^\\\\s*#endregion\\\\b\")\n        }\n    }\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.cs',\n    brackets: [\n        { open: '{', close: '}', token: 'delimiter.curly' },\n        { open: '[', close: ']', token: 'delimiter.square' },\n        { open: '(', close: ')', token: 'delimiter.parenthesis' },\n        { open: '<', close: '>', token: 'delimiter.angle' }\n    ],\n    keywords: [\n        'extern', 'alias', 'using', 'bool', 'decimal', 'sbyte', 'byte', 'short',\n        'ushort', 'int', 'uint', 'long', 'ulong', 'char', 'float', 'double',\n        'object', 'dynamic', 'string', 'assembly', 'is', 'as', 'ref',\n        'out', 'this', 'base', 'new', 'typeof', 'void', 'checked', 'unchecked',\n        'default', 'delegate', 'var', 'const', 'if', 'else', 'switch', 'case',\n        'while', 'do', 'for', 'foreach', 'in', 'break', 'continue', 'goto',\n        'return', 'throw', 'try', 'catch', 'finally', 'lock', 'yield', 'from',\n        'let', 'where', 'join', 'on', 'equals', 'into', 'orderby', 'ascending',\n        'descending', 'select', 'group', 'by', 'namespace', 'partial', 'class',\n        'field', 'event', 'method', 'param', 'property', 'public', 'protected',\n        'internal', 'private', 'abstract', 'sealed', 'static', 'struct', 'readonly',\n        'volatile', 'virtual', 'override', 'params', 'get', 'set', 'add', 'remove',\n        'operator', 'true', 'false', 'implicit', 'explicit', 'interface', 'enum',\n        'null', 'async', 'await', 'fixed', 'sizeof', 'stackalloc', 'unsafe', 'nameof',\n        'when'\n    ],\n    namespaceFollows: [\n        'namespace', 'using',\n    ],\n    parenFollows: [\n        'if', 'for', 'while', 'switch', 'foreach', 'using', 'catch', 'when'\n    ],\n    operators: [\n        '=', '??', '||', '&&', '|', '^', '&', '==', '!=', '<=', '>=', '<<',\n        '+', '-', '*', '/', '%', '!', '~', '++', '--', '+=',\n        '-=', '*=', '/=', '%=', '&=', '|=', '^=', '<<=', '>>=', '>>', '=>'\n    ],\n    symbols: /[=><!~?:&|+\\-*\\/\\^%]+/,\n    // escape sequences\n    escapes: /\\\\(?:[abfnrtv\\\\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,\n    // The main tokenizer for our languages\n    tokenizer: {\n        root: [\n            // identifiers and keywords\n            [/\\@?[a-zA-Z_]\\w*/, {\n                    cases: {\n                        '@namespaceFollows': { token: 'keyword.$0', next: '@namespace' },\n                        '@keywords': { token: 'keyword.$0', next: '@qualified' },\n                        '@default': { token: 'identifier', next: '@qualified' }\n                    }\n                }],\n            // whitespace\n            { include: '@whitespace' },\n            // delimiters and operators\n            [/}/, {\n                    cases: {\n                        '$S2==interpolatedstring': { token: 'string.quote', next: '@pop' },\n                        '$S2==litinterpstring': { token: 'string.quote', next: '@pop' },\n                        '@default': '@brackets'\n                    }\n                }],\n            [/[{}()\\[\\]]/, '@brackets'],\n            [/[<>](?!@symbols)/, '@brackets'],\n            [/@symbols/, {\n                    cases: {\n                        '@operators': 'delimiter',\n                        '@default': ''\n                    }\n                }],\n            // numbers\n            [/[0-9_]*\\.[0-9_]+([eE][\\-+]?\\d+)?[fFdD]?/, 'number.float'],\n            [/0[xX][0-9a-fA-F_]+/, 'number.hex'],\n            [/0[bB][01_]+/, 'number.hex'],\n            [/[0-9_]+/, 'number'],\n            // delimiter: after number because of .\\d floats\n            [/[;,.]/, 'delimiter'],\n            // strings\n            [/\"([^\"\\\\]|\\\\.)*$/, 'string.invalid'],\n            [/\"/, { token: 'string.quote', next: '@string' }],\n            [/\\$\\@\"/, { token: 'string.quote', next: '@litinterpstring' }],\n            [/\\@\"/, { token: 'string.quote', next: '@litstring' }],\n            [/\\$\"/, { token: 'string.quote', next: '@interpolatedstring' }],\n            // characters\n            [/'[^\\\\']'/, 'string'],\n            [/(')(@escapes)(')/, ['string', 'string.escape', 'string']],\n            [/'/, 'string.invalid']\n        ],\n        qualified: [\n            [/[a-zA-Z_][\\w]*/, {\n                    cases: {\n                        '@keywords': { token: 'keyword.$0' },\n                        '@default': 'identifier'\n                    }\n                }],\n            [/\\./, 'delimiter'],\n            ['', '', '@pop'],\n        ],\n        namespace: [\n            { include: '@whitespace' },\n            [/[A-Z]\\w*/, 'namespace'],\n            [/[\\.=]/, 'delimiter'],\n            ['', '', '@pop'],\n        ],\n        comment: [\n            [/[^\\/*]+/, 'comment'],\n            // [/\\/\\*/,    'comment', '@push' ],    // no nested comments :-(\n            ['\\\\*/', 'comment', '@pop'],\n            [/[\\/*]/, 'comment']\n        ],\n        string: [\n            [/[^\\\\\"]+/, 'string'],\n            [/@escapes/, 'string.escape'],\n            [/\\\\./, 'string.escape.invalid'],\n            [/\"/, { token: 'string.quote', next: '@pop' }]\n        ],\n        litstring: [\n            [/[^\"]+/, 'string'],\n            [/\"\"/, 'string.escape'],\n            [/\"/, { token: 'string.quote', next: '@pop' }]\n        ],\n        litinterpstring: [\n            [/[^\"{]+/, 'string'],\n            [/\"\"/, 'string.escape'],\n            [/{{/, 'string.escape'],\n            [/}}/, 'string.escape'],\n            [/{/, { token: 'string.quote', next: 'root.litinterpstring' }],\n            [/\"/, { token: 'string.quote', next: '@pop' }]\n        ],\n        interpolatedstring: [\n            [/[^\\\\\"{]+/, 'string'],\n            [/@escapes/, 'string.escape'],\n            [/\\\\./, 'string.escape.invalid'],\n            [/{{/, 'string.escape'],\n            [/}}/, 'string.escape'],\n            [/{/, { token: 'string.quote', next: 'root.interpolatedstring' }],\n            [/\"/, { token: 'string.quote', next: '@pop' }]\n        ],\n        whitespace: [\n            [/^[ \\t\\v\\f]*#((r)|(load))(?=\\s)/, 'directive.csx'],\n            [/^[ \\t\\v\\f]*#\\w.*$/, 'namespace.cpp'],\n            [/[ \\t\\v\\f\\r\\n]+/, ''],\n            [/\\/\\*/, 'comment', '@comment'],\n            [/\\/\\/.*$/, 'comment'],\n        ],\n    },\n};\n\n\n//# sourceURL=webpack:///./node_modules/_monaco-editor@0.14.3@monaco-editor/esm/vs/basic-languages/csharp/csharp.js?");

/***/ })

}]);