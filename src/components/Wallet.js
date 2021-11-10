import React, { useState } from "react";

export default function Wallet() {
  const [closeWallet, setCloseWallet] = useState(false);
  const cancelWallet = () => {
    setCloseWallet(true);
  };
  return closeWallet ? (
    ""
  ) : (
    <div
      role="presentation"
      className="MuiDialog-root jss2"
      style={{ position: "fixed", zIndex: "1300", inset: "0px" }}
    >
      <div
        className="MuiBackdrop-root"
        aria-hidden="true"
        style={{
          opacity: 1,
          transition: "opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        }}
      ></div>
      <div tabIndex="0" data-test="sentinelStart"></div>
      <div
        className="MuiDialog-container MuiDialog-scrollPaper"
        role="none presentation"
        tabIndex="-1"
        style={{
          opacity: 1,
          transition: "opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        }}
      >
        <div
          className="MuiPaper-root MuiDialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthSm MuiPaper-elevation24 MuiPaper-rounded"
          role="dialog"
        >
          <div className="MuiDialogTitle-root">
            <h2 className="MuiTypography-root MuiTypography-h6">
              Select your wallet
              <button
                className="MuiButtonBase-root MuiIconButton-root"
                tabIndex="0"
                type="button"
                onClick={cancelWallet}
              >
                <span className="MuiIconButton-label">
                  <svg
                    className="MuiSvgIcon-root"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                  </svg>
                </span>
                <span className="MuiTouchRipple-root"></span>
              </button>
            </h2>
          </div>
          <div className="MuiDialogContent-root">
            <ul className="MuiList-root MuiList-padding">
              <li className="MuiListItem-root MuiListItem-gutters">
                <button
                  className="MuiButtonBase-root MuiButton-root MuiButton-text"
                  tabIndex="0"
                  type="button"
                >
                  <span className="MuiButton-label">
                    Phantom
                    <span className="MuiButton-endIcon MuiButton-iconSizeMedium">
                      <img
                        src="https://raw.githubusercontent.com/solana-labs/wallet-adapter/master/packages/wallets/icons/phantom.svg"
                        alt="Phantom icon"
                        className="jss4"
                      />
                    </span>
                  </span>
                  <span className="MuiTouchRipple-root"></span>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div tabIndex="0" data-test="sentinelEnd"></div>
    </div>
  );
}
