import React, { useEffect, useRef } from "react";

import "./WebMenu.css";

/**
 * Component for embedding web hosted menus
 * The webview methods in the reference are all available on webviewRef.current
 * https://electronjs.org/docs/api/webview-tag
 */
export const WebDashboard = () => {
  const webviewRef = useRef(null);

  /**BEGIN HANDLERS**/
  /**
   * Refresh the web content of this menu while bypassing cache
   * Delays based on the index to prevent all menus reloading at once
   * @return {undefined}
   */
  /**END HANDLERS**/
  const injectCss = (webview) => {
    webview.insertCSS();
  };
  //run on component mount
  useEffect(() => {
    const webview = webviewRef.current;
    webview.addEventListener("dom-ready", () => injectCss(webview));

    //run when component un-mounts
    return () => {
      webview.removeEventListener("dom-ready", () => injectCss(webview));
    };
  }, []);

  return (
    <webview
      is
      nodeintegration
      className="fullsize stack"
      src={"https://ezil.me"}
      ref={webviewRef}
    />
  );
};
