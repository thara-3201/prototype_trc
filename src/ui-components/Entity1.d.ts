/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type Entity1InputValues = {
    username?: string;
    password?: string;
};
export declare type Entity1ValidationValues = {
    username?: ValidationFunction<string>;
    password?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Entity1OverridesProps = {
    Entity1Grid?: PrimitiveOverrideProps<GridProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    password?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type Entity1Props = React.PropsWithChildren<{
    overrides?: Entity1OverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: Entity1InputValues) => Entity1InputValues;
    onSuccess?: (fields: Entity1InputValues) => void;
    onError?: (fields: Entity1InputValues, errorMessage: string) => void;
    onChange?: (fields: Entity1InputValues) => Entity1InputValues;
    onValidate?: Entity1ValidationValues;
} & React.CSSProperties>;
export default function Entity1(props: Entity1Props): React.ReactElement;
