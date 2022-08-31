import { desaturatedDarkCyan } from "../../styles/colors.styles";
import { SPill } from "./Pill.styles";

interface PillProps {
  name: string;
  color?: string;
}
function Pill({ name, color = desaturatedDarkCyan }: PillProps) {
  return <SPill color={color}>{name}</SPill>;
}

export default Pill;
