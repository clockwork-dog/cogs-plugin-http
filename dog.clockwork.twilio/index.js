const { CogsConnection } = COGS;

const VALID_NAMES = ["Eyal", "Tom", "Alex", "Sam", "Chet"];

let accountSID = "";
let authToken = "";
let flowID = "";
let toEyal = "";
let toTom = "";
let toAlex = "";
let toSam = "";
let toChet = "";
let from = "";

const cogsConnection = new CogsConnection();

function connectToWsServer() {}

// Sync config
cogsConnection.addEventListener("config", (event) => {
  const config = event.detail;

  if (config["Account SID"]) {
    accountSID = config["Account SID"];
  }
  if (config["Auth Token"]) {
    authToken = config["Auth Token"];
  }
  if (config["Flow ID"]) {
    flowID = config["Flow ID"];
  }
  if (config["Eyal Number"]) {
    toEyal = config["Eyal Number"];
  }
  if (config["Tom Number"]) {
    toTom = config["Tom Number"];
  }
  if (config["Alex Number"]) {
    toAlex = config["Alex Number"];
  }
  if (config["Sam Number"]) {
    toSam = config["Sam Number"];
  }
  if (config["Chet Number"]) {
    toChet = config["Chet Number"];
  }
  if (config["From"]) {
    from = config["From"];
  }
});

// Events from COGS
cogsConnection.addEventListener("event", async (event) => {
  const { key, value } = event.detail;

  if (key === "Execute Flow") {
    const [name, offerStr] = value.split(":");
    const offer = parseInt(offerStr);

    if (VALID_NAMES.includes(name) && !isNaN(offer)) {
      const path = `https://studio.twilio.com/v2/Flows/${flowID}/Executions`;
      const basicAuth = `Basic ${btoa(`${accountSID}:${authToken}`)}`;

      const to =
        name === "Eyal"
          ? toEyal
          : name === "Tom"
          ? toTom
          : name === "Alex"
          ? toAlex
          : name === "Sam"
          ? toSam
          : name === "Chet"
          ? toChet
          : "";

      const formData = new FormData();
      formData.append("To", to);
      formData.append("From", from);
      formData.append("Parameters", JSON.stringify({ name, offer }));

      try {
        const response = await fetch(path, {
          method: "POST",
          headers: {
            Authorization: basicAuth,
          },
          body: formData,
        });

        console.log("Response", {
          statusCode: response.status,
          statusText: response.statusText,
        });
      } catch (e) {
        console.warn("Failed to execute flow", e.toString());
      }
    }
  }
});

// const ws = new WebSocket("ws://127.0.0.1:6789");

// ws.addEventListener("open", () => {
//   console.log("WS open");
// });

// ws.addEventListener("message", (event) => {
//   const parts = event.data.split("/");
//   if (parts.length === 2 && parts[0] === "twilio") {
//     cogsConnection.sendEvent("HTTP request received", parts[1]);
//   }
// });
