import { Box } from "@mui/material";
import Awareness from "../../components/awareness/Awareness";

const leftSideData = [
  {
    id: 1,
    image: "https://i.ibb.co.com/Sws3VBN/pedo-awareness-1.png",
    title: "Land Surface",
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/qg25TyM/drought.png",
    title: "Drought",
    url: "https://worldview.earthdata.nasa.gov/?v=-11.713535597329738,-25.70190556372867,181.43884350342586,66.0957746078544&l=NDH_Drought_Proportional_Economic_Loss_Risk_Deciles_2000,NDH_Drought_Mortality_Risks_Distribution_2000,NDH_Drought_Hazard_Frequency_Distribution_1980-2000&lg=false&l1=HLS_SAVI_Landsat(bandCombo=%7B%22assets%22%3A%5B%22B05%22;%22B04%22%5D;%22expression%22%3A%221.5*%3C%3CB05-B04%3E%2F%3CB05%2BB04%2B0.5%3E%3E%22;%22rescale%22%3A%22-1;1%22;%22colormap_name%22%3A%22brbg%22%7D),HLS_EVI_Landsat(bandCombo=%7B%22assets%22%3A%5B%22B05%22;%22B04%22;%22B02%22%5D;%22expression%22%3A%22%3C2.5*%3CB05-B04%3E%3E%2F%3CB05%2B6*B04-7.5*B02%2B1%3E%22;%22rescale%22%3A%22-1;1%22;%22colormap_name%22%3A%22brbg%22%7D),HLS_NDVI_Landsat(bandCombo=%7B%22assets%22%3A%5B%22B05%22;%22B04%22%5D;%22expression%22%3A%22%3CB05-B04%3E%2F%3CB05%2BB04%3E%22;%22rescale%22%3A%22-1;1%22;%22colormap_name%22%3A%22brbg%22%7D),HLS_False_Color_Vegetation_Landsat(bandCombo=%7B%22r%22%3A%22B06%22;%22g%22%3A%22B05%22;%22b%22%3A%22B04%22%7D),HLS_False_Color_Vegetation_Sentinel(bandCombo=%7B%22r%22%3A%22B11%22;%22g%22%3A%22B8A%22;%22b%22%3A%22B04%22%7D)&lg1=false&ca=true&cv=98&t=2024-09-28-T07%3A40%3A40Z&t1=2024-09-21-T07%3A40%3A40Z",
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/FgYpgx2/pedo-awareness-3.png",
    title: "Land Surface",
  },
];

// Right side data
const rightSideData = [
  {
    id: 1,
    image: "https://i.ibb.co.com/58Vy92S/pedo-awareness-2.png",
    title: "Land Surface",
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/cbrYNn3/temperature-ph.png",
    title: "Temperature & pH",
    url: "https://worldview.earthdata.nasa.gov/?v=-75.58821454614225,-58.46372914878933,220.1678276908006,87.10369788970598&l=AIRS_L2_Surface_Air_Temperature_Night,AIRS_L2_Surface_Air_Temperature_Day,MODIS_Aqua_L3_EVI_Monthly,MODIS_Terra_Land_Surface_Temp_Day_TES&lg=false&t=2024-09-28-T07%3A40%3A40Z",
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/BshgHFD/pedo-awareness-4.png",
    title: "Land Surface",
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
    title: "Abnormal Water Ecosystem",
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
        prevPage="/home/pedogame"
        leftData={leftSideData}
        awarenessData={atmosphereData}
        resourceLink={resourceLink}
        rightData={rightSideData}
        main_bg=""
      />
    </Box>
  );
};

export default HydroAwareness;
