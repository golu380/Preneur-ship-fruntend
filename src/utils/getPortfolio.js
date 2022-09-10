import axios from "axios";

const getPortfolio = async () => {
  try {
    const r = await axios.get("https://10doshi12.pythonanywhere.com/api/portfolio/", {
      headers: {
        Authorization: "Token " + localStorage.getItem("access_token"),
      },
    });
    return r.data;
  } catch (e) {
    if (e.response && e.response.data) {
      return e.response.data;
    }
  }
};

export default getPortfolio;
