async function getData() {
  let res = await fetch (
    "https://api.lyrics.ovh/v1/artist/title"
  );
  let data = await res.json();
  console.log(data);
}