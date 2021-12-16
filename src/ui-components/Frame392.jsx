/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
import Frame390 from "./Frame390";
export default function Frame392(props) {
  const { overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Flex
      padding="47px 15px 47px 15px"
      backgroundColor="rgba(255,255,255,1)"
      overflow="hidden"
      position="relative"
      gap="10px"
      direction="column"
      {...rest}
      {...getOverrideProps(overrides, "Flex")}
    >
      <Frame390
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,1)"
        overflow="hidden"
        shrink="0"
        width="805px"
        position="relative"
        height="78px"
        {...getOverrideProps(overrides, "Flex.Frame390[0]")}
      >
        <Image
          width="74px"
          padding="0px 0px 0px 0px"
          position="absolute"
          top="7px"
          left="13px"
          height="64px"
          {...getOverrideProps(overrides, "Flex.Frame390[0].Image[0]")}
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
          {...getOverrideProps(overrides, "Flex.Frame390[0].Text[0]")}
        ></Text>
      </Frame390>
      <Frame390
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,1)"
        overflow="hidden"
        shrink="0"
        width="805px"
        position="relative"
        height="78px"
        {...getOverrideProps(overrides, "Flex.Frame390[1]")}
      >
        <Image
          width="74px"
          padding="0px 0px 0px 0px"
          position="absolute"
          top="7px"
          left="13px"
          height="64px"
          {...getOverrideProps(overrides, "Flex.Frame390[1].Image[0]")}
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
          children="Amazon Connect"
          {...getOverrideProps(overrides, "Flex.Frame390[1].Text[0]")}
        ></Text>
      </Frame390>
    </Flex>
  );
}
