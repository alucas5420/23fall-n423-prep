import React from "react";
import styles from "@/styles/Grid.module.css";

export default function Grid(props) {
    // console.log(props);
    return (
        <>
        <div className={styles.grid}>
            {props.header}
        </div>
        </>
    )
}