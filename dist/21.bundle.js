(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/_monaco-editor@0.14.3@monaco-editor/esm/vs/basic-languages/python/python.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/_monaco-editor@0.14.3@monaco-editor/esm/vs/basic-languages/python/python.js ***!
  \**************************************************************************************************/
/*! exports provided: conf, language */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"conf\", function() { return conf; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"language\", function() { return language; });\n/*---------------------------------------------------------------------------------------------\n *  Copyright (c) Microsoft Corporation. All rights reserved.\n *  Licensed under the MIT License. See License.txt in the project root for license information.\n *--------------------------------------------------------------------------------------------*/\n\n// Allow for running under nodejs/requirejs in tests\nvar _monaco = (typeof monaco === 'undefined' ? self.monaco : monaco);\nvar conf = {\n    comments: {\n        lineComment: '#',\n        blockComment: ['\\'\\'\\'', '\\'\\'\\''],\n    },\n    brackets: [\n        ['{', '}'],\n        ['[', ']'],\n        ['(', ')']\n    ],\n    autoClosingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"', notIn: ['string'] },\n        { open: '\\'', close: '\\'', notIn: ['string', 'comment'] },\n    ],\n    surroundingPairs: [\n        { open: '{', close: '}' },\n        { open: '[', close: ']' },\n        { open: '(', close: ')' },\n        { open: '\"', close: '\"' },\n        { open: '\\'', close: '\\'' },\n    ],\n    onEnterRules: [\n        {\n            beforeText: new RegExp(\"^\\\\s*(?:def|class|for|if|elif|else|while|try|with|finally|except|async).*?:\\\\s*$\"),\n            action: { indentAction: _monaco.languages.IndentAction.Indent }\n        }\n    ],\n    folding: {\n        offSide: true,\n        markers: {\n            start: new RegExp(\"^\\\\s*#region\\\\b\"),\n            end: new RegExp(\"^\\\\s*#endregion\\\\b\")\n        }\n    }\n};\nvar language = {\n    defaultToken: '',\n    tokenPostfix: '.python',\n    keywords: [\n        'and',\n        'as',\n        'assert',\n        'break',\n        'class',\n        'continue',\n        'def',\n        'del',\n        'elif',\n        'else',\n        'except',\n        'exec',\n        'finally',\n        'for',\n        'from',\n        'global',\n        'if',\n        'import',\n        'in',\n        'is',\n        'lambda',\n        'None',\n        'not',\n        'or',\n        'pass',\n        'print',\n        'raise',\n        'return',\n        'self',\n        'try',\n        'while',\n        'with',\n        'yield',\n        'int',\n        'float',\n        'long',\n        'complex',\n        'hex',\n        'abs',\n        'all',\n        'any',\n        'apply',\n        'basestring',\n        'bin',\n        'bool',\n        'buffer',\n        'bytearray',\n        'callable',\n        'chr',\n        'classmethod',\n        'cmp',\n        'coerce',\n        'compile',\n        'complex',\n        'delattr',\n        'dict',\n        'dir',\n        'divmod',\n        'enumerate',\n        'eval',\n        'execfile',\n        'file',\n        'filter',\n        'format',\n        'frozenset',\n        'getattr',\n        'globals',\n        'hasattr',\n        'hash',\n        'help',\n        'id',\n        'input',\n        'intern',\n        'isinstance',\n        'issubclass',\n        'iter',\n        'len',\n        'locals',\n        'list',\n        'map',\n        'max',\n        'memoryview',\n        'min',\n        'next',\n        'object',\n        'oct',\n        'open',\n        'ord',\n        'pow',\n        'print',\n        'property',\n        'reversed',\n        'range',\n        'raw_input',\n        'reduce',\n        'reload',\n        'repr',\n        'reversed',\n        'round',\n        'set',\n        'setattr',\n        'slice',\n        'sorted',\n        'staticmethod',\n        'str',\n        'sum',\n        'super',\n        'tuple',\n        'type',\n        'unichr',\n        'unicode',\n        'vars',\n        'xrange',\n        'zip',\n        'True',\n        'False',\n        '__dict__',\n        '__methods__',\n        '__members__',\n        '__class__',\n        '__bases__',\n        '__name__',\n        '__mro__',\n        '__subclasses__',\n        '__init__',\n        '__import__'\n    ],\n    brackets: [\n        { open: '{', close: '}', token: 'delimiter.curly' },\n        { open: '[', close: ']', token: 'delimiter.bracket' },\n        { open: '(', close: ')', token: 'delimiter.parenthesis' }\n    ],\n    tokenizer: {\n        root: [\n            { include: '@whitespace' },\n            { include: '@numbers' },\n            { include: '@strings' },\n            [/[,:;]/, 'delimiter'],\n            [/[{}\\[\\]()]/, '@brackets'],\n            [/@[a-zA-Z]\\w*/, 'tag'],\n            [/[a-zA-Z]\\w*/, {\n                    cases: {\n                        '@keywords': 'keyword',\n                        '@default': 'identifier'\n                    }\n                }]\n        ],\n        // Deal with white space, including single and multi-line comments\n        whitespace: [\n            [/\\s+/, 'white'],\n            [/(^#.*$)/, 'comment'],\n            [/('''.*''')|(\"\"\".*\"\"\")/, 'string'],\n            [/'''.*$/, 'string', '@endDocString'],\n            [/\"\"\".*$/, 'string', '@endDblDocString']\n        ],\n        endDocString: [\n            [/\\\\'/, 'string'],\n            [/.*'''/, 'string', '@popall'],\n            [/.*$/, 'string']\n        ],\n        endDblDocString: [\n            [/\\\\\"/, 'string'],\n            [/.*\"\"\"/, 'string', '@popall'],\n            [/.*$/, 'string']\n        ],\n        // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation\n        numbers: [\n            [/-?0x([abcdef]|[ABCDEF]|\\d)+[lL]?/, 'number.hex'],\n            [/-?(\\d*\\.)?\\d+([eE][+\\-]?\\d+)?[jJ]?[lL]?/, 'number']\n        ],\n        // Recognize strings, including those broken across lines with \\ (but not without)\n        strings: [\n            [/'$/, 'string.escape', '@popall'],\n            [/'/, 'string.escape', '@stringBody'],\n            [/\"$/, 'string.escape', '@popall'],\n            [/\"/, 'string.escape', '@dblStringBody']\n        ],\n        stringBody: [\n            [/\\\\./, 'string'],\n            [/'/, 'string.escape', '@popall'],\n            [/.(?=.*')/, 'string'],\n            [/.*\\\\$/, 'string'],\n            [/.*$/, 'string', '@popall']\n        ],\n        dblStringBody: [\n            [/\\\\./, 'string'],\n            [/\"/, 'string.escape', '@popall'],\n            [/.(?=.*\")/, 'string'],\n            [/.*\\\\$/, 'string'],\n            [/.*$/, 'string', '@popall']\n        ]\n    }\n};\n\n\n//# sourceURL=webpack:///./node_modules/_monaco-editor@0.14.3@monaco-editor/esm/vs/basic-languages/python/python.js?");

/***/ })

}]);