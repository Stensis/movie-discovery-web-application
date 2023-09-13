import React from "react";
import Styles from "../../Components/Loading/loading.module.css";

export default function LoadingIndicator() {
  return (
    <div className={Styles.loadingData}>
      <div className={Styles.loadingIcon}></div>
      Loading movies...
    </div>
  );
}
