import React from "react";
import style from "./FirstModal.module.css";

export default class Modal extends React.Component {
    closeModal() {
        document.getElementById("modal").style.visibility = "hidden";
        this.props.start("start");
    }
    render() {
        return (
            <div className={style.modal} id="modal">
                <div className={style.newgamediv}>{"Scoober Game"}</div>
                <button className={style.newgamebutton} onClick={() => this.closeModal()}>
                    Start Game
        </button>
            </div>
        );
    }
}
