import * as monaco from 'monaco-editor';
import merge from './MergeDecorationAction'
import './index.scss';

self.MonacoEnvironment = {
  getWorkerUrl: function (moduleId, label) {
    if (label === 'json') {
      return './json.worker.bundle.js';
    }
    if (label === 'css') {
      return './css.worker.bundle.js';
    }
    if (label === 'html') {
      return './html.worker.bundle.js';
    }
    if (label === 'typescript' || label === 'javascript') {
      return './ts.worker.bundle.js';
    }
    return './editor.worker.bundle.js';
  }
}

var originalModel = monaco.editor.createModel("This line is removed on the right.\njust some text\nabcd\nefgh\nSome more text\naaa\n\n\n\naaaaa\nbbb\ng\ngggg\nasd", "text/plain");
var modifiedModel = monaco.editor.createModel("just some text\nabcz\nzzzzefgh\nSome more text.\nThis line is removed on the left.、\naaa\n", "text/plain");

var diffEditor = monaco.editor.createDiffEditor(document.getElementById("container"), {
	// You can optionally disable the resizing
  enableSplitViewResizing: false,
  renderSideBySide: true,
  glyphMargin: true
});
diffEditor.setModel({
	original: originalModel,
	modified: modifiedModel
});

merge(diffEditor);


/*
just some text
abcz
zzzzefgh
Some more text.
This line is removed on the left.、
aaa
asd
qwe
qweasdad
sadasd

q

aaaaa

qweqwe
gggggg

ggggggasd
asd
*/

/*
This line is removed on the right.
just some text
abcd
efgh
Some more text
aaa
asd
*/

