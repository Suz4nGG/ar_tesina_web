import { selectOptionsDis } from "data";

const nombreValidation = [
  {
    message: "Sólo caracteres alfabéticos",
    pattern: /^[a-zA-Z() ]+$/,
  },
];

const textValidation = [
  {
    message: "Caracteres invalidos o longitud invalida",
    pattern: /^[a-z0-9]{5}$/,
  },
];

const passwordValidation = [
  {
    message: "Contraseña insegura",
    pattern: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
  },
];

const telValidation = [
  {
    message: "Sólo caracteres numéricos y 10 dígitos",
    pattern: /^[0-9]+$/,
  },
];

const correo = [
  {
    message: "El correo debe contener caracteres especiales como '@' o '.'",
    pattern: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
  },
];

export const normalizeText = (text) => {
  return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const stringsValidation = (arr, string, stringName, errors) => {
  return arr.map((item) => {
    if (!item.pattern.test(normalizeText(string))) {
      return errors.push(`${stringName}: ${item.message}`);
    }
  });
};

const correoValidation = (string, stringName, errors) => {
  correo.map((item) => {
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

export const validations = (data) => {
  const { nombreCompleto, tel, usernameA, password, correo } = data;
  let errors = [];
  switch (correo || nombreCompleto || tel || usernameA || password) {
    case correo:
      correoValidation(correo, "correo", errors);
    case nombreCompleto:
      stringsValidation(
        nombreValidation,
        nombreCompleto,
        "nombreCompleto",
        errors
      );
    case tel:
      telValidationF(tel, "tel", errors);
    case usernameA:
      textValidation.map((item) => {
        if (!item.pattern.test(usernameA))
          return errors.push(`usernameA: ${item.message}`);
      });
    case password:
      passwordValidation.map((item) => {
        if (!item.pattern.test(password))
          return errors.push(`password: ${item.message}`);
      });
      return errors;
  }
};

export const dateParse = (createdAt) => {
  return new Date(createdAt).toLocaleDateString("es-es", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};
