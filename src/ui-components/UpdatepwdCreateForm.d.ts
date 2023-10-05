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
export declare type UpdatepwdCreateFormInputValues = {
    newpassword?: string;
    oldpassword?: string;
};
export declare type UpdatepwdCreateFormValidationValues = {
    newpassword?: ValidationFunction<string>;
    oldpassword?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UpdatepwdCreateFormOverridesProps = {
    UpdatepwdCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    newpassword?: PrimitiveOverrideProps<TextFieldProps>;
    oldpassword?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UpdatepwdCreateFormProps = React.PropsWithChildren<{
    overrides?: UpdatepwdCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UpdatepwdCreateFormInputValues) => UpdatepwdCreateFormInputValues;
    onSuccess?: (fields: UpdatepwdCreateFormInputValues) => void;
    onError?: (fields: UpdatepwdCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UpdatepwdCreateFormInputValues) => UpdatepwdCreateFormInputValues;
    onValidate?: UpdatepwdCreateFormValidationValues;
} & React.CSSProperties>;
export default function UpdatepwdCreateForm(props: UpdatepwdCreateFormProps): React.ReactElement;
