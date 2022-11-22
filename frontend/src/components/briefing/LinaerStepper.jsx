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
import "./BriefingStyle.css";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Dropdown from 'react-bootstrap/Dropdown';
import axios from "axios";
import {
  useForm,
  FormProvider,
  Controller,
  useFormContext,
} from "react-hook-form";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import color from "material-ui/colors/amber";
import { useNavigate } from "react-router-dom";
import stand1 from '../../images/stand_basico.jpg';
import stand2 from '../../images/stand_misto.jpg';
import stand3 from '../../images/stand_construido.jpg';
import stand4 from '../../images/stand_quiosque.jpg';
import standimg1 from '../../images/stand_1.jpg';
import standimg2 from '../../images/stand_2.jpg';
import standimg3 from '../../images/stand_3.jpg';
import standimg4 from '../../images/stand_4.jpg';

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF8400",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
    background: '#FF8400',
    color: '#FFFFFF',
    marginTop: '80px',
  },
}));

function getSteps() {
  return ["Evento", "Orçamento", "Estrutura", "Elementos", "Multimidia", "Promoter & Buffet", "Referências", "Stand Passados", "Planta Baixa", "ETAPA LIVRE"];
}
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
      return <FileText />;
    case 8:
      return <FilePhoto />;
    case 9:
      return <FreeInformation />;
    case 10:
      return <FreeInformation />;
    default:
      return "unknown step";
  }
}

const EventoInformation = () => {
  const { control } = useFormContext();
  const [alignment, setAlignment] = useState("open");
  const [value, setValue] = useState("project");
  const [checked, setChecked] = useState(false);
  const [text, setText] = useState("");
  const { register } = useForm();

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleChange2 = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div className="Container__Linaer--Stepper">
        <div className="first-div">
          <div>
            <h2 className="title_briefing">Vamos falar sobre seu evento...</h2>
            É um evento? Se sim, qual?
            <Controller
              control={control}
              name="evento"
              render={({ field }) => (
                <TextField
                  name="evento"
                  id="input-event"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  {...register("evento")}
                  placeholder="DEIXE EM BRANCO CASO O SEU STAND NÃO SEJA PARA UM EVENTO"
                  {...field}
                />
              )}
            />
          </div>
          <div className="label-btn">
            Se tiver projeto, anexar
            <br />
            <br />
            <Button variant="contained" component="label" id="btn-upload">
              Arquivo
              <input type="file" hidden />
            </Button>
          </div>
          <div>
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
                      onChange={(e) => setText(e.target.value)}
                      {...field}
                      placeholder="DIGITE O QUE VOCÊ PRECISA"
                    />
                  )}
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>

        <div className="second-div">
          <label>
            <p>Qual cidade?</p>
            <Controller
              control={control}
              name="cidade"
              render={({ field }) => (
                <TextField
                  id="input-city"
                  name="cidade"
                  {...register("cidade")}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  placeholder="PESQUISE A CIDADE"
                  {...field}
                />
              )}
            />
          </label>
          <label>
            <p>Qual local?</p>
            <Controller
              control={control}
              name="local"
              render={({ field }) => (
                <TextField
                  name="local"
                  id="input-place"
                  variant="outlined"
                  {...register("local")}
                  fullWidth
                  margin="normal"
                  {...field}
                  placeholder="PESQUISE O LOCAL"
                />
              )}
            />
          </label>
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
      </div>
    </>
  );
};

