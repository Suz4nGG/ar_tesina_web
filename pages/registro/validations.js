import { selectOptionsDis } from "./data";

const nombreValidation = [
  {
    message: "Sólo caracteres alfabéticos",
    pattern: /^[a-zA-Z() ]+$/,
  },
];

const textValidation = [
  {
    message: "Caracteres invalidos o longitud invalida",
    pattern: /^[a-zA-Z0-9]{5}$/
  }
]

const passwordValidation = [
  {
    message: "Contraseña insegura",
    pattern: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
  }
]

const telValidation = [
  {
    message: "Sólo caracteres numéricos y 10 dígitos",
    pattern: /^[0-9]+$/,
  },
];

const edadValidation = [
  {
    message: "Edad no valida",
    pattern: /^[0-9]{2}$/,
  },
];

const cpValidation = [
  {
    message: "C.P. no valido",
    pattern: /^[0-9]{5}$/,
  },
];

const fechaNacValidation = [
  {
    message: "Fecha no valida",
    pattern:
      /^(19|20)(((([02468][048])|([13579][26]))-02-29)|(\d{2})-((02-((0[1-9])|1\d|2[0-8]))|((((0[13456789])|1[012]))-((0[1-9])|((1|2)\d)|30))|(((0[13578])|(1[02]))-31)))$/,
  },
];

const normalizeText = (text) => {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const stringsValidation = (arr, string, stringName, errors) => {
  return arr.map((item) => {
    if (!item.pattern.test(normalizeText(string))) {
      return errors.push(`${stringName}: ${item.message}`);
    }
  });
};

const edadValidationF = (string, stringName, errors) => {
  return edadValidation.map((item) => {
    if (!item.pattern.test(string) || !(string >= 17 && string <= 30)) {
      return errors.push(`${stringName}: ${item.message}`);
    }
  });
};

const dateValidation = (string, stringName, errors) => {
  fechaNacValidation.map((item) => {
    if (!item.pattern.test(string)) {
      return errors.push(`${stringName}: ${item.message}`);
    }
  });
};

const telValidationF = (string, stringName, errors) => {
  telValidation.map((item) => {
    if (
      !item.pattern.test(string) ||
      !(string.length === 10 && string.length <= 10)
    ) {
      return errors.push(`${stringName}: ${item.message}`);
    }
  });
};

const cpValidationF = (string, stringName, errors) => {
  cpValidation.map((item) => {
    if (!item.pattern.test(string)) {
      return errors.push(`${stringName}: ${item.message}`);
    }
  });
};

export const validations = (data) => {
  const {
    nombreCompleto,
    nombreResponsable,
    tel,
    edad,
    ciudad,
    cp,
    municipio,
    fecNacimiento,
    tipoDiscapacidad,
    sobreDiscapacidad,
    username,
    password
  } = data;
  let errors = [];
  switch (
    nombreCompleto ||
    nombreResponsable ||
    municipio ||
    ciudad ||
    tel ||
    edad ||
    cp ||
    fecNacimiento ||
    tipoDiscapacidad || sobreDiscapacidad || username || password
  ) {
    case nombreCompleto:
      stringsValidation(nombreValidation, nombreCompleto, "nombreCompleto", errors);
    case nombreResponsable:
      stringsValidation(nombreValidation, nombreResponsable, "nombreResponsable", errors);
    case municipio:
      stringsValidation(nombreValidation, municipio, "municipio", errors);
    case ciudad:
      stringsValidation(nombreValidation, ciudad, "ciudad", errors);
    case tel:
      telValidationF(tel, "tel", errors);
    case edad:
      edadValidationF(edad, "edad", errors);
    case fecNacimiento:
      dateValidation(fecNacimiento, "fecNacimiento", errors);
    case cp:
      cpValidationF(cp, "cp", errors)
    case sobreDiscapacidad:
      stringsValidation(textValidation, sobreDiscapacidad, 'sobreDiscapacidad', errors)
    case username:
      textValidation.map(item => {
        if(!item.pattern.test(username)) return errors.push(`username: ${item.message}`)
      })
    case password:
      passwordValidation.map(item => {
        if (!item.pattern.test(password)) return errors.push(`password: ${item.message}`)
      })
      return errors;
  }
};

//P123#opt