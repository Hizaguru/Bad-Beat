import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";
import HandRange from "./Components/HandRangeChart/HandRange";
import HandRangeSixToEight from "./Components/HandRangeChart/HandRangeSixToEight";
import PotOddsCalculator from "./Components/PotOdds/PotOddsCalculator";
import TabPanel from "./Components/TabPanel";
import {a11yProps} from './utils'



const tabs = [
  {
    label: "Pot Odds",
    component: <PotOddsCalculator />,
  },
  {
    label: "Hand Range Chart",
    component: <HandRange />,
  },
  {
    label: "Hand Range Chart from six to eight",
    component: <HandRangeSixToEight />,
  },
];


export default function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        height: 224,
      }}
    >
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider", height: 224 }}
      >
        {tabs.map((tab, index) => (
          <Tab
            key={tab.label}
            label={tab.label}
            {...a11yProps(index)}
          />
        ))}
      </Tabs>
      {tabs.map((tab, index) => (
        <TabPanel key={tab.label} value={value} index={index}>
          {tab.component}
        </TabPanel>
      ))}
    </Box>
  );
}
