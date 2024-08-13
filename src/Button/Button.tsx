import { FC, PropsWithChildren } from "react";

export const Button: FC<PropsWithChildren> = ({ children }) => {
  return (
    <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">{children}</button>
  );
};
