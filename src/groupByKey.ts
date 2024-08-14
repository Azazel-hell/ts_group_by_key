type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const answer: GroupsMap<T> = Object.fromEntries(
    items.map((item) => [item[key] as string, []]),
  );

  for (const el of items) {
    answer[el[key] as string].push(el);
  }

  return answer;
}
