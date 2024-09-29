import { Box } from "@mui/material";
import Awareness from "../../components/awareness/Awareness";

const leftSideData = [
  {
    id: 1,
    image: "https://i.ibb.co.com/Rjbqc0D/las-vegas.gif",
    title: "Land Surface",
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/KyKP5RP/Arosole-Layer.png",
    title: "AEROSOL LAYER",
    url: "https://worldview.earthdata.nasa.gov/?v=75.30150139424218,19.527140838886055,98.37650755418808,30.88437043323443&l=Reference_Labels_15m(hidden),Reference_Features_15m(hidden),Coastlines_15m,VIIRS_NOAA20_Aerosol_Type_Deep_Blue_Best_Estimate,OMI_UV_Aerosol_Index,OMI_Aerosol_Index&lg=false&l1=Reference_Labels_15m(hidden),Reference_Features_15m(hidden),Coastlines_15m,VIIRS_NOAA20_Aerosol_Type_Deep_Blue_Best_Estimate,OMI_UV_Aerosol_Index,OMI_Aerosol_Index&lg1=false&ca=true&cv=2&s=90.4155,23.7073&t=2024-09-28-T07%3A07%3A14Z&t1=2024-09-21-T07%3A07%3A14Z",
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/Rjbqc0D/las-vegas.gif",
    title: "Land Surface",
  },
];

// Right side data
const rightSideData = [
  {
    id: 1,
    image: "https://i.ibb.co.com/Rjbqc0D/las-vegas.gif",
    title: "Land Surface",
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/x7DBG07/temperature.png",
    title: "Temperature",
    url: "https://worldview.earthdata.nasa.gov/?v=-48.35278669783487,5.2644935325830495,54.619884303512166,55.94635504105855&l=AIRS_L3_Surface_Air_Temperature_Daily_Day,AIRS_L3_Surface_Air_Temperature_Daily_Night,AIRS_L2_Surface_Air_Temperature_Night,AIRS_L2_Surface_Air_Temperature_Day&lg=false&t=2024-09-28-T07%3A40%3A40Z",
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/Rjbqc0D/las-vegas.gif",
    title: "Land Surface",
  },
];



const atmosphereData = [
  {
    id: 0,
    title: "Air Pollution",
    why: "Air pollution happens when harmful substances, including particulate matter, gases, and aerosols, are released into the atmosphere, degrading air quality and impacting human health and the environment.",
    how: "Aerosols—tiny particles suspended in the air—can originate from vehicle emissions, industrial processes, and natural sources like wildfires. These aerosols can influence temperature by scattering and absorbing sunlight, which can lead to local cooling or warming effects. High concentrations of aerosols can reduce solar radiation reaching the Earth's surface, leading to altered weather patterns and health issues due to respiratory problems.",
    what: "Implement stricter emission standards for industries and vehicles to reduce aerosol pollution. Promote cleaner energy sources and enhance public transportation to lower overall emissions and improve air quality.",
  },
  {
    id: 1,
    title: "GLOBAL WARMING",
    why: "Global warming is primarily driven by the increase in greenhouse gases (GHGs) due to human activities, such as burning fossil fuels and deforestation, which trap heat in the atmosphere.",
    how: "Increased temperature from greenhouse gases raises global average temperatures, which can enhance the formation of certain aerosols (like black carbon) from combustion processes. These aerosols can absorb heat and further contribute to warming, creating a feedback loop that exacerbates climate change. Additionally, some aerosols reflect sunlight, temporarily cooling the planet, but their overall impact is complex and varies based on their composition.",
    what: "Reduce greenhouse gas emissions through renewable energy adoption, energy efficiency improvements, and reforestation efforts. Support research into geoengineering approaches to manage temperature and aerosol levels effectively.",
  },
  {
    id: 2,
    title: "SeaLevel Rise",
    why: "Sea-level rise is primarily caused by thermal expansion of seawater due to increasing global temperatures and the melting of glaciers and polar ice.",
    how: "Rising temperatures contribute to the melting of ice caps and glaciers, which increases the volume of water in the oceans. Additionally, aerosols can affect cloud formation and precipitation patterns, influencing regional climate conditions that can either exacerbate or mitigate sea-level rise. Changes in temperature can also lead to more frequent and severe storms, impacting coastal erosion and further contributing to sea-level rise.",
    what: "Mitigate global warming by reducing greenhouse gas emissions and promoting sustainable coastal management practices. Invest in infrastructure that can adapt to rising sea levels and protect vulnerable communities.",
  },
  {
    id: 3,
    title: "Heatwave",
    why: "Heatwaves are prolonged periods of excessively hot weather, often exacerbated by climate change and urbanization.",
    how: "Increased temperatures due to global warming can intensify heatwaves, making them more frequent and severe. Aerosols can also play a role; certain types of aerosols can lead to atmospheric instability, potentially enhancing the conditions that cause heat waves. When combined with urban heat islands (areas significantly warmer than their rural surroundings due to human activities), heatwaves can pose serious health risks.",
    what: "Implement urban planning strategies to reduce heat exposure, such as increasing green spaces and reflective surfaces. Promote public awareness and preparedness for heatwaves to protect vulnerable populations.",
  },
];

const resourceLink = [
  {
    id: 1,
    url: "https://www.youtube.com/embed/e6rglsLy1Ys?si=v5CaG9CmB9mL0HXh",
  },
  {
    id: 2,
    url: "https://www.youtube.com/embed/c0G4EH1r01k?si=aaVTX-wvb6CiXP11",
  },
  {
    id: 3,
    url: "https://www.youtube.com/embed/oJAbATJCugs?si=TaVGUY8RiywGj76_",
  },
  {
    id: 4,
    url: "https://www.youtube.com/embed/OT_og-OCdXw?si=u4NeaXEIVl-YGFGf",
  },
  {
    id: 5,
    url: "https://www.youtube.com/embed/QH-KYmRAzOA?si=99koR2FXBcK94QxR",
  },
];

const AtmoAwareness = () => { 
  return (
    <Box>
      <Awareness
        prevPage="/home/pedogame"
        leftData={leftSideData}
        awarenessData={atmosphereData}
        resourceLink={resourceLink}
        rightData={leftSideData}
      />
    </Box>
  );
};

export default AtmoAwareness;