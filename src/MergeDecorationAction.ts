import DecorationsParser from './DecorationsParser';

export default function (diffEditor: any) {

  if(!diffEditor) return;

  let originalModel = diffEditor.getModel().original;
  let modifiedModel = diffEditor.getModel().modified;

  let decorations: any;
  let changes: any;

  diffEditor.onDidUpdateDiff(() => {
    changes = diffEditor.getLineChanges();
    let decoration = DecorationsParser.scanLineChanges(changes);
    // console.log('decoration', decoration);
    decorations = originalModel.deltaDecorations(decorations, decoration);
  });

  let lineLength, range, content, Operations;

  const mouseDown = (e: any) => {
    let target = e.target;
    if (target.type === 2) {
      if ((target.element && target.element.previousSibling && target.element.previousSibling.classList.contains('rightArrow')) || target.element.classList.contains('rightArrow')) {
        changes.forEach((element: any) => {
          if (target.position.lineNumber === element.originalStartLineNumber) {
            content = getOriginalContent(element);
            range = getModifiedRange(element);
            Operations = modifiedModel.pushEditOperations([], [{
              range: range,
              text: content
            }]);
          }
        });
      }
    }
  }

  const getOriginalContent = (element: any) => {
    let originalEndLineNumber = element.originalEndLineNumber === 0 ? element.originalStartLineNumber : element.originalEndLineNumber;
    lineLength = originalModel.getLineContent(originalEndLineNumber).length + 1;
    range = new window.monaco.Range(element.originalStartLineNumber, 1, originalEndLineNumber, lineLength);
    content = originalModel.getValueInRange(range);
    // if (element.modifiedStartLineNumber === 0) {
    //   content = content.concat('\n');
    // } 
    let modifiedLineCount = modifiedModel.getLineCount();
    let originalLineCount = originalModel.getLineCount();
    /**
     * 如果original将要右移的行数大于modified的总行数，则需要往前补换行符
     */
    while (element.originalStartLineNumber - modifiedLineCount > 0) {
      if (element.modifiedEndLineNumber === 0 && element.modifiedStartLineNumber !== 0) {
        content = '\n'.concat(content);
      }
      modifiedLineCount++;
    }
    /**
     * 向左边补充换行符
     */
    if (element.modifiedEndLineNumber === 0 && (originalLineCount - element.originalEndLineNumber > 0 || element.modifiedStartLineNumber === 0)) {
      content = content.concat('\n');
    }
    return content;
  }

  const getModifiedRange = (element: any) => {
    /**
     * element.originalEndLineNumber === 0
     * 表示original需要整体移动到右边并且要覆盖modified对应的行
     */
    if (element.originalEndLineNumber === 0 && element.modifiedEndLineNumber !== 0) {
      lineLength = modifiedModel.getLineContent(element.modifiedEndLineNumber).length + 1;
      return new window.monaco.Range(element.modifiedStartLineNumber - 1, 1, element.modifiedEndLineNumber, lineLength)
    }
    /**
     * element.modifiedEndLineNumber === 0
     * 表示original需要整体移动到右边并且要添加到对应的行的后面
     */
    else if (element.modifiedEndLineNumber === 0) {
      return new window.monaco.Range(element.modifiedStartLineNumber + 1, 1, element.modifiedStartLineNumber + 1, 1)
    } else {
      lineLength = modifiedModel.getLineContent(element.modifiedEndLineNumber).length + 1;
      range = new window.monaco.Range(element.modifiedStartLineNumber, 1, element.modifiedEndLineNumber, lineLength);
      return range;
    }
  }

  diffEditor.getOriginalEditor().onMouseDown(mouseDown);
}