/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ContactUsProps } from "./ContactUs";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UpdatePasswordOverridesProps = {
    UpdatePassword?: PrimitiveOverrideProps<FlexProps>;
    "Update Password"?: ContactUsProps;
} & EscapeHatchProps;
export declare type UpdatePasswordProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: UpdatePasswordOverridesProps | undefined | null;
}>;
export default function UpdatePassword(props: UpdatePasswordProps): React.ReactElement;
