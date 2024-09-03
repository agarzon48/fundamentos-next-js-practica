import { ContainerProps } from "./Container.types";

export const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={`max-w-4xl mx-auto px-4 ${className}`}>{children}</div>
  );
};
