import React from "react";
import { YMaps, Map, ObjectManager, Placemark } from "@pbe/react-yandex-maps";

const YandMap = () => {

  return (
    <>
      <YMaps>
        <Map width="500px" height="500px">
          <Placemark geometry={[61.702423, 30.688193]} />
          <ObjectManager
            objects={{
              openBalloonOnClick: true
            }}
            clusters={{}}
            options={{
              clusterize: true,
              gridSize: 32
            }}
            
            modules={[
              "objectManager.addon.objectsBalloon",
              "objectManager.addon.clustersBalloon"
            ]}
          />
        </Map>
      </YMaps>
    </>
  );
};

export default YandMap;
