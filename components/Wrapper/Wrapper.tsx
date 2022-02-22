import { ReactNode } from "react";
import { ReactElement } from "react";
interface WrapperProps {
  children: ReactNode;
}

export function Wrapper({ children }: WrapperProps): ReactElement {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md flex items-center space-x-2 mt-9">
      {children}
    </div>
  );
}
