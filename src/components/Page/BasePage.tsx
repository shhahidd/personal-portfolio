import { PropsWithChildren } from "react";

export default function BasePage({ children }: PropsWithChildren) {
  window.scrollTo(0, 0);

  return (
    <>
      <h1 className="sr-only">{document.title}</h1>
      {children}
    </>
  );
}
