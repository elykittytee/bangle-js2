*Run this in the espruino IDE later*

require("Storage").write("siptrackerclk.info",{
  "id":"h2osiptracker",
  "name":"Water Sip Tracker Clock",
  "type":"clock",
  "src":"siptrackerclk.app.js"
});
