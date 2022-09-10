import axios from "axios";

export default async function saveSchool(
  qualification,
  qualification_status,
  institution
) {
  try {
    const res = await axios.post(
      `https://10doshi12.pythonanywhere.com/api/school-view/`,
      {
        current_qualification: qualification,
        qualification_status,
        academy_name: institution,
      },
      {
        headers: {
          Authorization: `Token ${localStorage.getItem("access_token")}`,
        },
      }
    );

    return res;
  } catch (e) {
    if (e.response && e.response.data) {
      return e.response.data;
    }
  }
}
