import { createContext, useState } from "react";
import UserInfoControls from "./components/UserInfoControls";
import UserTimeTrackingCard from "./components/UserTimeTrackingCard";


export const TimeTrackingContext = createContext();

function App() {

  const [daily, setDaily] = useState(false);
  const [weekly, setWeekly] = useState(true);
  const [monthly, setMonthly] = useState(false);

  return (
    <div className="time-tracking-container">
      <TimeTrackingContext.Provider value={{ daily, setDaily, weekly, setWeekly, monthly, setMonthly }} >
        <UserInfoControls />
        <UserTimeTrackingCard />
      </TimeTrackingContext.Provider >
    </div>
  );
}

export default App;
