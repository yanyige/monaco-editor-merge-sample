
export class Range {

  private startLineNumber: number;
  private startColumn: number;
  private endColumn: number;
  private endLineNumber: number;

  constructor(startLineNumber: number, startColumn: number, endColumn: number, endLineNumber: number) {
    this.startLineNumber = startLineNumber;
    this.startColumn = startColumn;
    this.endColumn = endColumn;
    this.endLineNumber = endLineNumber;
  }
}