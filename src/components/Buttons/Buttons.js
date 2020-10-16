import React from "react";
import style from "./Buttons.module.css";

export default class Buttons extends React.Component {
    render() {
        return (
            <div className={style.buttondiv}>
                <button className={style.bluebutton} onClick={() => this.props.send(-1)}>
                    -1
        </button>
                <button className={style.bluebutton} onClick={() => this.props.send(0)}>
                    0
        </button>
                <button className={style.bluebutton} onClick={() => this.props.send(1)}>
                    1
        </button>
            </div>
        );
    }
}
