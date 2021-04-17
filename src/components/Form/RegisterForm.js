import React from 'react';
import { useFormik } from 'formik';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

import './Form.scss';
import Images from '../../themes/Images';
// import RegisterTypes from '../../redux/RegisterRedux/actions';
import {
    validationRules,
    validateValuesByRule
  } from '../../utils/validation';
  import tableRoutes from '../../utils/route-strings';
  

const RegisterForm = () => {
    // const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
          phone: '',
        },
        validate: (values) => {
          return validateValuesByRule({
            phone: validationRules.phoneNumber
          })(values);
        },
        onSubmit: (values, actions) => {
          console.log(values);
          // dispatch(RegisterTypes.userRegister(values));
        }
      });

    return (
        <form
            onSubmit={formik.handleSubmit}>
            <div className={classNames({
                'form-group': true,
                'has-error': formik.touched.phone && formik.errors.phone
                })}>
                <div className ="phone-input">
                    <label className="label-input">+84 </label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="form-control"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="Enter your mobile number" />
                    {formik.touched.phone && formik.errors.phone && (
                    <span className="help-block">
                    {formik.errors.phone}
                    </span>
                    )}
                </div>
            </div>
            <div>
            <p>
                <label className="checkbox-inline">
                    <input type="checkbox" />&nbsp;
                    Agree Terms and Conditions
                </label>
            </p>
            </div>

            <div className="submit-button">
              <Link to={tableRoutes.information}>
                <button 
                    type="submit"
                    // disabled={!formik.isValid || formik.isSubmitting}
                    className="radius-button"
                >
                    <img src={Images.arrow} alt="arrow-img" />
                </button>
              </Link>
            </div>
        </form>

    );
}

export default RegisterForm;