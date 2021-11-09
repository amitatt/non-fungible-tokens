import React from "react";

export default function Body() {
  return (
    <div>
      <div className="app-container">
          <div className="section main-section">
          <div className = "container">
              <div className="row">
              <div className="col-4 w-full-img">
                <img
                  alt="NFT name"
                  src="https://falleneclipse.vercel.app/logo.png"
                />
              </div>
              <div className="col-4 w-full-txt flex flex-col">
                <p className="title text-2xl font-bold">
                  Today, we proudly present{" "}
                  <span className="font-bold">Demo</span>, the most Swaggy NFT
                  ever!
                </p>
                <p className="mt-3 ">
                  Demo are fun, quirky and eccentric and have now adapted so
                  much that each of them is unique and rare.
                </p>
                <main className="mt-6 home-container items-center">
                  <p className="text-lg font-bold text-white text-opacity-90 text-center">
                    Demo Will be minting soon!
                  </p>
                  <div className="sc-dkPtRN ikczMY mt-6 text-centered">
                    <button
                      className="MuiButtonBase-root MuiButton-root MuiButton-contained sc-bdvvtL jOqoQl MuiButton-containedPrimary"
                      tabIndex="0"
                      type="button"
                    >
                      <span className="MuiButton-label">Connect Wallet</span>
                      <span className="MuiTouchRipple-root"></span>
                    </button>
                  </div>
                </main>
                <button
                  className="MuiButtonBase-root MuiButton-root MuiButton-contained mt-6 text-centered button"
                  tabIndex="0"
                  type="button"
                >
                  <span className="MuiButton-label">Another button</span>
                  <span className="MuiTouchRipple-root"></span>
                </button>
                </div>
              </div>
              </div>
              </div>
          </div>
    </div>
  );
}
