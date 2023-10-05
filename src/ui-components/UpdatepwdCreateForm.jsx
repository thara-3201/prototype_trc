/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Updatepwd } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function UpdatepwdCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    newpassword: "",
    oldpassword: "",
  };
  const [newpassword, setNewpassword] = React.useState(
    initialValues.newpassword
  );
  const [oldpassword, setOldpassword] = React.useState(
    initialValues.oldpassword
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNewpassword(initialValues.newpassword);
    setOldpassword(initialValues.oldpassword);
    setErrors({});
  };
  const validations = {
    newpassword: [{ type: "Required" }],
    oldpassword: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          newpassword,
          oldpassword,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new Updatepwd(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "UpdatepwdCreateForm")}
      {...rest}
    >
      <TextField
        label="Newpassword"
        isRequired={true}
        isReadOnly={false}
        value={newpassword}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              newpassword: value,
              oldpassword,
            };
            const result = onChange(modelFields);
            value = result?.newpassword ?? value;
          }
          if (errors.newpassword?.hasError) {
            runValidationTasks("newpassword", value);
          }
          setNewpassword(value);
        }}
        onBlur={() => runValidationTasks("newpassword", newpassword)}
        errorMessage={errors.newpassword?.errorMessage}
        hasError={errors.newpassword?.hasError}
        {...getOverrideProps(overrides, "newpassword")}
      ></TextField>
      <TextField
        label="Oldpassword"
        isRequired={true}
        isReadOnly={false}
        value={oldpassword}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              newpassword,
              oldpassword: value,
            };
            const result = onChange(modelFields);
            value = result?.oldpassword ?? value;
          }
          if (errors.oldpassword?.hasError) {
            runValidationTasks("oldpassword", value);
          }
          setOldpassword(value);
        }}
        onBlur={() => runValidationTasks("oldpassword", oldpassword)}
        errorMessage={errors.oldpassword?.errorMessage}
        hasError={errors.oldpassword?.hasError}
        {...getOverrideProps(overrides, "oldpassword")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
