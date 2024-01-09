console.clear();

const url = "https://swapi.dev/api/people";

export async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    console.log(data.next);
    console.log(data.results[2].eye_color);
  } catch (error) {
    console.error("An Error occurred");
  }
}

fetchData();
