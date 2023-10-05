/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import ContactUs from "./ContactUs";
import { Flex } from "@aws-amplify/ui-react";
export default function UpdatePassword(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="983px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="80px 80px 80px 80px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "UpdatePassword")}
      {...rest}
    >
      <ContactUs
        display="flex"
        gap="24px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        borderRadius="8px"
        padding="32px 32px 32px 32px"
        backgroundColor="rgba(250,250,250,1)"
        {...getOverrideProps(overrides, "Update Password")}
      ></ContactUs>
    </Flex>
  );
}
