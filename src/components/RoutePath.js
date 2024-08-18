import React from "react";
import { Polyline } from "react-leaflet";
import { Tooltip } from "react-leaflet";

function RoutePath({ path }) {
  return (
    <div className="relative">
      <Polyline positions={path} color="red" weight={5} opacity={0.7}>
        <Tooltip direction="top" offset={[0, -10]} opacity={1}>
          <span className="bg-gray-800 text-white text-sm p-2 rounded-lg">
            Route Path
          </span>
        </Tooltip>
      </Polyline>
    </div>
  );
}

export default RoutePath;
