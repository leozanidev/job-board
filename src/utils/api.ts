// Endpoint a ser acessado ( ENDPOINT: Locais específicos da API )
const url = "https://remotive.com/api/remote-jobs";
interface getJobsParams {
  searchInput?: string;
  category?: string;
}

function jobUrlSetter({ searchInput, category }: getJobsParams) {
  const urlParams = new URLSearchParams();

  if (searchInput) {
    urlParams.append("search", searchInput);
  }
  if (category) {
    urlParams.append("category", category);
  }

  return url + "?" + urlParams;
}

export async function getJobs({ searchInput, category }: getJobsParams) {
  try {
    const searchURL = jobUrlSetter({ searchInput, category });
    const response = await fetch(searchURL);
    const data = await response.json();
    const jobsList = data.jobs;
    return jobsList;
  } catch (error) {
    throw error;
  }
}
