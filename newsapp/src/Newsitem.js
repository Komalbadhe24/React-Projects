import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } =
      this.props;
    return (
   
        <div className="card" style={{position:'relative'}}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0px",
            }}
          >
            <span
              className="position-absolute  translate-middle badge rounded-pill bg-danger"
            >
              {source}
            </span>
          </div>
          <img
            src={
              !imgUrl
                ? "https://images.news18.com/ibnlive/uploads/2024/03/sensex-surges-over-550-points-nifty-tops-18000-on-easing-rate-hike-worries-all-eyes-on-tcs-earnings-2024-03-1d9c725416b80b4f761295ffded2d760-16x9.jpg?impolicy=website&width=1200&height=675"
                : imgUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More..
            </a>
            <p className="card-text">
              <small class="text-body-secondary">
                by {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
          </div>
        </div>
     
    );
  }
}

export default Newsitem;
