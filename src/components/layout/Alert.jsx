import { useContext } from "react";
import AlertContext from "../../Context/Alerts/AlertContext";

const Alert = () => {
  const { alert } = useContext(AlertContext);

  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <i className="fa-solid fa-circle-info">{alert.msg}</i>
      </div>
    )
  );
};

export default Alert;
