import { STag } from "./Tag.styles";
import removeIcon from "../../images/icon-remove.svg";

interface TagProps {
  name: string;
  onClick?: Function;
  button?: boolean;
  onButtonClick?: Function;
}
function Tag({ name, button = false, onClick, onButtonClick }: TagProps) {
  return (
    <STag>
      <span>{name}</span>
      {button && (
        <button aria-label="remove">
          <img src={removeIcon} alt="" />
        </button>
      )}
    </STag>
  );
}

export default Tag;
