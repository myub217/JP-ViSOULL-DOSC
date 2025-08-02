import { FC, PropsWithChildren } from "react";

interface SectionWrapperProps {
  id?: string;
  className?: string; // extra classes for outer <section>
  innerClassName?: string; // extra classes for inner container <div>
}

const SectionWrapper: FC<PropsWithChildren<SectionWrapperProps>> = ({
  id,
  className = "",
  innerClassName = "",
  children,
}) => {
  return (
    <section
      id={id}
      className={`py-20 sm:py-28 px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className={`max-w-7xl mx-auto ${innerClassName}`}>{children}</div>
    </section>
  );
};

export default SectionWrapper;
