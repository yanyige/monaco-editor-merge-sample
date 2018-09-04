import * as monaco from 'monaco-editor';
import DecorationsParser from './DecorationsParser';
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

originalModel = diffEditor.getModel().original;
modifiedModel = diffEditor.getModel().modified;

let decorations;
let changes;

diffEditor.onDidUpdateDiff(() => {
  changes = diffEditor.getLineChanges();
  let decoration = DecorationsParser.scanLineChanges(changes); 
  console.log('changes', changes);
  // console.log('decoration', decoration);
  decorations = originalModel.deltaDecorations(decorations, decoration);
});

let lineLength, range, content, Operations;

const mouseDown = (e) => {
  let target = e.target;
  if ( target.type === 2 ) {
    if((target.element && target.element.previousSibling && target.element.previousSibling.classList.contains('rightArrow')) || target.element.classList.contains('rightArrow')) {
      changes.forEach(element => {
        if(target.position.lineNumber === element.originalStartLineNumber) {
          content = getOriginalContent(element);
          range = getModifiedRange(element);
          Operations = diffEditor.getModifiedEditor().getModel().pushEditOperations([], [{
            range: range,
            text: content
          }]);
        }
      });
    }
  }
}

const getOriginalContent = (element) => {
  let originalEndLineNumber = element.originalEndLineNumber === 0 ? element.originalStartLineNumber: element.originalEndLineNumber;
  lineLength = diffEditor.getOriginalEditor().getModel().getLineLength(originalEndLineNumber) + 1;
  range = new window.monaco.Range(element.originalStartLineNumber, 1, originalEndLineNumber, lineLength);
  content = diffEditor.getOriginalEditor().getModel().getValueInRange(range);
  // if (element.modifiedStartLineNumber === 0) {
  //   content = content.concat('\n');
  // } 
  let modifiedLineCount = diffEditor.getModifiedEditor().getModel().getLineCount();
  let originalLineCount = diffEditor.getOriginalEditor().getModel().getLineCount();
  /**
   * 如果original将要右移的行数大于modified的总行数，则需要往前补换行符
   */
  while(element.originalStartLineNumber - modifiedLineCount > 0) {
    if (element.modifiedEndLineNumber === 0 && element.modifiedStartLineNumber !== 0) {
      content = '\n'.concat(content);
    }
    modifiedLineCount ++;
  }
  /**
   * 向左边补充换行符
   */
  if (element.modifiedEndLineNumber === 0 && (originalLineCount - element.originalEndLineNumber > 0 || element.modifiedStartLineNumber === 0)) {
    content = content.concat('\n');
  } 
  return content;
}

const getModifiedRange = (element) => {
  /**
   * element.originalEndLineNumber === 0
   * 表示original需要整体移动到右边并且要覆盖modified对应的行
   */
  if(element.originalEndLineNumber === 0 && element.modifiedEndLineNumber !== 0) {
    lineLength = diffEditor.getModifiedEditor().getModel().getLineLength(element.modifiedEndLineNumber) + 1;
    return new window.monaco.Range(element.modifiedStartLineNumber - 1, 1, element.modifiedEndLineNumber, lineLength)
  }
  /**
   * element.modifiedEndLineNumber === 0
   * 表示original需要整体移动到右边并且要添加到对应的行的后面
   */
  else if(element.modifiedEndLineNumber === 0) {
    return new window.monaco.Range(element.modifiedStartLineNumber + 1, 1, element.modifiedStartLineNumber + 1, 1)
  } else {
    lineLength = diffEditor.getModifiedEditor().getModel().getLineLength(element.modifiedEndLineNumber) + 1;
    range = new window.monaco.Range(element.modifiedStartLineNumber, 1, element.modifiedEndLineNumber, lineLength);
    return range;
  }
}

diffEditor.getOriginalEditor().onMouseDown(mouseDown);


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

