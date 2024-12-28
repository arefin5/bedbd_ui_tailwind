// "use client"
// import { useState, useEffect } from "react";

// export default function FacebookLogin() {
//   const [statusMessage, setStatusMessage] = useState("Please log into this app.");
//   const [userName, setUserName] = useState("");

//   useEffect(() => {
//     // Load Facebook SDK
//     const loadFacebookSDK = () => {
//       window.fbAsyncInit = function () {
//         FB.init({
//           appId: "1082039449943319", // Replace with your Facebook App ID
//           cookie: true,
//           xfbml: true,
//           // version: "{api-version}", // Replace with your API version, e.g., "v12.0";
//           version: "v20.0", // Replace with your API version, e.g., "v12.0"

//         });

//         FB.getLoginStatus((response) => {
//           statusChangeCallback(response);
//         });
//       };

//       // Asynchronously load the SDK script
//       const d = document;
//       const s = "script";
//       const id = "facebook-jssdk";
//       if (!d.getElementById(id)) {
//         const js = d.createElement(s);
//         js.id = id;
//         js.src = "https://connect.facebook.net/en_US/sdk.js";
//         d.getElementsByTagName("head")[0].appendChild(js);
//       }
//     };

//     loadFacebookSDK();
//   }, []);

//   const statusChangeCallback = (response) => {
//     console.log("statusChangeCallback", response);

//     if (response.status === "connected") {
//       testAPI();
//     } else {
//       setStatusMessage("Please log into this app.");
//     }
//   };

//   const checkLoginState = () => {
//     FB.getLoginStatus((response) => {
//       statusChangeCallback(response);
//     });
//   };

//   const testAPI = () => {
//     console.log("Fetching user information...");
//     FB.api("/me", { fields: "name,email" }, (response) => {
//       console.log("Successful login for:", response.name);
//       setUserName(response.name);
//       setStatusMessage(`Thanks for logging in, ${response.name}!`);
//     });
//   };

//   return (
//     <div>
//       <h1>Facebook</h1>
//       {/* Facebook Login Button */}
//       <div
//         className="fb-login-button"
//         data-width=""
//         data-size="large"
//         data-button-type="login_with"
//         data-layout="default"
//         data-auto-logout-link="false"
//         data-use-continue-as="true"
//         data-scope="public_profile,email"
//         data-onlogin="checkLoginState();"
//       ></div>

//       {/* Status Message */}
//       <div id="status">
//         {statusMessage} {userName && <p>Welcome, {userName}!</p>}
//       </div>
//     </div>
//   );
// }
"use client";
import { useState, useEffect } from "react";

export default function FacebookLogin() {
  const [statusMessage, setStatusMessage] = useState("Please log into this app.");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const loadFacebookSDK = () => {
      window.fbAsyncInit = function () {
        FB.init({
          appId: "924701505819708", // Replace with your Facebook App ID
          cookie: true,
          xfbml: true,
          version: "v21.0",
        });

        FB.getLoginStatus((response) => {
          statusChangeCallback(response);
        });
      };

      const d = document;
      const s = "script";
      const id = "facebook-jssdk";
      if (!d.getElementById(id)) {
        const js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        d.getElementsByTagName("head")[0].appendChild(js);
      }
    };

    // Expose checkLoginState globally
    window.checkLoginState = () => {
      if (window.FB) {
        FB.getLoginStatus((response) => {
          statusChangeCallback(response);
        });
      }
    };

    loadFacebookSDK();
  }, []);

  const statusChangeCallback = (response) => {
    console.log("statusChangeCallback", response);

    if (response.status === "connected") {
      testAPI();
    } else {
      setStatusMessage("Please log into this app.");
    }
  };

  const testAPI = () => {
    console.log("Fetching user information...");
    if (window.FB) {
      FB.api("/me", { fields: "name,email" }, (response) => {
        console.log("Successful login for:", response.name);
        setUserName(response.name);
        setStatusMessage(`Thanks for logging in, ${response.name}!`);
      });
    }
  };

  return (
    <div>
      <h1>Facebook</h1>
      {/* Facebook Login Button */}
      <div
        className="fb-login-button"
        data-width=""
        data-size="large"
        data-button-type="login_with"
        data-layout="default"
        data-auto-logout-link="false"
        data-use-continue-as="true"
        data-scope="public_profile,email"
        data-onlogin="checkLoginState();"
      >login Fb</div>

      {/* Status Message */}
      <div id="status">
        {statusMessage} {userName && <p>Welcome, {userName}!</p>}
      </div>
    </div>
  );
}
