import { block } from "million/react";
import { RowProps } from "../RowBlock";

export const SubBlock = block(
  ({ adjective, color, noun, keyName }: RowProps) => (
    <tr key={keyName}>
      <td>{adjective}</td>
      <td>{color}</td>
      <td>{noun}</td>
    </tr>
  )
);
// export const SubBlock = ({ adjective, color, noun, keyName }: RowProps) => {
//   const [num, setNum] = useState(0);
//   return (
//     <tr key={keyName}>
//       <td>{adjective}</td>
//       <td>{color}</td>
//       <td>{noun}</td>
//       <td>{num}</td>
//       <button onClick={() => setNum(num + 1)}>+</button>
//     </tr>
//   );
// };
