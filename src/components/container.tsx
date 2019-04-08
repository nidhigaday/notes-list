import * as React from "react";

import "../styles/app.css";

function AppContainer({ children }: ContainerProps) {
  return <div className="app-container">{children}</div>;
}

export interface ContainerProps extends React.ComponentProps<any> {}

export default AppContainer;
