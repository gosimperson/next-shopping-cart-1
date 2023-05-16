import { ReactElement } from "react";

export default function Layout({ children }: { children: ReactElement }) {
  return <div className="w-full px-5 py-10">{children}</div>;
}
