
import {
  Box,
  MenuItem,
  Typography,
  Alert,
  Snackbar,
  CircularProgress
} from "@mui/material";
import styles from "./form.module.css";
import { TextFieldStyled, FormControlSt, ButtonStyled } from "./styles";
import { useState } from "react";
import { FormInputs } from "./Form.types";
import { useForm, SubmitHandler } from "react-hook-form";
import { AdditionalOptions } from "./AdditionalOptions";

import { createDish } from "../../api/axios";
const Form = () => {
  const [time, setTime] = useState<string>("00:00:00");
  const [dishType, setDishType] = useState<string>("");
  const [timeError, setTimeError] = useState<boolean>(false); // useState for additional functionality when time input is equal '00:00:00'. React hook form doesn't treat is like empty field.
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submitErorr, setSubmitErorr] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const { register, handleSubmit, formState, reset } = useForm<FormInputs>({
    defaultValues: {
      name: "",
      preparation_time: "00:00:00",
      type: ""
    }
  });

  const { errors } = formState;
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data);
    createDish(data, setSubmitErorr, setLoading);
    if (!loading) {
      setSubmitted(true);
      setTimeout(() => {
        reset();
        setTime("00:00:00");
        setDishType("");
        setSubmitted(false);
      }, 3000);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box className={styles.Box}>
          <Typography className={styles.Typography} variant="h4">
            Create your dish
          </Typography>
          <FormControlSt role="dish_type">
            <TextFieldStyled
              label="Dish name"
              variant="outlined"
              autoComplete="off"
              {...register("name", {
                required: "This field is required."
              })}
              error={!!errors.name}
              helperText={errors.name?.message}
            />
          </FormControlSt>
          <FormControlSt>
            <TextFieldStyled
              type="time"
              sx={{
                "& legend": {
                  width: "8rem"
                }
              }}
              value={time}
              InputLabelProps={{
                shrink: true
              }}
              inputProps={{ step: 2 }}
              label="Preparation time"
              variant="outlined"
              autoComplete="off"
              {...register("preparation_time", {
                onChange: (e) => {
                  setTime(e.target.value);
                  setTimeError(false);
                },
                required: "This field is required."
              })}
              error={!!errors.preparation_time || timeError}
              helperText={
                errors.preparation_time?.message ||
                (timeError && "This field is required.")
              }
            />
          </FormControlSt>
          <FormControlSt>
            <TextFieldStyled
              label="Dish type"
              select
              value={dishType}
              sx={{
                "& legend": {
                  width: "4.8rem"
                },
                "& .MuiOutlinedInput-input": {
                  width: "13.5rem"
                }
              }}
              {...register("type", {
                onChange: (e) => setDishType(e.target.value),
                required: "This field is required."
              })}
              error={!!errors.type && dishType === ""}
              helperText={dishType === "" && errors.type?.message}
            >
              <MenuItem value="Pizza">Pizza</MenuItem>
              <MenuItem value="Soup">Soup</MenuItem>
              <MenuItem value="Sandwich">Sandwich</MenuItem>
            </TextFieldStyled>
          </FormControlSt>

          <AdditionalOptions
            dishType={dishType}
            register={register}
            errors={errors}
          />
          <ButtonStyled
            variant="contained"
            type="submit"
            onClick={() => time === "00:00:00" && setTimeError(true)}
          >
            Submit
          </ButtonStyled>
          {loading ? (
            <Box sx={{ marginTop: "30px" }}>
              <CircularProgress />
            </Box>
          ) : (
            <Snackbar
              open={submitted}
              sx={{ position: "static", marginTop: "30px" }}
            >
              {submitErorr ? (
                <Alert variant="filled" severity="error" sx={{ width: "100%" }}>
                  Can not add dish due to server error !
                </Alert>
              ) : (
                <Alert
                  variant="filled"
                  severity="success"
                  sx={{ width: "100%" }}
                >
                  Your dish has been added !
                </Alert>
              )}
            </Snackbar>
          )}
        </Box>
      </form>
    </>
  );
};

export default Form;
