import { ReactNode, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

export const withRouter = (Component: () => ReactNode) => () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading</div>}>{Component()}</Suspense>
    </BrowserRouter>
  );
};
