const string = "Hello TypeSript";

function trasform(str: string, uppercase: boolean): string {
  return uppercase ? str.toUpperCase() : str.toLowerCase();
}

let isUppercase = false;

const arrowTrasworm = (str: string, uppercase: boolean): string =>
  uppercase ? str.toUpperCase() : str.toLocaleUpperCase();

console.log(trasform(string, isUppercase));
