import { Box } from "@mui/material";
import Awareness from "../../components/awareness/Awareness";

const leftSideData = [
  {
    id: 1,
    image: "https://i.ibb.co.com/9N9d8DZ/air-pollution.png",
    title: "Air Pollution",
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/KyKP5RP/Arosole-Layer.png",
    title: "AEROSOL LAYER",
    url: "https://worldview.earthdata.nasa.gov/?v=75.30150139424218,19.527140838886055,98.37650755418808,30.88437043323443&l=Reference_Labels_15m(hidden),Reference_Features_15m(hidden),Coastlines_15m,VIIRS_NOAA20_Aerosol_Type_Deep_Blue_Best_Estimate,OMI_UV_Aerosol_Index,OMI_Aerosol_Index&lg=false&l1=Reference_Labels_15m(hidden),Reference_Features_15m(hidden),Coastlines_15m,VIIRS_NOAA20_Aerosol_Type_Deep_Blue_Best_Estimate,OMI_UV_Aerosol_Index,OMI_Aerosol_Index&lg1=false&ca=true&cv=2&s=90.4155,23.7073&t=2024-09-28-T07%3A07%3A14Z&t1=2024-09-21-T07%3A07%3A14Z",
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/sC0cwT3/heat-wave.png",
    title: "Heat Wave",
  },
];

// Right side data
const rightSideData = [
  {
    id: 1,
    image: "https://i.ibb.co.com/wpcB887/global-warming.pngf",
    title: "Global Warming",
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/jrWYKPX/temperature.gif",
    title: "Temperature",
    url: "https://worldview.earthdata.nasa.gov/?v=-178.7047738614786,-85.27018661827908,136.71142549788368,74.08070576639874&i=1&as=2014-09-18-T00%3A00%3A00Z&ae=2024-09-28-T00%3A00%3A00Z&l=AIRS_L3_Surface_Air_Temperature_Daily_Day,AIRS_L3_Surface_Air_Temperature_Daily_Night,AIRS_L2_Surface_Air_Temperature_Night,AIRS_L2_Surface_Air_Temperature_Day&lg=false&ab=on&t=2024-09-18-T00%3A00%3A00Z",
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/Vq01x60/sea-level-raise.png",
    title: "Sea Level Raise",
  },
];

