/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Updatepwd } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UpdatepwdUpdateFormInputValues = {
    oldpassword?: string;
    newpassword?: string;
};
export declare type UpdatepwdUpdateFormValidationValues = {
    oldpassword?: ValidationFunction<string>;
    newpassword?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UpdatepwdUpdateFormOverridesProps = {
    UpdatepwdUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    oldpassword?: PrimitiveOverrideProps<TextFieldProps>;
    newpassword?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UpdatepwdUpdateFormProps = React.PropsWithChildren<{
    overrides?: UpdatepwdUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    updatepwd?: Updatepwd;
    onSubmit?: (fields: UpdatepwdUpdateFormInputValues) => UpdatepwdUpdateFormInputValues;
    onSuccess?: (fields: UpdatepwdUpdateFormInputValues) => void;
    onError?: (fields: UpdatepwdUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UpdatepwdUpdateFormInputValues) => UpdatepwdUpdateFormInputValues;
    onValidate?: UpdatepwdUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UpdatepwdUpdateForm(props: UpdatepwdUpdateFormProps): React.ReactElement;