const OrcamentoInformation = () => {
  const { control } = useFormContext();
  const { register } = useForm();
  const [value, setValue] = useState("project");
  const [checked, setChecked] = useState(false);
  const [text, setText] = useState("");

  const handleChange2 = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <div className="Container__Linaer--Stepper" style={{ display: 'block' }}>
        <div className="first-div">
          <div>
            <h2 className="title_briefing">Orçamento</h2>
            <div className="container__flex">
              <label>
                <p>Qual a média do seu orçamento?</p>
                <Controller
                  control={control}
                  name="minOrcamento"
                  render={({ field }) => (
                    <TextField
                      className="form__medium"
                      id="min-orcamento"
                      name="minOrcamento"
                      {...register("minOrcamento")}
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      placeholder="Min"
                      {...field}
                      type="number"
                    />
                  )}
                />
              </label>
              <label>
                <p style={{ color: 'transparent' }}>Qual a média do seu orçamento?</p>
                <Controller
                  control={control}
                  name="maxOrcamento"
                  render={({ field }) => (
                    <TextField
                      className="form__medium"
                      id="max-orcamento"
                      name="maxOrcamento"
                      {...register("maxOrcamento")}
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      placeholder="Máx"
                      {...field}
                      type="number"
                    />
                  )}
                />
              </label>

              <label className="form__big">
                <p>Qual prazo máximo para entrega de projeto?</p>
                <Controller
                  control={control}
                  name="prazoDate"
                  render={({ field }) => (
                    <TextField
                      id="prazo-date"
                      name="prazoDate"
                      {...register("prazoDate")}
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      placeholder=""
                      {...field}
                      type="datetime-local"
                    />
                  )}
                />
              </label>
            </div>
          </div>
        </div>

        <div className="container__flex">
          <label>
            <p>Qual a medida da área?</p>
            <Controller
              control={control}
              name="largeArea"
              render={({ field }) => (
                <TextField
                  className="form__small"
                  id="large-area"
                  name="largeArea"
                  {...register("largeArea")}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  placeholder="Largura"
                  {...field}
                  type="number"
                />
              )}
            />
          </label>
          <label>
            <p style={{ color: 'transparent' }}>Qual ?</p>
            <Controller
              control={control}
              name="AlturaArea"
              render={({ field }) => (
                <TextField
                  className="form__small"
                  id="Altura-area"
                  name="AlturaArea"
                  {...register("AlturaArea")}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  placeholder="Altura"
                  {...field}
                  type="number"
                />
              )}
            />
          </label>
          <label>
            <p style={{ color: 'transparent' }}>Qual ?</p>
            <Controller
              control={control}
              name="total"
              render={({ field }) => (
                <TextField
                  className="form__small"
                  id="total-m2"
                  name="total"
                  {...register("total")}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  placeholder="M²"
                  {...field}
                />
              )}
            />
          </label>
          <label className="form__big">
            <p>Qual melhor forma de pagamento?</p>
            <Controller
              control={control}
              name="formaPagamento"
              render={({ field }) => (
                <TextField
                  id="forma-pagamento"
                  name="formaPagamento"
                  {...register("formaPagamento")}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  placeholder="PIX,BOLETO,CARTÃO,ETC"
                  {...field}
                />
              )}
            />
          </label>
        </div>
      </div>
      <div style={{ marginLeft: '30px', marginTop: '10px' }}>
        <p>Qual tipo de projeto</p>
        <div style={{ display: 'flex' }}>
          <FormControl className="form-options" style={{ display: 'flex' }}>
            <RadioGroup className="Radio__Flex"
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              onChange={handleChange2}
              value={value}
            >
              <div className="container__stand--Radio">
                <FormControlLabel
                  value="project"
                  control={<Radio />}
                  label="Stand Básico"
                  onChange={() => {
                    if (checked) {
                      setChecked(!checked);
                    }
                  }}
                />
                <img className="stand__img" src={stand1} alt="stand-img" />
              </div>
              <div className="container__stand--Radio">
                <FormControlLabel
                  value="project-montagem"
                  control={<Radio />}
                  label="Stand Misto"
                  onChange={() => {
                    if (checked) {
                      setChecked(!checked);
                    }
                  }}
                />
                <img className="stand__img" src={stand2} alt="stand-img" />
              </div>
              <div className="container__stand--Radio">
                <FormControlLabel
                  value="montagem"
                  control={<Radio />}
                  label="Stand Construído"
                  onChange={() => {
                    if (checked) {
                      setChecked(!checked);
                    }
                  }}
                />
                <img className="stand__img" src={stand3} alt="stand-img" />
              </div>
              <div className="container__stand--Radio">
                <FormControlLabel
                  value="outro-option"
                  control={<Radio />}
                  label="Quiosque"
                  type="checkbox"
                  defaultChecked={checked}
                  onChange={() => {
                    if (checked) {
                      setText("");
                    }
                    setChecked(!checked);
                  }}
                />
                <img className="stand__img" src={stand4} alt="stand-img" />
              </div>
            </RadioGroup>
          </FormControl>
        </div>
      </div>
    </>
  );
};

