import * as React from "react";

import "../styles/app.css";

function PageHeader({ title }: PageHeaderProps) {
  return <header className="page-header">{title}</header>;
}

export interface PageHeaderProps {
  title: string;
}

export default PageHeader;
