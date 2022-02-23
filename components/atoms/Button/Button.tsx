import variants from "./buttons.json";

export interface ButtonProps {
  variant: string;
  color: string;
  key: string;
}

export const Button = ({ variant, color }: ButtonProps) => {
  return (
    <div>
      {variants.map((variant, key) => (
        <button className={color}>{variant}</button>
      ))}
    </div>
  );
};
