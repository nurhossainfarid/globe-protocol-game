import { Box } from "@mui/material";
import Awareness from "../../components/awareness/Awareness";

const leftSideData = [
  {
    id: 1,
    image: "https://i.ibb.co.com/vDTng60/water-Pollution.png",
    title: "Water Pollution",
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/Dz2GjXT/salinity.png",
    title: "Salinity",
    url: "https://salinity.oceansciences.org/maps-overview.htm#",
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/fC35jNd/acidfactor.png",
    title: "OCEAN ACIDIFICATION",
  },
];

// Right side data
const rightSideData = [
  {
    id: 1,
    image: "https://i.ibb.co.com/Rjbqc0D/las-vegas.gif",
    title: "Sea Drying",
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/cbrYNn3/temperature-ph.png",
    title: "Temperature & pH",
    url: "https://worldview.earthdata.nasa.gov/?v=-75.58821454614225,-58.46372914878933,220.1678276908006,87.10369788970598&l=AIRS_L2_Surface_Air_Temperature_Night,AIRS_L2_Surface_Air_Temperature_Day,MODIS_Aqua_L3_EVI_Monthly,MODIS_Terra_Land_Surface_Temp_Day_TES&lg=false&t=2024-09-28-T07%3A40%3A40Z",
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/hmPqk7r/nasa-worldview-2012-NOV-02-to-2024-SEP-27-flood.gif",
    title: "Flood",
  },
];

const atmosphereData = [
  {
    id: 0,
    title: "Water Pollution",
    why: "Water pollution happens when harmful substances like chemicals, heavy metals, and pathogens enter water bodies, degrading water quality and threatening aquatic life.",
    how: "Dissolved Oxygen (DO) levels are crucial for aquatic organisms. When pollution occurs, organic matter from wastewater or runoff increases microbial activity, which consumes DO and can lead to hypoxia (low oxygen levels). This is detrimental to fish and other aquatic life. Salinity changes also impact water pollution; for instance, agricultural runoff can introduce fertilizers that increase salinity in freshwater systems, affecting species that cannot tolerate higher salt levels and disrupting the overall ecosystem.",
    what: "Implement better waste management practices, reduce agricultural runoff through buffer zones, and promote the use of environmentally friendly fertilizers. Monitoring and maintaining adequate DO levels is essential for healthy aquatic ecosystems.",
  },
  {
    id: 1,
    title: "Abnormal Water",
    why: "Abnormal water ecosystems arise when environmental conditions are disrupted, often due to human activities, leading to imbalances in species populations and water quality.",
    how: "Changes in Dissolved Oxygen (DO) can lead to abnormal ecosystems. Low DO levels can cause fish kills and promote the growth of anaerobic bacteria, which can produce toxins and harm aquatic life. Additionally, variations in salinity can disrupt the natural balance of species; for example, increased salinity from industrial discharges can lead to the decline of freshwater species and the dominance of salt-tolerant species, causing shifts in the ecosystem.",
    what: "Monitor and manage DO levels to ensure a healthy balance of aquatic life. Implement regulations to control salinity levels from industrial and agricultural sources, and restore natural habitats to support biodiversity.",
  },
  {
    id: 2,
    title: "Ocean Acidification",
    why: "Ocean acidification occurs when increased atmospheric CO2 is absorbed by seawater, leading to a decrease in pH levels, which affects marine life.",
    how: "As CO2 dissolves in ocean water, it reacts to form carbonic acid, lowering the pH and altering the carbonate chemistry of seawater. This process impacts Dissolved Oxygen (DO) levels by promoting conditions that can lead to hypoxia, particularly in areas with high nutrient runoff that cause algal blooms. Changes in salinity from freshwater inputs (like river runoff) can also exacerbate acidification effects, as varying salinity levels can affect the ability of marine organisms to adapt to changing pH conditions.",
    what: "Mitigate CO2 emissions by reducing fossil fuel consumption and promoting renewable energy sources. Enhance monitoring of ocean pH and DO levels, and implement strategies to buffer the effects of acidification, such as protecting and restoring marine ecosystems like mangroves and coral reefs that can help stabilize conditions.",
  },
];

const resourceLink = [
  {
    id: 1,
    url: "https://www.youtube.com/embed/wHcY-iFSYZM?si=HL2OZIl8PpE0mmMv",
  },
  {
    id: 2,
    url: "https://www.youtube.com/embed/Fp-wA1zBIRA?si=R6em945wyp0vlykR",
  },
  {
    id: 3,
    url: "https://www.youtube.com/embed/invUp0SX49g?si=mzJznLxYWyKDs8rC",
  },
  {
    id: 4,
    url: "https://www.youtube.com/embed/qNTOq1uEObc?si=wsvYaaSWAQHQw6oC",
  },
  {
    id: 5,
    url: "https://www.youtube.com/embed/wNKmHk-L2N0?si=6ICrMQ5i1peBleTC",
  },
];

const HydroAwareness = () => {
  return (
    <Box>
      <Awareness
        prevPage="/home/hydrogame"
        leftData={leftSideData}
        awarenessData={atmosphereData}
        resourceLink={resourceLink}
        rightData={rightSideData}
        main_bg="https://i.ibb.co.com/sjxPdb9/hydrobg.png"
        secondary_bg="#27b0aa"
      />
    </Box>
  );
};

export default HydroAwareness;
