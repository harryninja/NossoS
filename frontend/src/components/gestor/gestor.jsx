import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./gestor.css";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import axios from "axios";
import {
  useForm,
  FormProvider,
  Controller,
  useFormContext,
} from "react-hook-form";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF8401",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Evento", "Orçamento", "Estrutura", "Elementos", "Multimidia", "Promoter & Buffet", "Referências", "ETAPA LIVRE"];
}

const EventoInformation = () => {
  const { control } = useFormContext();
  const [alignment, setAlignment] = useState("open");
  const [value, setValue] = useState("project");
  const [checked, setChecked] = useState(false);
  const [text, setText] = useState("");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleChange2 = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div className="first-div">
        <label>
          É um evento? Se sim, qual?
          <Controller
            control={control}
            name="eventName"
            render={({ field }) => (
              <TextField
                id="input-event"
                variant="outlined"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </label>
        <div className="distance"></div>
        <label>
          Qual cidade?
          <Controller
            control={control}
            name="eventCity"
            render={({ field }) => (
              <TextField
                id="input-city"
                variant="outlined"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </label>
      </div>
      <div className="second-div">
        <label className="label-btn">
          Se tiver projeto, anexar
          <br />
          <br />
          <Button variant="contained" component="label" id="btn-upload">
            Arquivo
            <input type="file" hidden />
          </Button>
        </label>
        <div className="distance"></div>
        <label>
          Qual local?
          <Controller
            control={control}
            name="eventPlace"
            render={({ field }) => (
              <TextField
                id="input-place"
                variant="outlined"
                fullWidth
                margin="normal"
                {...field}
              />
            )}
          />
        </label>
      </div>
      <div className="third-div">
        <FormControl className="form-options">
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            onChange={handleChange2}
            value={value}
          >
            <FormControlLabel
              value="project"
              control={<Radio />}
              label="Preciso de um projeto"
              onChange={() => {
                if (checked) {
                  setChecked(!checked);
                }
              }}
            />
            <FormControlLabel
              value="project-montagem"
              control={<Radio />}
              label="Preciso de um projeto + montadora"
              onChange={() => {
                if (checked) {
                  setChecked(!checked);
                }
              }}
            />
            <FormControlLabel
              value="montagem"
              control={<Radio />}
              label="Preciso de montagem"
              onChange={() => {
                if (checked) {
                  setChecked(!checked);
                }
              }}
            />
            <FormControlLabel
              value="outro-option"
              control={<Radio />}
              label="Outro"
              type="checkbox"
              defaultChecked={checked}
              onChange={() => {
                if (checked) {
                  setText("");
                }
                setChecked(!checked);
              }}
            />
            <Controller
              control={control}
              name="outro"
              render={({ field }) => (
                <TextField
                  id="input-place"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  type="text"
                  disabled={!checked}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  {...field}
                />
              )}
            />
          </RadioGroup>
        </FormControl>
        <div className="distance"></div>
        <div className="options-toggle">
          <ThemeProvider theme={theme}>
            <ToggleButtonGroup
              color="primary"
              // className="toggle-option"
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
            >
              <ToggleButton value="open">Abrir concorrência</ToggleButton>
              <ToggleButton value="mont">Indicar montadora</ToggleButton>
            </ToggleButtonGroup>
          </ThemeProvider>
        </div>
      </div>
    </>
  );
};
const OrcamentoInformation = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="emailAddress"
        render={({ field }) => (
          <TextField
            id="email"
            label="E-mail"
            variant="outlined"
            placeholder="Enter Your E-mail Address"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />

      <Controller
        control={control}
        name="phoneNumber"
        render={({ field }) => (
          <TextField
            id="phone-number"
            label="Phone Number"
            variant="outlined"
            placeholder="Enter Your Phone Number"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="alternatePhone"
        render={({ field }) => (
          <TextField
            id="alternate-phone"
            label="Alternate Phone"
            variant="outlined"
            placeholder="Enter Your Alternate Phone"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};
const EstruturaInformation = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="address1"
        render={({ field }) => (
          <TextField
            id="address1"
            label="Address 1"
            variant="outlined"
            placeholder="Enter Your Address 1"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="address2"
        render={({ field }) => (
          <TextField
            id="address2"
            label="Address 2"
            variant="outlined"
            placeholder="Enter Your Address 2"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="country"
        render={({ field }) => (
          <TextField
            id="country"
            label="Country"
            variant="outlined"
            placeholder="Enter Your Country Name"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};

const ElementosInformation = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="cardNumber"
        render={({ field }) => (
          <TextField
            id="cardNumber"
            label="Card Number"
            variant="outlined"
            placeholder="Enter Your Card Number"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="cardMonth"
        render={({ field }) => (
          <TextField
            id="cardMonth"
            label="Card Month"
            variant="outlined"
            placeholder="Enter Your Card Month"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="cardYear"
        render={({ field }) => (
          <TextField
            id="cardYear"
            label="Card Year"
            variant="outlined"
            placeholder="Enter Your Card Year"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};

const MultimidiaInformation = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="cardNumber"
        render={({ field }) => (
          <TextField
            id="cardNumber"
            label="Card Number"
            variant="outlined"
            placeholder="Enter Your Card Number"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="cardMonth"
        render={({ field }) => (
          <TextField
            id="cardMonth"
            label="Card Month"
            variant="outlined"
            placeholder="Enter Your Card Month"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="cardYear"
        render={({ field }) => (
          <TextField
            id="cardYear"
            label="Card Year"
            variant="outlined"
            placeholder="Enter Your Card Year"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};

const BuffetInformation = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="cardNumber"
        render={({ field }) => (
          <TextField
            id="cardNumber"
            label="Card Number"
            variant="outlined"
            placeholder="Enter Your Card Number"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="cardMonth"
        render={({ field }) => (
          <TextField
            id="cardMonth"
            label="Card Month"
            variant="outlined"
            placeholder="Enter Your Card Month"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="cardYear"
        render={({ field }) => (
          <TextField
            id="cardYear"
            label="Card Year"
            variant="outlined"
            placeholder="Enter Your Card Year"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};

const ReferenceInformation = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="cardNumber"
        render={({ field }) => (
          <TextField
            id="cardNumber"
            label="Card Number"
            variant="outlined"
            placeholder="Enter Your Card Number"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="cardMonth"
        render={({ field }) => (
          <TextField
            id="cardMonth"
            label="Card Month"
            variant="outlined"
            placeholder="Enter Your Card Month"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="cardYear"
        render={({ field }) => (
          <TextField
            id="cardYear"
            label="Card Year"
            variant="outlined"
            placeholder="Enter Your Card Year"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};

const FreeInformation = () => {
  const { control } = useFormContext();
  return (
    <>
      <Controller
        control={control}
        name="cardNumber"
        render={({ field }) => (
          <TextField
            id="cardNumber"
            label="Card Number"
            variant="outlined"
            placeholder="Enter Your Card Number"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="cardMonth"
        render={({ field }) => (
          <TextField
            id="cardMonth"
            label="Card Month"
            variant="outlined"
            placeholder="Enter Your Card Month"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
      <Controller
        control={control}
        name="cardYear"
        render={({ field }) => (
          <TextField
            id="cardYear"
            label="Card Year"
            variant="outlined"
            placeholder="Enter Your Card Year"
            fullWidth
            margin="normal"
            {...field}
          />
        )}
      />
    </>
  );
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return <EventoInformation />;
    case 1:
      return <OrcamentoInformation />;
    case 2:
      return <EstruturaInformation />;
    case 3:
      return <ElementosInformation />;
    case 4:
      return <MultimidiaInformation />;
    case 5:
      return <BuffetInformation />;
    case 6:
      return <ReferenceInformation />;
    case 7:
      return <FreeInformation />;
    default:
      return "unknown step";
  }
}

const FluxoGestor = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();
  const methods = useForm({
    defaultValues: {
      eventName: "",
      eventCity: "",
      eventPlace: "",
      outro: "",
      toggleOption: "",
      emailAddress: "",
      phoneNumber: "",
      alternateNumber: "",
      address1: "",
      address2: "",
      country: "",
      cardNumber: "",
      cardMonth: "",
      cardYear: "",
    },
  });

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
    if (activeStep === steps.length - 1) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
          console.log(data);
          setActiveStep(activeStep + 1);
        });
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
    }
    // setActiveStep(activeStep + 1);
    // setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  return (
    <div className="MuiBox-root-2">
      <h2>Vamos falar sobre seu evento...</h2>
      <Stepper className="Step" alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block", backgroundColor: "#fafafa" }}
              ></Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}></StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
        </Typography>
      ) : (
        <>
          <FormProvider {...methods}>
            <form className="FormBox" onSubmit={methods.handleSubmit(handleNext)}>
              {getStepContent(activeStep)}
              <Button
                className={classes.button}
                disabled={activeStep === 0}
                onClick={handleBack}
              >
                back
              </Button>
              {isStepOptional(activeStep) && (
                <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  onClick={handleSkip}
                >
                  skip
                </Button>
              )}
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
                // onClick={handleNext}
                type="submit"
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default FluxoGestor;
