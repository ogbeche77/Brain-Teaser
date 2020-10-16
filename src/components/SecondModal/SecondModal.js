import React from "react";
import style from "./SecondModal.module.css";

export default class ModalFinal extends React.Component {
    closeModal() {
        document.getElementById("modalfinal").style.visibility = "hidden";
        this.props.reset();
        this.props.start("start");
    }
    render() {
        return (
            <div className={style.modalfinal} id="modalfinal">
                <div>
                    <img src={this.props.image} alt="logo" className={style.image} />
                </div>
                <div className={style.newgamediv}>{this.props.message}</div>
                <button className={style.newgamebutton} onClick={() => this.closeModal()}>
                    New Game
        </button>
            </div>
        );
    }
}
