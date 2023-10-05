/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Entity2 } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type Entity2UpdateFormInputValues = {
    newpassword?: string;
    retypepassword?: string;
};
export declare type Entity2UpdateFormValidationValues = {
    newpassword?: ValidationFunction<string>;
    retypepassword?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Entity2UpdateFormOverridesProps = {
    Entity2UpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    newpassword?: PrimitiveOverrideProps<TextFieldProps>;
    retypepassword?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type Entity2UpdateFormProps = React.PropsWithChildren<{
    overrides?: Entity2UpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    entity2?: Entity2;
    onSubmit?: (fields: Entity2UpdateFormInputValues) => Entity2UpdateFormInputValues;
    onSuccess?: (fields: Entity2UpdateFormInputValues) => void;
    onError?: (fields: Entity2UpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: Entity2UpdateFormInputValues) => Entity2UpdateFormInputValues;
    onValidate?: Entity2UpdateFormValidationValues;
} & React.CSSProperties>;
export default function Entity2UpdateForm(props: Entity2UpdateFormProps): React.ReactElement;
