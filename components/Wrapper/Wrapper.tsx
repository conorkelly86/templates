import { ReactNode } from "react";
import { ReactElement } from "react";
interface WrapperProps {
  children: ReactNode;
}

export function Wrapper({ children }: WrapperProps): ReactElement {
  return (
    <div className="p-6 max-w-7xl mx-auto  rounded-xl shadow-xl flex items-center space-x-2">
      {children}
    </div>
  );
}
