import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { classNames } from 'primereact/utils';
import { Message } from 'primereact/message';
import { Card } from 'primereact/card';

function RequestLogin() {

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
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
        <div className='py-8 flex flex-column'>
            <div className='flex justify-content-center'>
                <Card title="Request Authentication">
                <form onSubmit={formik.handleSubmit} className="p-fluid">
                    <div className="field">
                        <InputText id="firstname" name="firstname" value={formik.values.firstname} onChange={formik.handleChange} placeholder='Your first name*' required/>
                    </div>
                    <div className="field">
                        <InputText id="lastname" name="lastname" value={formik.values.lastname} onChange={formik.handleChange} placeholder='Your last name*' required/>
                    </div>
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
                        <Button label="Cancel" icon="pi pi-times" className="p-button-text" />
                        <Button type="submit" label="Register" icon="pi pi-check" autoFocus />
                    </div>
                </form>
                </Card>
            </div>
            <div className='text-center'>
                <p>
                Please note: Once requested for authentication, please wait for about 24 hours. We will activate your account and let you know through email.
                </p>
                <p>
                In case you are need access urgently. send us a mail at askisacbtu@gmail.com with your authentication code. (You might have received a code after successful registration, Also can be found in your mail.)
                </p>
            </div>
        </div>
    )
}

export default RequestLogin;