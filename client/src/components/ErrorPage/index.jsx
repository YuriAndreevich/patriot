import { useRouteError } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
  const navigate = useNavigate();

  function reditect() {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }
  reditect();

  return (
    <div className="flex items-center justify-center h-screen">
      <div id="error-page" className=" text-center  ">
        <h1>Упс!</h1>
        <p>К сожалению, возникла непредвиденная ошибка.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
