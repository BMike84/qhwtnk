import { PopupButton } from "react-calendly";

const CalendlyButton = ({ className }) => {
  return (
    <PopupButton
      url="https://calendly.com/michael-3382"
      rootElement={
        typeof window !== "undefined" ? document.getElementById("__next") : null
      }
      text="Book Now"
      className={className}
    />
  );
};

export default CalendlyButton;