const atmosphereData = [
  {
    id: 0,
    title: "Air Pollution",
    why: "Air pollution happens when harmful substances, including particulate matter, gases, and aerosols, are released into the atmosphere, degrading air quality and impacting human health and the environment.",
    how: "Aerosols—tiny particles suspended in the air—can originate from vehicle emissions, industrial processes, and natural sources like wildfires. These aerosols can influence temperature by scattering and absorbing sunlight, which can lead to local cooling or warming effects. High concentrations of aerosols can reduce solar radiation reaching the Earth's surface, leading to altered weather patterns and health issues due to respiratory problems.",
    what: "Implement stricter emission standards for industries and vehicles to reduce aerosol pollution. Promote cleaner energy sources and enhance public transportation to lower overall emissions and improve air quality.",
    nasaMonitoring:
      "NASA uses satellites like Aqua, Terra, and Suomi-NPP to monitor air pollution, providing data on aerosols for air quality forecasts. A new instrument, the Multi-Angle Imager for Aerosols (MAIA), will soon help scientists study aerosol size, composition, and quantity. By comparing this data with health records, MAIA will help understand the link between aerosol pollution and human health.",
    whyUrl: "https://i.ibb.co.com/vPnF870/whyAirP.webp",
    howUrl: "https://i.ibb.co.com/DRS4DY9/air-Pollution.webpp",
    solutionUrl: "https://i.ibb.co.com/0K2W93j/solution-air-Pollution.webp",
    imgWidth: "250px",
    additionalResources: ["https://climatekids.nasa.gov/air-pollution/"],
    relatedMission: [
      {
        title: "Aqua",
        url: "https://aqua.nasa.gov/",
        img: "https://climatekids.nasa.gov/resources/featured/missions/Aqua.png",
      },
      {
        title: "Suomi-NPP",
        url: "https://science.nasa.gov/mission/suomi-npp/",
        img: "https://climatekids.nasa.gov/resources/featured/missions/Suomi-NPP.png",
      },
      {
        title: "Terra",
        url: "https://terra.nasa.gov/",
        img: "https://climatekids.nasa.gov/resources/featured/missions/Terra.png",
      },
    ],
  },
  {
    id: 1,
    title: "GLOBAL WARMING",
    why: "Global warming is primarily driven by the increase in greenhouse gases (GHGs) due to human activities, such as burning fossil fuels and deforestation, which trap heat in the atmosphere.",
    how: "Increased temperature from greenhouse gases raises global average temperatures, which can enhance the formation of certain aerosols (like black carbon) from combustion processes. These aerosols can absorb heat and further contribute to warming, creating a feedback loop that exacerbates climate change. Additionally, some aerosols reflect sunlight, temporarily cooling the planet, but their overall impact is complex and varies based on their composition.",
    what: "Reduce greenhouse gas emissions through renewable energy adoption, energy efficiency improvements, and reforestation efforts. Support research into geoengineering approaches to manage temperature and aerosol levels effectively.",
    nasaMonitoring:
      "NASA uses satellites like Aqua, Terra,OCO-2 and ICESat-2 to monitor global warming, providing data on surface temperatures, melting ice sheets, and ocean heat content. A new instrument, the Sentinel-6 Michael Freilich, helps scientists study sea level rise, a key consequence of climate change. By analyzing this data alongside other environmental indicators, scientists can better understand the impact of global warming on sea levels, weather patterns, and ecosystems worldwide.",
    whyUrl: "https://i.ibb.co.com/qJxs5s6/cutdown-Tree.webp",
    howUrl: "https://i.ibb.co.com/qN9JWpT/why-Global-Warming.webp",
    solutionUrl: "https://i.ibb.co.com/JyfwDsB/solution-global-Warming.webp",
    imgWidth: "250px",
    additionalResources: ["https://climatekids.nasa.gov/air-pollution/"],
    relatedMission: [
      {
        title: "Aqua",
        url: "https://aqua.nasa.gov/",
        img: "https://climatekids.nasa.gov/resources/featured/missions/Aqua.png",
      },
      {
        title: "OCO-2",
        url: "https://science.nasa.gov/mission/oco-2/",
        img: "https://climatekids.nasa.gov/resources/featured/missions/OCO-2.png",
      },
      {
        title: "Terra",
        url: "https://terra.nasa.gov/",
        img: "https://climatekids.nasa.gov/resources/featured/missions/Terra.png",
      },
      {
        title: "ICESat-2",
        url: "https://icesat-2.gsfc.nasa.gov/",
        img: "https://climatekids.nasa.gov/resources/featured/missions/PACE.png",
      },
    ],
  },
  {
    id: 2,
    title: "SeaLevel Rise",
    why: "Sea-level rise is primarily caused by thermal expansion of seawater due to increasing global temperatures and the melting of glaciers and polar ice.",
    how: "Rising temperatures contribute to the melting of ice caps and glaciers, which increases the volume of water in the oceans. Additionally, aerosols can affect cloud formation and precipitation patterns, influencing regional climate conditions that can either exacerbate or mitigate sea-level rise. Changes in temperature can also lead to more frequent and severe storms, impacting coastal erosion and further contributing to sea-level rise.",
    what: "Mitigate global warming by reducing greenhouse gas emissions and promoting sustainable coastal management practices. Invest in infrastructure that can adapt to rising sea levels and protect vulnerable communities.",
    nasaMonitoring:
      "NASA uses satellites like Aqua, Terra, and Suomi-NPP to monitor air pollution, providing data on aerosols for air quality forecasts. A new instrument, the Multi-Angle Imager for Aerosols (MAIA), will soon help scientists study aerosol size, composition, and quantity. By comparing this data with health records, MAIA will help understand the link between aerosol pollution and human health.",
    whyUrl: "https://i.ibb.co.com/vPnF870/whyAirP.webp",
    howUrl: "https://i.ibb.co.com/DRS4DY9/air-Pollution.webpp",
    solutionUrl: "https://i.ibb.co.com/0K2W93j/solution-air-Pollution.webp",
    imgWidth: "250px",
    additionalResources: ["https://climatekids.nasa.gov/air-pollution/"],
    relatedMission: [
      {
        title: "Aqua",
        url: "https://aqua.nasa.gov/",
        img: "https://climatekids.nasa.gov/resources/featured/missions/Aqua.png",
      },
      {
        title: "Suomi-NPP",
        url: "https://science.nasa.gov/mission/suomi-npp/",
        img: "https://climatekids.nasa.gov/resources/featured/missions/Suomi-NPP.png",
      },
      {
        title: "Terra",
        url: "https://terra.nasa.gov/",
        img: "https://climatekids.nasa.gov/resources/featured/missions/Terra.png",
      },
    ],
  },
  {
    id: 3,
    title: "Heatwave",
    why: "Heatwaves are prolonged periods of excessively hot weather, often exacerbated by climate change and urbanization.",
    how: "Increased temperatures due to global warming can intensify heatwaves, making them more frequent and severe. Aerosols can also play a role; certain types of aerosols can lead to atmospheric instability, potentially enhancing the conditions that cause heat waves. When combined with urban heat islands (areas significantly warmer than their rural surroundings due to human activities), heatwaves can pose serious health risks.",
    what: "Implement urban planning strategies to reduce heat exposure, such as increasing green spaces and reflective surfaces. Promote public awareness and preparedness for heatwaves to protect vulnerable populations.",
    nasaMonitoring:
      "NASA uses satellites like Aqua, Terra, and Suomi-NPP to monitor air pollution, providing data on aerosols for air quality forecasts. A new instrument, the Multi-Angle Imager for Aerosols (MAIA), will soon help scientists study aerosol size, composition, and quantity. By comparing this data with health records, MAIA will help understand the link between aerosol pollution and human health.",
    whyUrl: "https://i.ibb.co.com/vPnF870/whyAirP.webp",
    howUrl: "https://i.ibb.co.com/DRS4DY9/air-Pollution.webpp",
    solutionUrl: "https://i.ibb.co.com/0K2W93j/solution-air-Pollution.webp",
    imgWidth: "250px",
    additionalResources: ["https://climatekids.nasa.gov/air-pollution/"],
    relatedMission: [
      {
        title: "Aqua",
        url: "https://aqua.nasa.gov/",
        img: "https://climatekids.nasa.gov/resources/featured/missions/Aqua.png",
      },
      {
        title: "Suomi-NPP",
        url: "https://science.nasa.gov/mission/suomi-npp/",
        img: "https://climatekids.nasa.gov/resources/featured/missions/Suomi-NPP.png",
      },
      {
        title: "Terra",
        url: "https://terra.nasa.gov/",
        img: "https://climatekids.nasa.gov/resources/featured/missions/Terra.png",
      },
    ],
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
        prevPage="/home/atmogame"
        leftData={leftSideData}
        awarenessData={atmosphereData}
        resourceLink={resourceLink}
        rightData={rightSideData}
        main_bg="https://i.ibb.co.com/LP7DNzw/atmo-awareness-bg.png"
        secondary_bg="#d6732a"
      />
    </Box>
  );
};

export default AtmoAwareness;
