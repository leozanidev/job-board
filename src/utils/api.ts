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

export async function getCategories() {
  try {
    const categoriesURL = url + "/categories";
    const response = await fetch(categoriesURL);
    const categoryData = await response.json();
    const categoryList = categoryData.jobs;
    return categoryList;
  } catch (error) {
    throw error;
  }
}

export async function getJobs({ searchInput, category }: getJobsParams) {
  try {
    const searchURL = jobUrlSetter({ searchInput, category });
    const response = await fetch(searchURL);
    const data = await response.json();
    const jobList = data.jobs;
    return jobList;
  } catch (error) {
    throw error;
  }
}
