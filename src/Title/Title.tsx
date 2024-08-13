import { FC, PropsWithChildren } from "react";

export const Title: FC<PropsWithChildren> = ({ children }) => {
  return (
    <h1 className="text-3xl font-bold underline text-center">{children}</h1>
  );
};
