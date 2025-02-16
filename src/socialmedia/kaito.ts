export const getKaitoMindshare = async () => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    "path": "/api/yapper/public_kol_mindshare_leaderboard",
    "method": "GET",
    "params": {
      "duration": "7d",
      "topic_id": "KAITO",
      "top_n": 100
    },
    "body": {}
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
  };

  const response = await fetch("https://hub.kaito.ai/api/v1/gateway/ai", requestOptions);
  const json = await response.json();
  return json;
}