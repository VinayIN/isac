import React, { useState } from 'react';
import { useFormik } from 'formik';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Dialog } from 'primereact/dialog';
import { classNames } from 'primereact/utils';
import { Card } from 'primereact/card';
import { Image } from 'primereact/image';
import { Resend } from 'resend';
import Link from 'next/link';
import { Tooltip } from 'primereact/tooltip';


function Sponsors () {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

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
            const resendClient = new Resend('re_FSncCJCP_M9KNEDsd4ie5hfxkuBNMiyQo');
            try {
                const formattedData = [];
                Object.entries(data).forEach(([key, value]) => {
                formattedData.push({ key, value });
                });

                const emailBody = `
                <table>
                    ${formattedData.map(({ key, value }) => `<tr><td>${key}</td><td>${value}</td></tr>`).join('')}
                </table>
                `;

                await resendClient.emails.send({
                from: 'Automated <sponser@resend.dev>',
                to: 'ask.isacottbus@gmail.com',
                subject: 'Sponsor Data; Website Form Submission',
                html: emailBody,
                });
                setShowSuccessMessage(true);
            } catch (error) {
                console.log(error);
                setShowErrorMessage(true);
            }
            formik.resetForm();
        }        
    });
    const sponsors = [
        { src: '/images/sponsor/1.png', alt: 'Sponsor 1', href: '' },
        { src: '/images/sponsor/2.png', alt: 'Sponsor 2', href: '' },
        { src: '/images/sponsor/3.png', alt: 'Sponsor 3', href: '' },
        { src: '/images/sponsor/4.png', alt: 'Sponsor 4', href: '' },
        { src: '/images/sponsor/6.png', alt: 'Sponsor 6', href: '' },
        { src: '/images/sponsor/5.png', alt: 'Sponsor 5', href: '' },
        { src: '/images/sponsor/8.png', alt: 'taste-of-india', href: '' },
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
        <div className="form-demo pb-4 mx-6">
            <Dialog visible={showSuccessMessage} onHide={() => setShowSuccessMessage(false)} footer={successDialogFooter} header="Success">
                <p>Your form has been submitted successfully!</p>
            </Dialog>

            <Dialog visible={showErrorMessage} onHide={() => setShowErrorMessage(false)} footer={errorDialogFooter} header="Error">
                <p>There was an error submitting the form. Server is busy!</p>
                <p>Please send us a mail at isacottbus@gmail.com.</p>
            </Dialog>
            
            <Tooltip target=".logo" mouseTrack />
            <Card title="Our previous Sponsors !" className="text-center">
                <div className="p-3 m-3 sponsor-grid">  {/* Apply the 'sponsor-grid' class */}
                {sponsors.map((sponsor, index) => (
                    <Link className="logo" href={sponsor.href} key={index} target='_blank' data-pr-tooltip={sponsor.href}>
                        <Image src={sponsor.src} alt={sponsor.alt} width='150px' key={index}/>
                    </Link>
                ))}
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