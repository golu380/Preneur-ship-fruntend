import axios from "axios";

const getConfiguration = async () => {
  try {
    const r = await axios.get("https://10doshi12.pythonanywhere.com/api/configuration-view/", {
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

export default getConfiguration;