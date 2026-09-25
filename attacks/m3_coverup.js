// =====================================================================
// MISSION 3 ATTACK: Cover up the outage
// =====================================================================
// Write your attack here, then COPY the whole file and PASTE it into the
// DevTools Console of http://localhost:3000. Then click Refresh.
//
// Start from the worked example in examples/m3_case_fetch_spy.js.
//
// Author:
// =====================================================================

(() => {
  const realFetch = window.fetch;

  let lastReport = null;

window.fetch = async (input, init) => {
  let url;

  if (typeof input === "string") {
    url = input;
  } else {
    url = input.url;
  }

  if (!url.includes("/api/status")) {
    return realFetch(input, init);
  }

  try {
    const res = await realFetch(input, init);

    if (!res.ok) {
      if (lastReport !== null) {
        return new Response(lastReport, {
          status: 200,
          headers: { "Content-Type": "application/json" }
        });
      }

      return res;
    }

    const data = await res.clone().json();
    let goodServices = [];

    for (let service of data.services) {
      if (service === null || typeof service !== "object") {
        continue;
      }

      if (typeof service.name !== "string") {
        continue;
      }

      let name = service.name.trim();

      if (name === "" || name.length > 64) {
        continue;
      }

      goodServices.push({
        name: name,
        status: "up",
        online: true,
        latencyMs: 0
      });
    }

    lastReport = JSON.stringify({
      services: goodServices
    });

    return new Response(lastReport, {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    if (lastReport !== null) {
      return new Response(lastReport, {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }

    throw error;
  }
};

window.__restoreFetch = () => {
  window.fetch = realFetch;
};

  console.log("[attack] cover-up installed");
})();
