import React from 'react';
import classes from './Clock.css'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { time: new Date() };
        this.radius = this.props.size / 2;
        this.drawingContext = null;
        this.draw24hour = this.props.timeFormat.toLowerCase().trim() === "24hour";
        this.drawRoman = !this.draw24hour && this.props.hourFormat.toLowerCase().trim() === "roman";
    }

    componentDidMount() {
        this.getDrawingContext();
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    getDrawingContext() {
        this.drawingContext = this.refs.clockCanvas.getContext('2d');
        this.drawingContext.translate(this.radius, this.radius);
        this.radius *= 0.9;
    }

    tick() {
        this.setState({ time: new Date() });
        const radius = this.radius;
        let ctx = this.drawingContext;
        this.drawFace(ctx, radius);
        this.drawNumbers(ctx, radius);
        this.drawTicks(ctx, radius);
        this.drawTime(ctx, radius);
    }

    drawFace(ctx, radius) {
        ctx.beginPath();
        ctx.arc(0, 0, radius, 0, 2 * Math.PI);
        ctx.fillStyle = "#D1D2D6";
        ctx.fill();

        ctx.strokeStyle = "#494370";
        ctx.lineWidth = radius * 0.1;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(0, 0, radius * 0.05, 0, 2 * Math.PI);
        ctx.fillStyle = "#333";
        ctx.fill();
    }

    drawNumbers(ctx, radius) {
        const romans = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
        const fontBig = radius * 0.15 + "px Arial";
        let ang, num;

        ctx.textBaseline = "middle";
        ctx.textAlign = "center";
        for (num = 1; num < 13; num++) {
            ang = num * Math.PI / 6;
            ctx.rotate(ang);
            ctx.translate(0, -radius * 0.78);
            ctx.rotate(-ang);
            ctx.font = fontBig;
            ctx.fillStyle = "black";
            ctx.fillText(this.drawRoman ? romans[num - 1] : num.toString(), 0, 0);
            ctx.rotate(ang);
            ctx.translate(0, radius * 0.78);
            ctx.rotate(-ang);


        }
    }

    drawTicks(ctx, radius) {
        let numTicks, tickAng, tickX, tickY;

        for (numTicks = 0; numTicks < 60; numTicks++) {

            tickAng = (numTicks * Math.PI / 30);
            tickX = radius * Math.sin(tickAng);
            tickY = -radius * Math.cos(tickAng);

            ctx.beginPath();
            ctx.lineWidth = radius * 0.010;
            ctx.moveTo(tickX, tickY);
            if (numTicks % 5 === 0) {
                ctx.lineTo(tickX * 0.88, tickY * 0.88);
            } else {
                ctx.lineTo(tickX * 0.92, tickY * 0.92);
            }
        }
    }

    drawTime(ctx, radius) {
        const now = this.state.time;
        let hour = now.getHours();
        let minute = now.getMinutes();
        let second = now.getSeconds();

        // hour
        hour %= 12;
        hour = (hour * Math.PI / 6) + (minute * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60));
        this.drawHand(ctx, hour, radius * 0.5, radius * 0.05);
        // minute
        minute = (minute * Math.PI / 30) + (second * Math.PI / (30 * 60));
        this.drawHand(ctx, minute, radius * 0.6, radius * 0.05);
        // second
        second = (second * Math.PI / 30);
        this.drawHand(ctx, second, radius * 0.7, radius * 0.02);
    }

    drawHand(ctx, position, length, width, color) {
        color = color || "#454068";
        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.lineCap = "round";
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
        ctx.moveTo(0, 0);
        ctx.rotate(position);
        ctx.lineTo(0, -length);
        ctx.stroke();
        ctx.rotate(-position);
    }

    render() {
        return (
            <div className={classes.box} title="Clock">
                <canvas
                    width={this.props.size}
                    height={this.props.size}
                    style={{ width: String(this.props.size / 2) + 'px' }}
                    className={classes.Clock} ref="clockCanvas"
                    id="CCC" />
            </div>
        );
    }
}
export default Clock;
