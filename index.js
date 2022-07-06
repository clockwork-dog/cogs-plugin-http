const { CogsConnection } = COGS;

const cogsConnection = new CogsConnection();
cogsConnection.addEventListener("event", (event) => {
  const { key, value } = event.detail;

  if (key === "GET" || key == "POST") {
    fetch(value, { method: key, mode: "no-cors" });
  }
});
