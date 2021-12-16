/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
} from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function Frame390(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      overrides: {
        View: {
          width: "805px",
          padding: "0px 0px 0px 0px",
          backgroundColor: "rgba(0,0,0,1)",
          overflow: "hidden",
          position: "relative",
          height: "78px",
        },
        "View.Image[0]": {
          width: "74px",
          padding: "0px 0px 0px 0px",
          position: "absolute",
          top: "7px",
          left: "13px",
          height: "64px",
        },
        "View.Text[0]": {
          padding: "0px 0px 0px 0px",
          color: "rgba(255,255,255,1)",
          textAlign: "left",
          display: "flex",
          justifyContent: "flex-start",
          fontFamily: "Inter",
          top: "7px",
          left: "104px",
          fontSize: "16px",
          lineHeight: "24px",
          position: "absolute",
          fontWeight: "700",
          direction: "column",
          children: "AWS Amplify",
        },
      },
      variantValues: { property1: "Default" },
    },
    {
      overrides: {
        View: {
          width: "805px",
          padding: "0px 0px 0px 0px",
          backgroundColor: "rgba(0,0,0,1)",
          overflow: "hidden",
          position: "relative",
          height: "212px",
        },
        "View.Image[0]": {
          width: "74px",
          padding: "0px 0px 0px 0px",
          position: "absolute",
          top: "7px",
          left: "13px",
          height: "64px",
        },
        "View.Text[0]": {
          padding: "0px 0px 0px 0px",
          color: "rgba(255,255,255,1)",
          textAlign: "left",
          display: "flex",
          justifyContent: "flex-start",
          fontFamily: "Inter",
          top: "7px",
          left: "104px",
          fontSize: "16px",
          lineHeight: "24px",
          position: "absolute",
          fontWeight: "700",
          direction: "column",
          children: "AWS Amplify",
        },
      },
      variantValues: { property1: "Variant2" },
    },
    {
      overrides: {
        View: {
          width: "805px",
          padding: "0px 0px 0px 0px",
          backgroundColor: "rgba(0,0,0,1)",
          overflow: "hidden",
          position: "relative",
          height: "201px",
        },
        "View.Image[0]": {
          width: "74px",
          padding: "0px 0px 0px 0px",
          position: "absolute",
          top: "7px",
          left: "13px",
          height: "64px",
        },
        "View.Text[0]": {
          padding: "0px 0px 0px 0px",
          color: "rgba(255,255,255,1)",
          textAlign: "left",
          display: "flex",
          justifyContent: "flex-start",
          fontFamily: "Inter",
          top: "7px",
          left: "104px",
          fontSize: "16px",
          lineHeight: "24px",
          position: "absolute",
          fontWeight: "700",
          direction: "column",
          children: "Amazon Connect",
        },
      },
      variantValues: { property1: "Variant3" },
    },
    {
      overrides: {
        View: {
          width: "805px",
          padding: "0px 0px 0px 0px",
          backgroundColor: "rgba(0,0,0,1)",
          overflow: "hidden",
          position: "relative",
          height: "78px",
        },
        "View.Image[0]": {
          width: "74px",
          padding: "0px 0px 0px 0px",
          position: "absolute",
          top: "7px",
          left: "13px",
          height: "64px",
        },
        "View.Text[0]": {
          padding: "0px 0px 0px 0px",
          color: "rgba(255,255,255,1)",
          textAlign: "left",
          display: "flex",
          justifyContent: "flex-start",
          fontFamily: "Inter",
          top: "7px",
          left: "104px",
          fontSize: "16px",
          lineHeight: "24px",
          position: "absolute",
          fontWeight: "700",
          direction: "column",
          children: "Amazon Connect",
        },
      },
      variantValues: { property1: "Variant4" },
    },
  ];
  const mergeVariantsAndOverrides = (variants, overrides) => {
    const overrideKeys = new Set(Object.keys(overrides));
    const sharedKeys = Object.keys(variants).filter((variantKey) =>
      overrideKeys.has(variantKey)
    );
    const merged = Object.fromEntries(
      sharedKeys.map((sharedKey) => [
        sharedKey,
        { ...variants[sharedKey], ...overrides[sharedKey] },
      ])
    );
    return {
      ...variants,
      ...overrides,
      ...merged,
    };
  };
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="805px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(0,0,0,1)"
      overflow="hidden"
      position="relative"
      height="78px"
      {...rest}
      {...getOverrideProps(overrides, "View")}
    >
      <Image
        width="74px"
        padding="0px 0px 0px 0px"
        position="absolute"
        top="7px"
        left="13px"
        height="64px"
        {...getOverrideProps(overrides, "View.Image[0]")}
      ></Image>
      <Text
        padding="0px 0px 0px 0px"
        color="rgba(255,255,255,1)"
        textAlign="left"
        display="flex"
        justifyContent="flex-start"
        fontFamily="Inter"
        top="7px"
        left="104px"
        fontSize="16px"
        lineHeight="24px"
        position="absolute"
        fontWeight="700"
        direction="column"
        children="AWS Amplify"
        {...getOverrideProps(overrides, "View.Text[0]")}
      ></Text>
    </View>
  );
}