const EstruturaInformation = () => {
  const { control } = useFormContext();
  const { register } = useForm();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };


  return (
    <>
      <div className="Container__Linaer--Stepper" style={{ display: 'block' }}>
        <div className="first-div">
          <div>
            <h2 style={{ marginBottom: '50px' }} className="title_briefing">Escolha os elementos presentes no seu stand:</h2>
            <div className="container__flex" style={{ justifyContent: 'space-between' }}>
              <label>
                <p>Balcão</p>
                <Controller
                  control={control}
                  name="balcao"
                  render={({ field }) => (
                    <TextField
                      className="form__medium"
                      id="balcao"
                      name="balcao"
                      {...register("balcao")}
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      placeholder="0"
                      {...field}
                      type="number"
                    />
                  )}
                />
              </label>
              <label>
                <p>Objetos Suspensos</p>
                <Controller
                  control={control}
                  name="objetosSuspensos"
                  render={({ field }) => (
                    <TextField
                      className="form__medium"
                      id="objetos-suspensos"
                      name="objetosSuspensos"
                      {...register("objetosSuspensos")}
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      placeholder="0"
                      {...field}
                      type="number"
                    />
                  )}
                />
              </label>
              <label>
                <p>Estoque</p>
                <Dropdown style={{ marginTop: '25px', }}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Escolha os itens da lista
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ minWidth: '100%', flexWrap: 'wrap', padding: '0 20px' }}>
                    <Dropdown.Item style={{ width: '100%', marginRight: '60px' }} href="#/action-1">Sem prateleira </Dropdown.Item>
                    <Dropdown.Item style={{ width: '100%', marginRight: '60px' }} href="#/action-2">Com prateleiras na parede</Dropdown.Item>
                    <Dropdown.Item style={{ width: '100%', marginRight: '60px' }} href="#/action-3">Com estantes no chão</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </label>
            </div>

            <div className="container__flex" style={{ justifyContent: 'space-between', marginBottom: '50px' }}>
              <label>
                <p>Observações:</p>
                <input className="form__line" type="text" />
              </label>
              <label>
                <p>Observações:</p>
                <input className="form__line" type="text" />
              </label>
              <label>
                <p>Observações:</p>
                <input className="form__line" type="text" />
              </label>
            </div>

            <div className="container__flex" style={{ justifyContent: 'space-between' }}>
              <label>
                <p>Mobília</p>
                <Dropdown style={{ marginTop: '25px', }}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Escolha os itens da lista
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ minWidth: '50px', flexWrap: 'wrap', padding: '0 20px' }}>
                    <Dropdown.Item style={{ width: '100%', marginRight: '100%' }} href="#/action-1">Mesas </Dropdown.Item>
                    <Dropdown.Item style={{ width: '100%', marginRight: '30px' }} href="#/action-2">Mesas + cadeiras</Dropdown.Item>
                    <Dropdown.Item style={{ width: '100%', marginRight: '30px' }} href="#/action-3">Poltronas</Dropdown.Item>
                    <Dropdown.Item style={{ width: '100%', marginRight: '30px' }} href="#/action-4">Lounge</Dropdown.Item>
                    <Dropdown.Item style={{ width: '100%', marginRight: '60px' }} href="#/action-5">Aparador</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </label>
              <label>
                <p>Área para coffee break</p>
                <Dropdown style={{ marginTop: '25px', }}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Escolha os itens da lista
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ minWidth: '100%', flexWrap: 'wrap', padding: '0 20px' }}>
                    <Dropdown.Item style={{ width: '100%', marginRight: '60px' }} href="#/action-1">Balcão </Dropdown.Item>
                    <Dropdown.Item style={{ width: '100%', marginRight: '60px' }} href="#/action-2">Aparador</Dropdown.Item>
                    <Dropdown.Item style={{ width: '100%', marginRight: '60px' }} href="#/action-3">Mesa</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </label>
              <label>
                <p>Móvel expositor</p>
                <Dropdown style={{ marginTop: '25px', }}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Escolha os itens da lista
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ minWidth: '100%', flexWrap: 'wrap', padding: '0 20px' }}>
                    <Dropdown.Item style={{ width: '100%', marginRight: '60px' }} href="#/action-1">Sem prateleira </Dropdown.Item>
                    <Dropdown.Item style={{ width: '100%', marginRight: '60px' }} href="#/action-2">Com prateleiras na parede</Dropdown.Item>
                    <Dropdown.Item style={{ width: '100%', marginRight: '60px' }} href="#/action-3">Com estantes no chão</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </label>
            </div>

            <div className="container__flex" style={{ justifyContent: 'space-between', marginBottom: '50px' }}>
              <label>
                <p>Observações:</p>
                <input className="form__line" type="text" />
              </label>
              <label>
                <p>Observações:</p>
                <input className="form__line" type="text" />
              </label>
              <label>
                <p>Observações:</p>
                <input className="form__line" type="text" />
              </label>
            </div>

            <div className="container__flex" style={{ justifyContent: 'space-between' }}>
              <label>
                <p>Freezer</p>
                <Controller
                  control={control}
                  name="freezer"
                  render={({ field }) => (
                    <TextField
                      className="form__medium"
                      id="freezer"
                      name="freezer"
                      {...register("freezer")}
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      placeholder="0"
                      {...field}
                      type="number"
                    />
                  )}
                />
              </label>
              <label>
                <p>Sala de Reunião</p>
                <Dropdown style={{ marginTop: '25px', }}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Escolha os itens da lista
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ minWidth: '100%', flexWrap: 'wrap', padding: '0 20px' }}>
                    <Dropdown.Item style={{ width: '100%', marginRight: '60px' }} href="#/action-1">Sem prateleira </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Com prateleiras na parede</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Com estantes no chão</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </label>
              <label>
                <p>Paisagismo</p>
                <Dropdown style={{ marginTop: '25px', }}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Escolha os itens da lista
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ minWidth: '100%', flexWrap: 'wrap', padding: '0 20px' }}>
                    <Dropdown.Item style={{ width: '100%', marginRight: '60px' }} href="#/action-1">Sem prateleira </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Com prateleiras na parede</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Com estantes no chão</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </label>
            </div>

            <div className="container__flex" style={{ justifyContent: 'space-between' }}>
              <label>
                <p>Observações:</p>
                <input className="form__line" type="text" />
              </label>
              <label>
                <p>Observações:</p>
                <input className="form__line" type="text" />
              </label>
              <label>
                <p>Observações:</p>
                <input className="form__line" type="text" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ElementosInformation = () => {
  const { control } = useFormContext();
  const { register } = useForm();
  return (
    <>
      <div className="Container__Linaer--Stepper" style={{ display: 'block' }}>
        <div className="first-div">
          <div>
            <h2 style={{ marginBottom: '50px' }} className="title_briefing">Escolha os elementos presentes no seu stand:</h2>
            <div className="container__flex" style={{ justifyContent: 'space-between' }}>
              <label>
                <p>Altura de stand <span style={{ color: '#ff8800' }}>m²</span></p>
                <Dropdown style={{ marginTop: '25px', }}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Escolha os itens da lista
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ minWidth: '100%', flexWrap: 'wrap', padding: '0 20px' }}>
                    <Dropdown.Item style={{ width: '100%', marginRight: '60px' }} href="#/action-1">Sem prateleira </Dropdown.Item>
                    <Dropdown.Item style={{ width: '100%', marginRight: '60px' }} href="#/action-2">Com prateleiras na parede</Dropdown.Item>
                    <Dropdown.Item style={{ width: '100%', marginRight: '60px' }} href="#/action-3">Com estantes no chão</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </label>
              <label>
                <p>Altura do Piso <span style={{ color: '#ff8800' }}>cm</span></p>
                <Dropdown style={{ marginTop: '25px', }}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Escolha os itens da lista
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ minWidth: '100%', flexWrap: 'wrap', padding: '0 20px' }}>
                    <Dropdown.Item style={{ width: '100%', marginRight: '60px' }} href="#/action-1">Sem prateleira </Dropdown.Item>
                    <Dropdown.Item style={{ width: '100%', marginRight: '60px' }} href="#/action-2">Com prateleiras na parede</Dropdown.Item>
                    <Dropdown.Item style={{ width: '100%', marginRight: '60px' }} href="#/action-3">Com estantes no chão</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </label>
              <label>
                <p>Tipo do Piso</p>
                <Dropdown style={{ marginTop: '25px', }}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Escolha os itens da lista
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ minWidth: '100%', flexWrap: 'wrap', padding: '0 20px' }}>
                    <Dropdown.Item style={{ width: '100%', marginRight: '60px' }} href="#/action-1">Sem prateleira </Dropdown.Item>
                    <Dropdown.Item style={{ width: '100%', marginRight: '60px' }} href="#/action-2">Com prateleiras na parede</Dropdown.Item>
                    <Dropdown.Item style={{ width: '100%', marginRight: '60px' }} href="#/action-3">Com estantes no chão</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </label>
            </div>

            <div className="container__flex" style={{ justifyContent: 'space-between', marginBottom: '50px' }}>
              <label>
                <p>Observações:</p>
                <input className="form__line" type="text" />
              </label>
              <label>
                <p>Observações:</p>
                <input className="form__line" type="text" />
              </label>
              <label>
                <p>Observações:</p>
                <input className="form__line" type="text" />
              </label>
            </div>

            <div className="container__flex" style={{ justifyContent: 'space-between' }}>
              <label>
                <p>Testeira</p>
                <Dropdown style={{ marginTop: '25px', }}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Escolha os itens da lista
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ minWidth: '50px', flexWrap: 'wrap', padding: '0 20px' }}>
                    <Dropdown.Item style={{ width: '100%', marginRight: '100%' }} href="#/action-1">Mesas </Dropdown.Item>
                    <Dropdown.Item style={{ width: '100%', marginRight: '30px' }} href="#/action-2">Mesas + cadeiras</Dropdown.Item>
                    <Dropdown.Item style={{ width: '100%', marginRight: '30px' }} href="#/action-3">Poltronas</Dropdown.Item>
                    <Dropdown.Item style={{ width: '100%', marginRight: '30px' }} href="#/action-4">Lounge</Dropdown.Item>
                    <Dropdown.Item style={{ width: '100%', marginRight: '60px' }} href="#/action-5">Aparador</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </label>
              <label>
                <p>Mezanino</p>
                <Dropdown style={{ marginTop: '25px', }}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Escolha os itens da lista
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ minWidth: '100%', flexWrap: 'wrap', padding: '0 20px' }}>
                    <Dropdown.Item style={{ width: '100%', marginRight: '60px' }} href="#/action-1">Balcão </Dropdown.Item>
                    <Dropdown.Item style={{ width: '100%', marginRight: '60px' }} href="#/action-2">Aparador</Dropdown.Item>
                    <Dropdown.Item style={{ width: '100%', marginRight: '60px' }} href="#/action-3">Mesa</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </label>
              <label>
                <p>Pontos Elétricos (tomadas)</p>
                <Controller
                  control={control}
                  name="pontosEletricos"
                  render={({ field }) => (
                    <TextField
                      className="form__medium"
                      id="pontos-eletricos"
                      name="pontosEletricos"
                      {...register("pontosEletricos")}
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      placeholder="0"
                      {...field}
                      type="number"
                    />
                  )}
                />
              </label>
            </div>

            <div className="container__flex" style={{ justifyContent: 'space-between', marginBottom: '50px' }}>
              <label>
                <p>Observações:</p>
                <input className="form__line" type="text" />
              </label>
              <label>
                <p>Observações:</p>
                <input className="form__line" type="text" />
              </label>
              <label>
                <p>Observações:</p>
                <input className="form__line" type="text" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const MultimidiaInformation = () => {
  const { control } = useFormContext();
  const { register } = useForm();
  const [formularios, setFormularios] = useState({
    cardnumber: 'CARD NUMBER',
    cardmonth: 'CARD MONTH',
    cardyear: 'CARD YEAR',
  })
  return (
    <>
      <div className="Container__Linaer--Stepper" style={{ display: 'block' }}>
        <div className="first-div">
          <div>
            <h2 style={{ marginBottom: '50px' }} className="title_briefing">Material Multimídia:</h2>
            <div className="container__flex" style={{ justifyContent: 'space-between' }}>
              <label>
                <p>TV <span style={{ color: '#ff8800' }}>(Quant.)</span></p>
                <Controller
                  control={control}
                  name="tvQuantidade"
                  render={({ field }) => (
                    <TextField
                      className="form__medium"
                      id="tv-quantidade"
                      name="tvQuantidade"
                      {...register("tvQuantidade")}
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      placeholder="0"
                      {...field}
                      type="number"
                    />
                  )}
                />
              </label>
              <label>
                <p>TV <span style={{ color: '#ff8800' }}>(Tam.)</span></p>
                <Dropdown style={{ marginTop: '25px', }}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Escolha os itens da lista
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ minWidth: '100%', flexWrap: 'wrap', padding: '0 20px' }}>
                    <Dropdown.Item style={{ width: '100%', marginRight: '60px' }} href="#/action-1">Sem prateleira </Dropdown.Item>
                    <Dropdown.Item style={{ width: '100%', marginRight: '60px' }} href="#/action-2">Com prateleiras na parede</Dropdown.Item>
                    <Dropdown.Item style={{ width: '100%', marginRight: '60px' }} href="#/action-3">Com estantes no chão</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </label>
              <label>
                <p>Painel LED</p>
                <Controller
                  control={control}
                  name="painelLed"
                  render={({ field }) => (
                    <TextField
                      className="form__medium"
                      id="painel-led"
                      name="painelLed"
                      {...register("painelLed")}
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      placeholder="0"
                      {...field}
                      type="number"
                    />
                  )}
                />
              </label>
            </div>

            <div className="container__flex" style={{ justifyContent: 'space-between', marginBottom: '50px' }}>
              <label>
                <p>Observações:</p>
                <input className="form__line" type="text" />
              </label>
              <label>
                <p>Observações:</p>
                <input className="form__line" type="text" />
              </label>
              <label>
                <p>Observações:</p>
                <input className="form__line" type="text" />
              </label>
            </div>

            <div className="container__flex" style={{ justifyContent: 'space-between' }}>
              <label>
                <p>Iluminação</p>
                <Dropdown style={{ marginTop: '25px', }}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Escolha os itens da lista
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ minWidth: '50px', flexWrap: 'wrap', padding: '0 20px' }}>
                    <Dropdown.Item style={{ width: '100%', marginRight: '100%' }} href="#/action-1">Mesas </Dropdown.Item>
                    <Dropdown.Item style={{ width: '100%', marginRight: '30px' }} href="#/action-2">Mesas + cadeiras</Dropdown.Item>
                    <Dropdown.Item style={{ width: '100%', marginRight: '30px' }} href="#/action-3">Poltronas</Dropdown.Item>
                    <Dropdown.Item style={{ width: '100%', marginRight: '30px' }} href="#/action-4">Lounge</Dropdown.Item>
                    <Dropdown.Item style={{ width: '100%', marginRight: '60px' }} href="#/action-5">Aparador</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </label>
              <label>
                <p>Caixa Som</p>
                <Dropdown style={{ marginTop: '25px', }}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Escolha os itens da lista
                  </Dropdown.Toggle>
                  <Dropdown.Menu style={{ minWidth: '100%', flexWrap: 'wrap', padding: '0 20px' }}>
                    <Dropdown.Item style={{ width: '100%', marginRight: '60px' }} href="#/action-1">Balcão </Dropdown.Item>
                    <Dropdown.Item style={{ width: '100%', marginRight: '60px' }} href="#/action-2">Aparador</Dropdown.Item>
                    <Dropdown.Item style={{ width: '100%', marginRight: '60px' }} href="#/action-3">Mesa</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </label>
              <label>
                <p>Lixeiras <span style={{ color: '#ff8800' }}>(Qtd.)</span></p>
                <Controller
                  control={control}
                  name="lixeiras"
                  render={({ field }) => (
                    <TextField
                      className="form__medium"
                      id="lixeiras"
                      name="lixeiras"
                      {...register("lixeiras")}
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      placeholder="0"
                      {...field}
                      type="number"
                    />
                  )}
                />
              </label>
            </div>

            <div className="container__flex" style={{ justifyContent: 'space-between', marginBottom: '50px' }}>
              <label>
                <p>Observações:</p>
                <input className="form__line" type="text" />
              </label>
              <label>
                <p>Observações:</p>
                <input className="form__line" type="text" />
              </label>
              <label>
                <p>Observações:</p>
                <input className="form__line" type="text" />
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const BuffetInformation = () => {
  const { control } = useFormContext();
  const { register } = useForm();
  const [formularios, setFormularios] = useState({
    cardnumber: 'CARD NUMBER',
    cardmonth: 'CARD MONTH',
    cardyear: 'CARD YEAR',
  })

  const [textarea, setTextarea] = useState(
  );
  const handleChange = (event) => {
    setTextarea(event.target.value)
  }
  return (
    <>
      <div className="Container__Linaer--Stepper" style={{ display: 'block' }}>
        <div className="first-div">
          <div>
            <h2 style={{ marginBottom: '50px' }} className="title_briefing">Promoter & Buffet</h2>
            <div className="container__flex" style={{ justifyContent: 'space-between' }}>
              <label>
                <p>Promoter</p>
                <Controller
                  control={control}
                  name="promoter"
                  render={({ field }) => (
                    <TextField
                      id="promoter"
                      name="promoter"
                      {...register("promoter")}
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      placeholder="0"
                      {...field}
                      type="number"
                    />
                  )}
                />
              </label>
              <form className="Form__text--medium">
                <label className="Form__text--medium">
                  <p>Buffet</p>
                  <textarea value={textarea} onChange={handleChange} />
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ReferenceInformation = () => {
  const { control } = useFormContext();
  const { register } = useForm();
  const [formularios, setFormularios] = useState({
    cardnumber: 'CARD NUMBER',
    cardmonth: 'CARD MONTH',
    cardyear: 'CARD YEAR',
  })
  return (
    <>
      <div className="Container__Linaer--Stepper" style={{ display: 'block' }}>
        <div className="first-div">
          <div>
            <h2 style={{ marginBottom: '50px' }} className="title_briefing">STANDS PASSADOS</h2>
            <div className="container__flex" style={{ justifyContent: 'space-between' }}>
              <label style={{ marginRight: '20%' }}>
                <p>Subir link de fotos ou arquivo</p>
                <div className="label-btn">
                  <Button variant="contained" component="label" id="btn-upload" style={{ marginBottom: '50px' }}>
                    Arquivo
                    <input type="file" hidden />
                  </Button>
                  <Button variant="contained" component="label" id="btn-upload" style={{ marginBottom: '50px' }}>
                    Arquivo
                    <input type="file" hidden />
                  </Button>
                  <Button variant="contained" component="label" id="btn-upload" style={{ marginBottom: '50px' }}>
                    Arquivo
                    <input type="file" hidden />
                  </Button>
                </div>
              </label>
              <div>
                <Controller
                  control={control}
                  name="link"
                  render={({ field }) => (
                    <TextField
                      style={{ marginTop: '30px' }}
                      id="link"
                      name="link"
                      {...register("link")}
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      placeholder="OU DEIXE UM LINK"
                      {...field}
                      type="text"
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="link"
                  render={({ field }) => (
                    <TextField
                      style={{ marginTop: '34px' }}
                      id="link"
                      name="link"
                      {...register("link")}
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      placeholder="OU DEIXE UM LINK"
                      {...field}
                      type="text"
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="link"
                  render={({ field }) => (
                    <TextField
                      style={{ marginTop: '34px' }}
                      id="link"
                      name="link"
                      {...register("link")}
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      placeholder="OU DEIXE UM LINK"
                      {...field}
                      type="text"
                    />
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const FileText = () => {
  const { control } = useFormContext();
  const { register } = useForm();
  const [formularios, setFormularios] = useState({
    cardnumber: 'CARD NUMBER',
    cardmonth: 'CARD MONTH',
    cardyear: 'CARD YEAR',
  })
  return (
    <>
      <div className="Container__Linaer--Stepper" style={{ display: 'block' }}>
        <div className="first-div">
          <div>
            <h2 style={{ marginBottom: '50px' }} className="title_briefing">PLANTA BAIXA</h2>
            <div className="container__flex" style={{ justifyContent: 'space-between' }}>
              <label>
                <p>Faça upload ou link da planta baixa</p>
                <div className="label-btn">
                  <Button variant="contained" component="label" id="btn-upload" style={{ marginBottom: '50px' }}>
                    Arquivo
                    <input type="file" hidden />
                  </Button>
                </div>
              </label>
              <div>
                <Controller
                  control={control}
                  name="link"
                  render={({ field }) => (
                    <TextField
                      style={{ marginTop: '30px' }}
                      id="link"
                      name="link"
                      {...register("link")}
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      placeholder="OU DEIXE UM LINK"
                      {...field}
                      type="text"
                    />
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const FilePhoto = () => {
  const { control } = useFormContext();
  const { register } = useForm();
  const [formularios, setFormularios] = useState({
    cardnumber: 'CARD NUMBER',
    cardmonth: 'CARD MONTH',
    cardyear: 'CARD YEAR',
  })
  const [value, setValue] = useState("project");
  const [checked, setChecked] = useState(false);
  const [text, setText] = useState("");

  const handleChange2 = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <div className="Container__Linaer--Stepper" style={{ display: 'block' }}>
        <div className="first-div">
          <div>
            <h2 className="title_briefing">Referências</h2>
            <div className="container__flex" style={{ justifyContent: 'space-between' }}>
              <label style={{ marginRight: '15%' }}>
                <p>Escolha até 4 fotos como referências ou também envie as suas próprias:</p>
                <div className="label-btn">
                  <Button variant="contained" component="label" id="btn-upload" style={{ marginBottom: '50px', width: '600px' }}>
                    Arquivo
                    <input type="file" hidden />
                  </Button>
                  <Button variant="contained" component="label" id="btn-upload" style={{ marginBottom: '50px', width: '600px' }}>
                    Arquivo
                    <input type="file" hidden />
                  </Button>
                </div>
              </label>
              <label style={{ marginRight: '15%' }}>
                <p style={{ color: 'transparent' }}>Escolha até 4 fotos como referências ou também envie as suas próprias:</p>
                <div className="label-btn">
                  <Button variant="contained" component="label" id="btn-upload" style={{ marginBottom: '50px', width: '600px' }}>
                    Arquivo
                    <input type="file" hidden />
                  </Button>
                  <Button variant="contained" component="label" id="btn-upload" style={{ marginBottom: '50px', width: '600px' }}>
                    Arquivo
                    <input type="file" hidden />
                  </Button>
                </div>
              </label>
            </div>
            <div className="container__img--select">
              <div style={{ marginLeft: '30px', marginTop: '10px' }}>
                <div style={{ display: 'flex' }}>
                  <FormControl className="form-options" style={{ display: 'flex' }}>
                    <RadioGroup className="Radio__Flex"
                      aria-labelledby="demo-controlled-radio-buttons-group"
                      name="controlled-radio-buttons-group"
                      value={value}
                    >
                      <div className="container__stand--Radio" >
                        <FormControlLabel
                          value="project"
                          control={<Radio />}
                          label=""
                          onChange={handleChange2}
                        />
                        <img className="stand__img--select" src={standimg1} alt="stand-img" />
                      </div>
                      <div className="container__stand--Radio">
                        <FormControlLabel
                          value="project-montagem"
                          control={<Radio />}
                          label=""
                          onChange={handleChange2}
                        />
                        <img className="stand__img--select" src={standimg2} alt="stand-img" />
                      </div>
                      <div className="container__stand--Radio">
                        <FormControlLabel
                          value="montagem"
                          control={<Radio />}
                          label=""
                          onChange={handleChange2}
                        />
                        <img className="stand__img--select" src={standimg3} alt="stand-img" />
                      </div>
                      <div className="container__stand--Radio">
                        <FormControlLabel
                          value="outro-option"
                          control={<Radio />}
                          label=""
                          type="checkbox"
                          defaultChecked={checked}
                          onChange={handleChange2}
                        />
                        <img className="stand__img--select" src={standimg4} alt="stand-img" />
                      </div>
                    </RadioGroup>
                  </FormControl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const FreeInformation = () => {
  const { control } = useFormContext();
  const { register } = useForm();
  const [formularios, setFormularios] = useState({
    cardnumber: 'CARD NUMBER',
    cardmonth: 'CARD MONTH',
    cardyear: 'CARD YEAR',
  })

  const [textarea, setTextarea] = useState(
  );
  const handleChange = (event) => {
    setTextarea(event.target.value)
  }

  return (
    <>
      <div className="Container__Linaer--Stepper" style={{ display: 'block' }}>
        <h2 style={{ marginBottom: '50px' }} className="title_briefing">Etapa Livre</h2>
        <div className="container__flex">
          <form>
            <label className="Form__text--big">
              <p>Existe detalhes que você precisa esclarecer e não teve oportunidade? Aproveite agora.</p>
              <textarea value={textarea} onChange={handleChange} />
            </label>
          </form>
        </div>
      </div>
    </>
  );
};



const LinaerStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();
  const [briefing, setBriefing] = useState({
    evento: "",
    precisa: "",
    cidade: "",
    local: "",
    email: "",
    phone: "",
    alternatephone: "",
    address1: "",
    address2: "",
    country: "",
    cardnumber: "",
    cardmonth: "",
    cardyear: "",
    minOrcamento: "",
    maxOrcamento: "",
    prazoDate: "",
    largeArea: "",
    AlturaArea: "",
    total: "",
    formaPagamento: "",
    balcao: "",
    objetosSuspensos: "",
    freezer: "",
    pontosEletricos: "",
    tvQuantidade: "",
    painelLed: "",
    lixeiras: "",
    promoter: "",
    link: "",
  });

  const { register, handleSubmit, formState: { erros } } = useForm()

  const methods = useForm({
    defaultValues: {
      evento: "",
      precisa: "",
      cidade: "",
      local: "",
      email: "",
      phone: "",
      alternatephone: "",
      address1: "",
      address2: "",
      country: "",
      cardnumber: "",
      cardmonth: "",
      cardyear: "",
      minOrcamento: "",
      maxOrcamento: "",
      prazoDate: "",
      largeArea: "",
      AlturaArea: "",
      total: "",
      formaPagamento: "",
      balcao: "",
      objetosSuspensos: "",
      freezer: "",
      pontosEletricos: "",
      tvQuantidade: "",
      painelLed: "",
      lixeiras: "",
      promoter: "",
      link: "",
    },
  });

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
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

  const navigate = useNavigate();

  const handleNext = (data) => {
    console.log(data)
    setBriefing({
      evento: data.evento,
      precisa: data.precisa,
      cidade: data.cidade,
      local: data.local,
      email: data.email,
      phone: data.phone,
      alternatephone: data.alternatephone,
      address1: data.address1,
      address2: data.address2,
      country: data.country,
      cardnumber: data.cardnumber,
      cardmonth: data.cardmonth,
      cardyear: data.cardyear,
      minOrcamento: data.minOrcamento,
      maxOrcamento: data.maxOrcamento,
      prazoDate: data.prazoDate,
      largeArea: data.largeArea,
      AlturaArea: data.AlturaArea,
      total: data.total,
      formaPagamento: data.formaPagamento,
      balcao: data.balcao,
      objetosSuspensos: data.objetosSuspensos,
      freezer: data.freezer,
      pontosEletricos: data.pontosEletricos,
      tvQuantidade: data.tvQuantidade,
      painelLed: data.painelLed,
      lixeiras: data.lixeiras,
      promoter: data.promotor,
      link: data.link,
    })
    if (activeStep === steps.length - 1) {
      setActiveStep(activeStep + 1);
    } else {
      setActiveStep(activeStep + 1);
      setSkippedSteps(
        skippedSteps.filter((skipItem) => skipItem !== activeStep)
      );
      axios
        .post("https://nossostand.willhack.app/briefings/briefing", briefing)
        .then((res) => {
          navigate("/briefing-enviado");
        })
        .catch((error) => {

        });
    }
  };

  const ButtonFinish = () => {
    return (
      <a style={{ color: '#FFFFFF' }}>Finish</a>
    );
  };

  return (
    <div className="MuiBox-root-2">
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
                {activeStep === steps.length - 1 ? <ButtonFinish type="submit" /> : "Next"}
              </Button>
            </form>
          </FormProvider>
        </>
      )}
    </div>
  );
};

export default LinaerStepper;
