import React, { Component } from "react";
import "./Ads.css";
import callAPI from ".../../API/callAPI";
import ImageDefault from "../../Constants/images";

class Ads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      adsInfor: { datetime: "2021-05-01T00:00", status: false },
      timeEndAds: {
        timerDays: "00",
        timerHours: "00",
        timerMinutes: "00",
        timerSeconds: "00",
      },
    };
  }

  componentDidMount() {
    callAPI("ads", "GET", null).then((res) => {
      if (res.data.status === true) {
        this.setState({
          adsInfor: res.data,
        });
      }
    });
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    const countdownDate = new Date(this.state.adsInfor.datetime).getTime();
    const now = new Date().getTime();
    const distance = countdownDate - now;
    if (distance < 0) {
      // stop timer
      clearInterval(this.timerID);
    } else {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      this.setState({
        timeEndAds: {
          timerDays: days,
          timerHours: hours,
          timerMinutes: minutes,
          timerSeconds: seconds,
        },
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.adsInfor.status === true ? (
          <div>
            <div className="container text-run">
              <marquee behavior="scroll" scrollamount="12">
                <h3>
                  <span className="text-jump">Khuyến mãi rộn ràng!&nbsp;</span>
                  {this.state.adsInfor.textRun}
                </h3>
              </marquee>
            </div>
            <div className="container ads">
              <img
                src={this.state.adsInfor.image}
                className="img-ads"
                alt="Anh quang cao"
              />
              <section>
                <div className="text-center">
                  <p>{this.state.adsInfor.textStandstill}</p>
                  <p>Khuyến mãi còn: </p>
                </div>
                <div className="text-center">
                  <span>{this.state.timeEndAds.timerDays}</span>
                  ngày&nbsp;:&nbsp;
                  <span>{this.state.timeEndAds.timerHours}</span>H&nbsp;:&nbsp;
                  <span>{this.state.timeEndAds.timerMinutes}</span>
                  M&nbsp;:&nbsp;
                  <span>{this.state.timeEndAds.timerSeconds}</span>S
                </div>
              </section>
            </div>
          </div>
        ) : (
          <div className="container ads">
            <img
              src={ImageDefault.sldZero}
              className="img-ads"
              alt="Anh quang cao"
            />
            <h2
              style={{
                display: "flex",
                justifySelf: "center",
                alignSelf: "center",
              }}
            >
              Hiện tại chưa có khuyến mãi!
            </h2>
          </div>
        )}
      </div>
    );
  }
}

export default Ads;