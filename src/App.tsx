import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";
import HandRange from "./Components/HandRangeChart/HandRange";
import PotOddsCalculator from "./Components/PotOdds/PotOddsCalculator";
import TabPanel from "./Components/TabPanel";


function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

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
        sx={{ borderRight: 1, borderColor: "divider", height:224 }}
      >
        <Tab label="Pot Odds" {...a11yProps(0)} />
        <Tab label="Hand Range Chart" {...a11yProps(1)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <PotOddsCalculator/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HandRange/>
      </TabPanel>

    </Box>
  );
}
