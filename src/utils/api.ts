// Endpoint a ser acessado ( ENDPOINT: Locais específicos da API )
const url = "https://jsearch.p.rapidapi.com/search";

interface getJobsParams {
  searchInput?: string;
}

function jobUrlSetter({ searchInput }: getJobsParams) {
  const urlParams = new URLSearchParams();

  if (searchInput) {
    urlParams.append("query", searchInput);
  } else {
    urlParams.append("query", "developer");
  }

  return url + "?" + urlParams;
}

export async function getJobs({ searchInput }: getJobsParams) {
  try {
    const searchURL = jobUrlSetter({ searchInput });
    const response = await fetch(searchURL, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
        "x-rapidapi-host": "jsearch.p.rapidapi.com",
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    const jobList = data.data;
    return jobList;
  } catch (error) {
    throw error;
  }
}
