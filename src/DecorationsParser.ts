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
        }
      }
    });
  }

  static scanLineChangesModified(changes: any) {
    return changes.map((item: any) => {
      return {
        range: new window.monaco.Range(item.modifiedStartLineNumber, 1, item.modifiedEndLineNumber == 0 ? item.modifiedStartLineNumber: item.modifiedStartLineNumber, 1),
        options: {
          isWholeLine: true,
          glyphMarginClassName: 'rightArrow',
        }
      }
    });
  }
}
