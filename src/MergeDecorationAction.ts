import DecorationsParser from './DecorationsParser';

export default function (diffEditor: any, opt: any) {

  if(!diffEditor) return;
  let { arrowPos = 'right' } = opt || {};
  console.log('arrowPos', arrowPos);

  let originalModel = diffEditor.getModel().original;
  let modifiedModel = diffEditor.getModel().modified;

  let decorations: any;
  let changes: any;

  let decorationsModified: any;

  //第一次生成就需要生成decorations
  // changes = diffEditor.getLineChanges();
  // let decoration = DecorationsParser.scanLineChanges(changes);
  // decorations = originalModel.deltaDecorations(decorations, decoration);

  diffEditor.onDidUpdateDiff(() => {
    changes = diffEditor.getLineChanges();
    console.log('changes', changes);
    let decoration = DecorationsParser.scanLineChanges(changes);
    // console.log('decoration', decoration);
    let decorationModified = DecorationsParser.scanLineChangesModified(changes);

    decorations = originalModel.deltaDecorations(decorations, decoration);
    decorationsModified = modifiedModel.deltaDecorations(decorationsModified, decorationModified);
  });

  let lineLength, range, content, Operations;

  const mouseDown = (e: any) => {
    // 这里在点击过快的时候需要收集错误信息
    try {    
      let target = e.target;
      if (target.type === 2) {
        if ((target.element && target.element.previousSibling && target.element.previousSibling.classList.contains('rightArrow')) || target.element.classList.contains('rightArrow')) {
          changes.forEach((element: any) => {
            if (   (element.originalStartLineNumber === 0 && target.position.lineNumber == 1)
                || (element.modifiedStartLineNumber === 0 && target.position.lineNumber == 1)
                || (target.position.lineNumber === element.originalStartLineNumber && arrowPos === 'left') 
                || target.position.lineNumber === element.modifiedStartLineNumber && arrowPos === 'right'){
              content = getOriginalContent(element);
              console.log('ori content', content);
              range = getModifiedRange(element);
              Operations = modifiedModel.pushEditOperations([], [{
                range: range,
                text: content
              }]);
            }
          });
        }
      }
    } catch (error) {
      
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
     * 当然不能是最后一行
     */
    // while (element.originalStartLineNumber - modifiedLineCount > 0) {
    //   if (element.modifiedEndLineNumber === 0 && element.modifiedStartLineNumber !== 0) {
    //     content = '\n'.concat(content);
    //   }
    //   modifiedLineCount++;
    // }
    /**
     * 2018.11.07更新
     * 添加到末尾只需要添加一行
     */
    if(element.originalStartLineNumber - modifiedLineCount > 0) {
      content = '\n'.concat(content);
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
  diffEditor.getModifiedEditor().onMouseDown(mouseDown);
}