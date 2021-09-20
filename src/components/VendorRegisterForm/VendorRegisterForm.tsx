import { useFormik } from 'formik';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { initialValues, registerInputList, validationSchema } from './constants';
import { RegisterFormProps } from './interfaces';
import classes from './VendorRegisterForm.module.scss';

const VendorRegisterForm: React.FC<RegisterFormProps> = () => {
  // Hook states
  const [t] = useTranslation();
  const { values, handleChange, handleSubmit, handleBlur, errors, touched } = useFormik({
    initialValues,
    onSubmit: () => {
      console.log('submit');
    },
    validationSchema,
    validateOnChange: false,
    validateOnBlur: true,
  });

  // Hook effects

  // Constants

  // Action handlers
  const submitHandler = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    handleSubmit();
  };

  // Renderers
  return (
    <div className={classes.registerFormContainer}>
      <form onSubmit={submitHandler} className={classes.form}>
        {registerInputList.map(({ title, name }) => (
          <React.Fragment key={title}>
            <label htmlFor="Name" className={classes.row}>
              <span>
                {t(title)} <span className={classes.asterisk}>*</span>
              </span>
              <input type="text" name={name} value={values[name]} onChange={handleChange} onBlur={handleBlur} />
            </label>
            {errors[name] && touched[name] && (
              <div className={classes.error}>
                <div>
                  <span>{t(errors[name] as string)}</span>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}

        <div className={classes.button}>
          <div>
            <button type="submit" className={classes.submit}>
              {t('login.register')}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

VendorRegisterForm.defaultProps = {};
export default VendorRegisterForm;
