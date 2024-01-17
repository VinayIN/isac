import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { Divider } from 'primereact/divider';
import { classNames } from 'primereact/utils';

import { Card } from 'primereact/card';


function Sponsors () {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [formData, setFormData] = useState({});

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            street: '',
            description: '',
            plz: '',
            ort: '',
            land: '',
            accept: false
        },
        validate: (data) => {
            let errors = {};

            if (!data.name) {
                errors.name = 'Name is required.';
            }

            if (!data.email) {
                errors.email = 'Email is required.';
            }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
                errors.email = 'Invalid email address. E.g. example@gmail.com';
            }

            if (!data.accept) {
                errors.accept = 'You need to agree to be contacted.';
            }

            return errors;
        },
        onSubmit: async (data) => {
            const jsonValues = JSON.stringify(data);
            const file = new Blob([jsonValues], { type: 'application/json' });
            const uploadformData = new FormData();
            uploadformData.append('file', file, `${data.name}.json`);

            try {
                const description = "The sponser data can be found here: https://deta.space/builder/a0yMYmbrGQQL/develop?tab=data"
                const response = await fetch('https://isacapi-1-r3703096.deta.app/uploadfile?description=' + encodeURIComponent(`${data.description}\n${description}`), {
                    method: 'POST',
                    body: uploadformData,
                    headers: {
                        'Accept': 'application/json',
                    },
                });
                console.log("Response received", response);
                if (response.ok) {
                    const responseBody = await response.json();
                    if (responseBody.status === 200) {
                        setFormData(data);
                        setShowSuccessMessage(true);
                    } else {
                        console.error('Server processed request, but returned non-success status');
                        setShowErrorMessage(true);
                    }
                } else {
                    console.error('Request failed');
                    setShowErrorMessage(true);
                }
            } catch (error) {
                console.error('Error occurred during fetch operation:', error);
                setShowErrorMessage(true);
            }
            formik.resetForm();
        }        
    });
    const sponsors = [
        { src: '/images/sponsor/11.png', alt: 'Sponsor 1' },
        { src: '/images/sponsor/3.PNG', alt: 'Sponsor 3' },
        { src: '/images/sponsor/4.JPG', alt: 'Sponsor 4' },
        // ... add more sponsors here
    ];
    const isFormFieldValid = (name) => !!(formik.touched[name] && formik.errors[name]);
    const getFormErrorMessage = (name) => {
        return isFormFieldValid(name) && <small className="p-error">{formik.errors[name]}</small>;
    };

    const successDialogFooter = (
        <Button label="Ok" className="p-button-text" onClick={() => setShowSuccessMessage(false)} />
    );
    
    const errorDialogFooter = (
        <Button label="Ok" className="p-button-text" onClick={() => setShowErrorMessage(false)} />
    );
    return (
        <div className="form-demo pb-4">
            <Dialog visible={showSuccessMessage} onHide={() => setShowSuccessMessage(false)} footer={successDialogFooter} header="Success">
                <p>Your form has been submitted successfully!</p>
            </Dialog>

            <Dialog visible={showErrorMessage} onHide={() => setShowErrorMessage(false)} footer={errorDialogFooter} header="Error">
                <p>There was an error submitting the form. Server is busy!</p>
                <p>Please send us a mail at isacottbus@gmail.com.</p>
            </Dialog>
            
            <Card title="Our previous Sponsors !" subTitle="" className="flex justify-content-center">
              <div>
              <div className="sponsor-logos p-m-3">
            {sponsors.map(sponsor => (
                <div className="p-col-12 p-md-3 p-lg-2" key={sponsor.key}>
                    <img src={sponsor.src} alt={sponsor.alt} key={sponsor.key} className="sponsor-logo" />
                </div>
            ))}
             
        </div>
        <div className="sponsor-squre">
                    <img src='/images/sponsor/2.JPG' alt='Sponsor 2' className="sponsor-logo-squ" />
                </div>
              </div>
            </Card>
            <div className="flex justify-content-center">
                <div className="card">
                    <h2 className="text-center">Help us speading cultural diversity around Cottbus.</h2>
                    <h3 className='text-center'>Can you please share your details?</h3>
                    <form onSubmit={formik.handleSubmit} className="p-fluid">
                        <div className="field">
                            <span className="p-float-label">
                                <InputText id="name" name="name" value={formik.values.name} onChange={formik.handleChange} autoFocus className={classNames({ 'p-invalid': isFormFieldValid('name') })} />
                                <label htmlFor="name" className={classNames({ 'p-error': isFormFieldValid('name') })}>Name*</label>
                            </span>
                            {getFormErrorMessage('name')}
                        </div>
                        <div className="field">
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-envelope" />
                                <InputText id="email" name="email" value={formik.values.email} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('email') })} />
                                <label htmlFor="email" className={classNames({ 'p-error': isFormFieldValid('email') })}>Email*</label>
                            </span>
                            {getFormErrorMessage('email')}
                        </div>
                        <div className="field">
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-globe" />
                                <InputText id="street" name="street" value={formik.values.street} onChange={formik.handleChange}  />
                                <label htmlFor="street">Straße*</label>
                            </span>
                        </div>
                        <div className="field">
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-globe" />
                                <InputText id="plz" name="plz" value={formik.values.plz} onChange={formik.handleChange}  />
                                <label htmlFor="plz">PLZ*</label>
                            </span>
                        </div>
                        <div className="field">
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-globe" />
                                <InputText id="ort" name="ort" value={formik.values.ort} onChange={formik.handleChange}  />
                                <label htmlFor="ort">Ort*</label>
                            </span>
                        </div>
                        <div className="field">
                            <span className="p-float-label p-input-icon-right">
                                <i className="pi pi-globe" />
                                <InputText id="land" name="land" value={formik.values.land} onChange={formik.handleChange}  />
                                <label htmlFor="land">Land*</label>
                            </span>
                        </div>
                        <div>
                            <label htmlFor="description">Please share any information, you like us to have from you.</label>
                            <InputTextarea
                                inputId="description"
                                name="description"
                                rows={5}
                                cols={40}
                                value={formik.values.description}
                                onChange={(e) => {
                                    formik.setFieldValue('description', e.target.value);
                                }}
                              />
                        </div>
                        <div className="field-checkbox">
                            <Checkbox inputId="accept" name="accept" checked={formik.values.accept} onChange={formik.handleChange} className={classNames({ 'p-invalid': isFormFieldValid('accept') })} />
                            <label htmlFor="accept" className={classNames({ 'p-error': isFormFieldValid('accept') })}>I agree to be contacted by member of ISAC *</label>
                        </div>
                        <Button type="submit" label="Submit" className="mt-2"/>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Sponsors;