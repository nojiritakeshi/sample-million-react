import { block } from "million/react";
export type RowProps = {
  adjective: string;
  color: string;
  noun: string;
  keyName: string;
};

export const RowBlock = block(function Row({
  adjective,
  color,
  noun,
}: RowProps) {
  return (
    <tr>
      <td>{adjective}</td>
      <td>{color}</td>
      <td>{noun}</td>
    </tr>
  );
});

// export const RowBlock = block(
//   ({ adjective, color, noun, keyName }: RowProps) => (
//     <SubBlock
//       adjective={adjective}
//       color={color}
//       noun={noun}
//       keyName={keyName}
//     />
//   )
// );
