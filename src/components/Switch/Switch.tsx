import { useState } from "react";

interface ToggleSwitchProps {
  label?: string;
  initialState?: boolean;
  onToggle?: (state: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ label, initialState = false, onToggle }) => {
  const [isOn, setIsOn] = useState(initialState);

  const toggle = () => {
    const newState = !isOn;
    setIsOn(newState);
    if (onToggle) onToggle(newState);
  };

  return (
    <div style={styles.container}>
      {label && <span style={styles.label}>{label}</span>}
      <div style={{ ...styles.switch, backgroundColor: isOn ? "#4caf50" : "#ccc" }} onClick={toggle}>
        <div style={{ ...styles.slider, transform: isOn ? "translateX(25px)" : "translateX(0px)" }} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontFamily: "Arial, sans-serif",
  },
  label: {
    fontSize: "14px",
    color: "#333",
  },
  switch: {
    width: "50px",
    height: "25px",
    borderRadius: "25px",
    position: "relative" as "relative",
    cursor: "pointer",
    transition: "background 0.3s",
  },
  slider: {
    width: "20px",
    height: "20px",
    background: "white",
    borderRadius: "50%",
    position: "absolute" as "absolute",
    top: "50%",
    left: "5px",
    transform: "translateY(-50%)",
    transition: "transform 0.3s",
  },
};

export default ToggleSwitch;
