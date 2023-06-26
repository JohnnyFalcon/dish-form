export interface FormInputs {
  name: string;
  preparation_time: string;
  type: "pizza" | "soup" | "sandwich" | "";
  spiciness_scale?: number;
  no_of_slices?: number;
  diameter?: number;
  slices_of_bread?: number;
}
