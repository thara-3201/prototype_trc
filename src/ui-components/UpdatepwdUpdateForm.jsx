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
export default function UpdatepwdUpdateForm(props) {
  const {
    id: idProp,
    updatepwd: updatepwdModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    oldpassword: "",
    newpassword: "",
  };
  const [oldpassword, setOldpassword] = React.useState(
    initialValues.oldpassword
  );
  const [newpassword, setNewpassword] = React.useState(
    initialValues.newpassword
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = updatepwdRecord
      ? { ...initialValues, ...updatepwdRecord }
      : initialValues;
    setOldpassword(cleanValues.oldpassword);
    setNewpassword(cleanValues.newpassword);
    setErrors({});
  };
  const [updatepwdRecord, setUpdatepwdRecord] =
    React.useState(updatepwdModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Updatepwd, idProp)
        : updatepwdModelProp;
      setUpdatepwdRecord(record);
    };
    queryData();
  }, [idProp, updatepwdModelProp]);
  React.useEffect(resetStateValues, [updatepwdRecord]);
  const validations = {
    oldpassword: [{ type: "Required" }],
    newpassword: [{ type: "Required" }],
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
          oldpassword,
          newpassword,
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
          await DataStore.save(
            Updatepwd.copyOf(updatepwdRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "UpdatepwdUpdateForm")}
      {...rest}
    >
      <TextField
        label="Oldpassword"
        isRequired={true}
        isReadOnly={false}
        value={oldpassword}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              oldpassword: value,
              newpassword,
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
      <TextField
        label="Newpassword"
        isRequired={true}
        isReadOnly={false}
        value={newpassword}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              oldpassword,
              newpassword: value,
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
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || updatepwdModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || updatepwdModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
