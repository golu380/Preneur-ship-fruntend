import axios from "axios";

export default async function savePartnerProfile(
  photo,
  email,
  name,
  bio,
  skills,
  phone
) {
  try {
    const res = await axios.post(
      `https://10doshi12.pythonanywhere.com/api/configuration-view/`,
      {
        image: photo,
        name,
        mob_no: phone,
        bio,
        add_skills: skills,
        Email: email,
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
