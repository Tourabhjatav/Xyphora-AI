// use global fetch

async function test() {
  const accessKey = "b72142e0-b7bb-4249-862f-1f74d6594cf6";
  const name = "Test";
  const email = "test@example.com";
  
  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
    },
    body: JSON.stringify({
      access_key: accessKey,
      subject: `New Lead from test`,
      from_name: "Xyphora Website",
      replyto: email,
      Name: name,
      Email: email,
      Message: "test",
    }),
  });

  const text = await response.text();
  console.log("Status:", response.status);
  console.log("Response Text:", text.substring(0, 500));
}

test();
