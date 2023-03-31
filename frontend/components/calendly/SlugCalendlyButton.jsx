import { PopupButton } from "react-calendly";

const SlugCalendlyButton = ({ className, url }) => {
  return (
    <PopupButton
      url={url}
      rootElement={
        typeof window !== "undefined" ? document.getElementById("__next") : null
      }
      text="Book Now"
      className={className}
    />
  );
};

export default SlugCalendlyButton;
