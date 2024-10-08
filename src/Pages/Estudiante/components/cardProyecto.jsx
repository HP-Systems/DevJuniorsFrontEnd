
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const CardProyecto = ({proyecto}) => {
  // eslint-disable-next-line react/prop-types, no-unused-vars
  const {descripcion,fecha_creacion,fecha_limite,status,titulo,id} = proyecto;
  console.log("CardProyecto:", proyecto);
  return (
    <div style={{ margin: "2%" }}>
      <div className=" bg-white border border-gray-200 rounded-lg shadow ">
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              {titulo}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {descripcion}
          </p>
          <NavLink 
            to={'/estudiante/detalleProyecto/'+id}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Ver Proyecto
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
