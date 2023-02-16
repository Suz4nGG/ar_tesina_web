import { normalizeText } from "/validations";
import { dataProfesores } from "/data";

export const timeOut = (time, setFunction) => {
  const timer = setTimeout(() => {
    setFunction;
  }, time);
  return () => clearTimeout(timer);
};

// ^ ee = Experiencia educativa
export const profesoresInvolucrados = (ee) => {
  const experienciaEducativa = normalizeText(ee).toLowerCase();
  const responsablesSolicitud = dataProfesores.find(
    (item) => item.ee === experienciaEducativa
  );
  return responsablesSolicitud.profesor;
};
