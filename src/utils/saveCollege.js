import axios from "axios";

export default async function saveCollege(
    course,
    specification,
    institute,
    prior_edu
) {
  try {
    const res = await axios.post(
      `https://10doshi12.pythonanywhere.com/api/college-view/`,
      {
        course_name: course,
        specification_in: specification,
        collage_name: institute,
        add_previous_education: prior_edu
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
