import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";
import PageTitleWithDivider from "../ui/PageTitleWithDivider";

export type PageContentProps = {
  title?: string;
} & ComponentProps<"div">;

export default function PageContent({
  title,
  className,
  children,
  ...rest
}: PageContentProps) {
  return (
    <div className={twMerge("w-full", className)} {...rest}>
      {title && (
        <>
          <PageTitleWithDivider as={"h2"}>{title}</PageTitleWithDivider>
        </>
      )}
      {children}
    </div>
  );
}
