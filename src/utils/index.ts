export {};

declare global {
  interface String {
    isNullOrWhiteSpace(): boolean;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Array<T> {
    isEmpty(): boolean;
  }
}

String.prototype.isNullOrWhiteSpace = function (): boolean {
  return this === null || this.match(/^ *$/) !== null;
};

Array.prototype.isEmpty = function (): boolean {
  return this.length == 0;
};
