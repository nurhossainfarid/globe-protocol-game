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
    title: "Soil Pollution",
    why: "Soil pollution happens due to the accumulation of harmful chemicals, heavy metals, and waste products, which become more dangerous when soil pH or temperature conditions exacerbate their effects.",
    how: "Soil pH and temperature significantly influence soil pollution. Acidic soils increase the solubility and mobility of heavy metals like lead and cadmium, making them more toxic and harmful to plants and groundwater. Conversely, alkaline soils can lead to the accumulation of salts and reduce nutrient availability. High temperatures accelerate chemical reactions and pollutant degradation, making toxic substances more reactive and easily absorbed by the environment. In contrast, low temperatures slow microbial breakdown of pollutants, allowing contaminants to persist in the soil for longer periods.",
    what: "Restore balanced soil pH by using lime to reduce acidity or sulfur to lower alkalinity. Reduce the use of harmful pesticides and fertilizers, and focus on organic farming practices. Use bioremediation (plants and microbes) to clean up contaminated soils.",
  },
  {
    id: 1,
    title: "Soil Erosion",
    why: "Soil erosion occurs when the topsoil is washed or blown away by wind or water, often due to poor land management and soil structure being weakened by unfavorable pH or temperature conditions.",
    how: "The interplay of soil pH and temperature contributes to soil erosion. Acidic soils lose essential binding minerals, weakening soil structure and increasing susceptibility to erosion, while alkaline soils can become compacted, hindering water infiltration and causing runoff that washes away topsoil. High temperatures dry out soil, making it brittle and more prone to wind erosion, whereas low temperatures cause freeze-thaw cycles that break down soil particles, further increasing the risk of erosion.",
    what: "To prevent erosion, maintain an optimal soil pH by balancing acidity and alkalinity. Use cover crops and no-till farming to protect the soil from wind and water erosion. Plant trees or hedges to act as windbreaks and minimize soil loss, and increase organic matter to improve soil structure.",
  },
  {
    id: 2,
    title: "Soil Infertility",
    why: "Soil infertility happens when essential nutrients are depleted, or when unfavorable soil pH and temperature conditions limit the availability and uptake of these nutrients by plants.",
    how: "Soil pH and temperature are key factors in soil infertility. In acidic soils, nutrients like nitrogen, phosphorus, and potassium become less available, while toxic metals become more soluble and harmful to plants. In alkaline soils, nutrient absorption is severely restricted, leading to poor plant growth. Additionally, high temperatures accelerate organic matter decomposition, rapidly depleting nutrients, while low temperatures slow down microbial activity, hindering nutrient cycling and exacerbating infertility.",
    what: "Manage soil pH by adding lime to reduce acidity or sulfur to adjust alkalinity. Rotate crops to prevent nutrient depletion and incorporate organic matter like compost or manure to restore fertility. Use mulching to regulate soil temperature and moisture, supporting microbial life and nutrient availability.",
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

const PedoAwareness = () => {
  return (
    <Box>
      <Awareness
        prevPage="/home/pedogame"
        leftData={leftSideData}
        awarenessData={atmosphereData}
        resourceLink={resourceLink}
        rightData={rightSideData}
      />
    </Box>
  );
};

export default PedoAwareness;
