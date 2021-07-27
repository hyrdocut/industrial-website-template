import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import AOS from "aos";
import routes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import "./assets/sass/main-styles.sass";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
// import styles for wiper
import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.scss";
<script src="https://accounts.google.com/gsi/client" async defer></script>;
// TODO: Add bootstrap
AOS.init();
ReactDOM.render(
    <React.StrictMode>
        {" "}
            <Router>
                <hr />
                <Suspense
                    fallback={
                        <div
                            className="text-center vh-100 vw-100 bg-success text-danger d-flex justify-content-center align-items-center"
                            style={{ fontSize: "800%" }}
                        >
                            Please Wait Hydrocut loading
                        </div>
                    }
                >
                    {routes.map((element, index) => (
                        <> {element}</>
                    ))}
                </Suspense>
            </Router>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
