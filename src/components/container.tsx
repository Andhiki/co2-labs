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
        `mx-auto flex w-full flex-col gap-4 px-6 sm:px-8 lg:px-28 `,
        id === "service" || id === "about"
          ? "py-40"
          : id === "footer"
          ? "pt-10 lg:pt-20 pb-10"
          : "py-10 lg:py-20",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Container;
