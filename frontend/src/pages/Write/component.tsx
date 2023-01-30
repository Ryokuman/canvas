type textComponentTypes = { font: string; fontWeight: number; fontSize: number; color: string };
type defaultComponentTypes = {
  width: number;
  height: number;
  backgroundImage: string;
  backgroundColor: string;
  opacity: number;
  borderRadius: string;
  Border: string;
};

class Component {
  type: "text" | "default";
  style: textComponentTypes | defaultComponentTypes;
  constructor(type: "text" | "default", style: textComponentTypes | defaultComponentTypes) {
    this.type = type;
    this.style = style;
  }
}

export default Component;
