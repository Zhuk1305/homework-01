// Кортежи - массивы определенной длинны в которые могут содержать разные типы данных
// используются например в реакт (const [count, setCount] = useState(100), где count - число, setCount - функция )

const tuple: [number, string] = [100, "i am string"];

const tuple2: [boolean, string, ...number[]] = [
  true,
  "typescript",
  1,
  2,
  3,
  4,
  5,
];
