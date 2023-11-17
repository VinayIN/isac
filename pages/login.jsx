import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { classNames } from 'primereact/utils'
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Card } from 'primereact/card';

function Login() {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate: (data) => {
            let errors = {};
            if (!data.email) {
                errors.email = 'Email is required.';
            }
            if (!data.password) {
                errors.password = 'Password is required.';
            }
            return errors;
        },
        onSubmit: (data) => {
            setFormData(data);
            setShowMessage(true);
            formik.resetForm();
        }
    });

    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    return (
        <div className='py-8 flex justify-content-center'>
            <Card title="Please enter your authentication credentials!">
            <form onSubmit={formik.handleSubmit} className="p-fluid">
                <div className="field">
                    <span className="p-input-icon-right">
                        <i className="pi pi-envelope" />
                        <InputText id="email" name="email" value={formik.values.email} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('email') })} required/>
                        <label htmlFor="email" className={classNames({ 'p-error': isFormFieldValid('email') })}>Email*</label>
                    </span>
                    <small className="block">Provide your email. (@gmail.com, @b-tu.de).</small>
                    {getFormErrorMessage('email')}
                </div>
                <div className="field">
                    <span className="p-input-icon-right">
                        <Password id="password" name="password" value={formik.values.password} onChange={formik.handleChange} toggleMask
                            className={classNames({ 'p-invalid': isFormFieldValid('password') })} required/>
                        <label htmlFor="password" className={classNames({ 'p-error': isFormFieldValid('password') })}>Password*</label>
                    </span>
                    <small className="block">If you dont rememeber, Register again to reset.</small>
                    {getFormErrorMessage('password')}
                </div>
                <div>
                    <Button label="Login"  type="submit" severity="success" icon="pi pi-check" autoFocus />
                </div>
            </form>
            </Card>
        </div>
        
    )
}
export default Login;