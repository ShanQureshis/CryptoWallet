import { Image, Text, View } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES, icons } from "../constants";

const BalanceInfo = ({ title, displayAmounts, changePct, containerStyle }) => {
  return (
    <View style={{ ...containerStyle }}>
      {/* Title */}
      <Text style={{ color: COLORS.white }}>{title}</Text>
      {/* Figures */}
      <View className="flex-row items-end">
        <Text style={{ color: COLORS.lightGray3, ...FONTS.h3 }}>$</Text>
        <Text
          style={{ marginLeft: SIZES.base, color: COLORS.white, ...FONTS.h2 }}
        >
          {displayAmounts.toLocaleString()}{" "}
        </Text>
        <Text style={{ color: COLORS.lightGray3, ...FONTS.h3 }}>USD</Text>
      </View>
      {/* Change Percentage */}
      <View className="flex-row items-end">
        {changePct != 0 && (
          <Image
            source={icons.upArrow}
            style={{
              width: 10,
              height: 10,
              alignSelf: "center",
              tintColor: changePct > 0 ? COLORS.lightGreen : COLORS.red,
              transform:
                changePct > 0 ? [{ rotate: "45deg" }] : [{ rotate: "125deg" }],
            }}
          />
        )}

        <Text
          style={{
            marginLeft: SIZES.base,
            alignSelf: "flex-end",
            color:
              changePct == 0
                ? COLORS.LightGray3
                : changePct > 0
                ? COLORS.lightGreen
                : COLORS.red,
            ...FONTS.h4,
          }}
        >
          {changePct.toFixed(2)}%
        </Text>
        <Text
          style={{
            marginLeft: SIZES.radius,
            alignSelf: "flex-end",
            color: COLORS.lightGray3,
            ...FONTS.h5,
          }}
        >
          7d change
        </Text>
      </View>
    </View>
  );
};

export default BalanceInfo;
