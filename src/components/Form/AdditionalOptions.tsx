import { FormControlSt, TextFieldStyled } from "./styles";

type Props = {
  dishType: string;
  register: any;
  errors: any;
};

export const AdditionalOptions = ({ dishType, register, errors }: Props) => {
  switch (dishType) {
    case "Pizza":
      return (
        <>
          <FormControlSt>
            <TextFieldStyled
              sx={{
                "& legend": {
                  width: "8rem"
                }
              }}
              type="number"
              inputProps={{ min: 1 }}
              label="Number of slices"
              variant="outlined"
              autoComplete="off"
              {...register("no_of_slices", {
                required: "This field is required."
              })}
              error={!!errors.no_of_slices}
              helperText={errors.no_of_slices?.message}
            />
          </FormControlSt>
          <FormControlSt>
            <TextFieldStyled
              sx={{
                "& legend": {
                  width: "4.5rem"
                }
              }}
              type="number"
              inputProps={{ step: 0.1, min: 1 }}
              label="Diamiter"
              variant="outlined"
              autoComplete="off"
              {...register("diameter", {
                required: "This field is required."
              })}
              error={!!errors.diameter}
              helperText={errors.diameter?.message}
            />
          </FormControlSt>
        </>
      );
    case "Soup":
      return (
        <FormControlSt>
          <TextFieldStyled
            variant="outlined"
            autoComplete="off"
            sx={{
              "& legend": {
                width: "7.5rem"
              }
            }}
            type="number"
            inputProps={{ min: 1, max: 10 }}
            label="Spiciness scale"
            {...register("spiciness_scale", {
              required: "This field is required."
            })}
            error={!!errors.spiciness_scale}
            helperText={errors.spiciness_scale?.message}
          />
        </FormControlSt>
      );
    case "Sandwich":
      return (
        <FormControlSt>
          <TextFieldStyled
            sx={{
              "& legend": {
                width: "12rem"
              }
            }}
            type="number"
            inputProps={{ min: 1 }}
            label="Number of slices of bread"
            variant="outlined"
            autoComplete="off"
            {...register("slices_of_bread", {
              required: "This field is required."
            })}
            error={!!errors.slices_of_bread}
            helperText={errors.slices_of_bread?.message}
          />
        </FormControlSt>
      );
    default:
      return <></>;
  }
};
