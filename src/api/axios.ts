import axios from "axios";

import { FormInputs } from "../components/Form/Form.types";

export async function createDish(
  submittedData: FormInputs,
  setSubmitErorr: (value: boolean) => void,
  setLoading: (value: boolean) => void
) {
  setLoading(true);
  try {
    //  "https://jsonplaceholder.typicode.com/todos"
    const { data, status } = await axios.post<FormInputs>(
      "https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes",
      {
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(submittedData)
      }
    );
    setLoading(false);
    console.log(status);
    console.log(data);
    return data;
  } catch (error) {
    setSubmitErorr(true);
    setLoading(false);
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}
