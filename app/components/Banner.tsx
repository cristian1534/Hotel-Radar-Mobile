import { Tile } from "react-native-elements";
import React from "react";

export default function Banner({ bannerUrl, title, caption}: any) {
  return (
    <Tile
      imageSrc={{
        uri: bannerUrl,
      }}
      title={title}
      titleStyle={{ fontFamily: "Roboto-Thin", fontWeight: "bold", fontSize: 32}}
      featured
      caption={caption}
      captionStyle={{ fontSize: 26}}
    />
  );
}
