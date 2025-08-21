import { cn } from "@/utils/cn";

const Container = ({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <section
      id={id}
      className={cn(
        `mx-auto flex w-full flex-col gap-4 px-6 py-10 sm:px-8 lg:px-28`,
        className
      )}
    >
      {children}
    </section>
  );
};

export default Container;
