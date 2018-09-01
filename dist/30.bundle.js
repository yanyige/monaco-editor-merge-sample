(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/_monaco-editor@0.14.3@monaco-editor/esm/vs/basic-languages/xml/xml.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/_monaco-editor@0.14.3@monaco-editor/esm/vs/basic-languages/xml/xml.js ***!
  \********************************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\nvar conf = {\n    comments: {\n        blockComment: ['<!--', '-->'],\n    },\n    brackets: [\n        ['<', '>']\n    ],\n    autoClosingPairs: [\n        { open: '<', close: '>' },\n        { open: '\\'', close: '\\'' },\n        { open: '\"', close: '\"' },\n    ],\n    surroundingPairs: [\n        { open: '<', close: '>' },\n        { open: '\\'', close: '\\'' },\n        { open: '\"', close: '\"' },\n    ]\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.xml',\n    ignoreCase: true,\n    // Useful regular expressions\n    qualifiedName: /(?:[\\w\\.\\-]+:)?[\\w\\.\\-]+/,\n    tokenizer: {\n        root: [\n            [/[^<&]+/, ''],\n            { include: '@whitespace' },\n            // Standard opening tag\n            [/(<)(@qualifiedName)/, [\n                    { token: 'delimiter' },\n                    { token: 'tag', next: '@tag' }\n                ]],\n            // Standard closing tag\n            [/(<\\/)(@qualifiedName)(\\s*)(>)/, [\n                    { token: 'delimiter' },\n                    { token: 'tag' },\n                    '',\n                    { token: 'delimiter' }\n                ]],\n            // Meta tags - instruction\n            [/(<\\?)(@qualifiedName)/, [\n                    { token: 'delimiter' },\n                    { token: 'metatag', next: '@tag' }\n                ]],\n            // Meta tags - declaration\n            [/(<\\!)(@qualifiedName)/, [\n                    { token: 'delimiter' },\n                    { token: 'metatag', next: '@tag' }\n                ]],\n            // CDATA\n            [/<\\!\\[CDATA\\[/, { token: 'delimiter.cdata', next: '@cdata' }],\n            [/&\\w+;/, 'string.escape'],\n        ],\n        cdata: [\n            [/[^\\]]+/, ''],\n            [/\\]\\]>/, { token: 'delimiter.cdata', next: '@pop' }],\n            [/\\]/, '']\n        ],\n        tag: [\n            [/[ \\t\\r\\n]+/, ''],\n            [/(@qualifiedName)(\\s*=\\s*)(\"[^\"]*\"|'[^']*')/, ['attribute.name', '', 'attribute.value']],\n            [/(@qualifiedName)(\\s*=\\s*)(\"[^\">?\\/]*|'[^'>?\\/]*)(?=[\\?\\/]\\>)/, ['attribute.name', '', 'attribute.value']],\n            [/(@qualifiedName)(\\s*=\\s*)(\"[^\">]*|'[^'>]*)/, ['attribute.name', '', 'attribute.value']],\n            [/@qualifiedName/, 'attribute.name'],\n            [/\\?>/, { token: 'delimiter', next: '@pop' }],\n            [/(\\/)(>)/, [\n                    { token: 'tag' },\n                    { token: 'delimiter', next: '@pop' }\n                ]],\n            [/>/, { token: 'delimiter', next: '@pop' }],\n        ],\n        whitespace: [\n            [/[ \\t\\r\\n]+/, ''],\n            [/<!--/, { token: 'comment', next: '@comment' }]\n        ],\n        comment: [\n            [/[^<\\-]+/, 'comment.content'],\n            [/-->/, { token: 'comment', next: '@pop' }],\n            [/<!--/, 'comment.content.invalid'],\n            [/[<\\-]/, 'comment.content']\n        ],\n    },\n};\n\n\n//# sourceURL=webpack:///./node_modules/_monaco-editor@0.14.3@monaco-editor/esm/vs/basic-languages/xml/xml.js?");

/***/ })

}]);