import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-104.0, -20.0, 0],
        center: [20, -10],
        scale: 600
      }}
      style={{width:"100%", height:"100%"}}
    >
      <Geographies
        geography="./features.json"
        fill="#afd6fd"
        stroke="#265fad"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[113.921327, 0.789275]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#1a316f",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#121212">
          {"Indonesia"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
