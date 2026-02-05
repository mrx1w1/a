(async () => {
  // 1️⃣ Fetch sellers home
  const homeHtml = await (await fetch("https://www.bark.com/sellers/home/")).text();

  // 2️⃣ Extract dynamic company link
  const path = homeHtml.match(/href="(\/en\/gb\/company\/[^"]+)"/)?.[1];
  if (!path) return alert("Company link not found");

  const companyUrl = "https://www.bark.com" + path;
  console.log("Company URL:", companyUrl);

  // 3️⃣ Fetch company page
  const companySrc = await (await fetch(companyUrl)).text();

  // 4️⃣ Extract JWT
  const jwt = companySrc.match(/env\.JWT\s*=\s*['"]([^'"]+)['"]/)?.[1];
  if (!jwt) return alert("JWT not found");

  console.log("JWT:", jwt);

  // 5️⃣ Decode JWT payload
  const payloadBase64 = jwt.split(".")[1];
  const payloadJson = JSON.parse(
    atob(payloadBase64.replace(/-/g, "+").replace(/_/g, "/"))
  );

  // 6️⃣ Get aud
  const aud = payloadJson.aud;

  alert(jwt)


})();

