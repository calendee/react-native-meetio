import * as React from "react";
import Svg, { Defs, ClipPath, Path, G } from "react-native-svg";

interface Props {
  width?: number;
  height?: number;
  fillColor?: string;
}

function Add({ width = 24, height = 24, fillColor = "#241332" }: Props) {
  return (
    <Svg viewBox="0 0 24 24" {...{ width, height }}>
      <Defs>
        <ClipPath id="prefix__a">
          <Path fill="none" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
      <G data-name="icon/add" clipPath="url(#prefix__a)">
        <Path fill="none" d="M0 0h24v24H0z" />
        <Path
          // eslint-disable-next-line max-len
          d="M11.25 19.25v-6.5h-6.5a.75.75 0 010-1.5h6.5v-6.5a.75.75 0 111.5 0v6.5h6.5a.75.75 0 010 1.5h-6.5v6.5a.75.75 0 11-1.5 0z"
          fill={fillColor}
        />
      </G>
    </Svg>
  );
}

export default Add;
