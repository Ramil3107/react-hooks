import React from "react";
import { useAlert } from "./AlertContext";

export default function Alert () {

const alert = useAlert()


if(!alert.visible) return null

    return (
        <div style={{background:"purple", color:"white", padding:"5px"}} onClick={alert.hide}>
            {alert.text}
        </div>
    )
}