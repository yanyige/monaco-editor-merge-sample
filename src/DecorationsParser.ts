declare global {
  interface Window {
    monaco: any;
  }
}

export default class DecorationsParser {
  static scanLineChanges(changes: any) {
    // console.log('changes', changes);

    return changes.map((item: any) => {
      return {
        range: new window.monaco.Range(item.originalStartLineNumber, 1, item.originalEndLineNumber == 0 ? item.originalStartLineNumber: item.originalStartLineNumber, 1),
        options: {
          isWholeLine: true,
          glyphMarginClassName: 'rightArrow',
          zIndex: 9999
        }
      }
    });
  }
}

// var decorations = editor.deltaDecorations([], [
// 	{
// 		range: new monaco.Range(3,1,3,1),
// 		options: {
// 			isWholeLine: true,
// 			className: 'myContentClass',
// 			glyphMarginClassName: 'myGlyphMarginClass'
// 		}
// 	}
// ]);