import React from "react";
import Styles from "./empty.module.css";

export function EmptyData() {
  return <div className={Styles.emptyView}>Sorry, no movies found.</div>;
}
