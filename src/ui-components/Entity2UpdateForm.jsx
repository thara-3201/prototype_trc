/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Entity2 } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function Entity2UpdateForm(props) {
  const {
    id: idProp,
    entity2: entity2ModelProp,
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
    retypepassword: "",
  };
  const [newpassword, setNewpassword] = React.useState(
    initialValues.newpassword
  );
  const [retypepassword, setRetypepassword] = React.useState(
    initialValues.retypepassword
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = entity2Record
      ? { ...initialValues, ...entity2Record }
      : initialValues;
    setNewpassword(cleanValues.newpassword);
    setRetypepassword(cleanValues.retypepassword);
    setErrors({});
  };
  const [entity2Record, setEntity2Record] = React.useState(entity2ModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Entity2, idProp)
        : entity2ModelProp;
      setEntity2Record(record);
    };
    queryData();
  }, [idProp, entity2ModelProp]);
  React.useEffect(resetStateValues, [entity2Record]);
  const validations = {
    newpassword: [{ type: "Required" }],
    retypepassword: [{ type: "Required" }],
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
          retypepassword,
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
            Entity2.copyOf(entity2Record, (updated) => {
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
      {...getOverrideProps(overrides, "Entity2UpdateForm")}
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
              retypepassword,
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
        label="Retypepassword"
        isRequired={true}
        isReadOnly={false}
        value={retypepassword}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              newpassword,
              retypepassword: value,
            };
            const result = onChange(modelFields);
            value = result?.retypepassword ?? value;
          }
          if (errors.retypepassword?.hasError) {
            runValidationTasks("retypepassword", value);
          }
          setRetypepassword(value);
        }}
        onBlur={() => runValidationTasks("retypepassword", retypepassword)}
        errorMessage={errors.retypepassword?.errorMessage}
        hasError={errors.retypepassword?.hasError}
        {...getOverrideProps(overrides, "retypepassword")}
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
          isDisabled={!(idProp || entity2ModelProp)}
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
              !(idProp || entity2ModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
