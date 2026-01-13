export const STAT_TABLE_DATA = [
  {
    id: 1,
    description: "Репрессировано по политическим обвинениям:",
    rowSpan: 3,
    colSpan: 2,
    countClassName: "border-0 border-l",
    subItems: [
      {
        description: "– Высшая мера наказания (расстрел)",
        count: " 1619 чел.",
        countClassName: "border-l border-gray",
      },
      {
        description: "– ИТЛ, тюремные заключения, ссылки",
        count: " 5927 чел.",
        countClassName: "border-l border-gray",
      },
    ],
  },
  {
    id: 2,
    description: 'Репрессировано в ходе кампании по "раскулачиванию"',
    count: " 1710 чел.",
  },
  {
    id: 3,
    description: "Репрессировано по национальному признаку",
    count: " 1848 чел.",
  },
  {
    id: null,
    description: "Всего",
    count: "11104 чел.",
  },
];
