import React from 'react';
import axios from 'axios';
import { Formik, Form, FastField, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Recaptcha from 'react-google-recaptcha';
import { navigate } from 'gatsby';
import { FormattedIcon } from '@icons';
import { BigButton } from '@components/common';
import {
    StyledContainer,
    StyledFormGroup,
    StyledCenter,
    StyledError,
    StyledInput,
    StyledText
} from './styles';

const validationSchema = Yup.object({
    name: Yup.string().required('Name is required.'),
    email: Yup.string()
              .email('Please enter a valid email.')
              .required('Email is required.'),
    message: Yup.string().required('Message is required'),
    recaptcha: Yup.string().required('Robots are not welcome here!')
});

const ContactForm = () => {

    const sendMessage = async (name, email, message, setSubmitting, resetForm) => {
        try {
            console.log(name)
            await axios({
                method: 'POST',
                url: `${process.env.GATSBY_FORMIK_ENDPOINT}`,
                headers: {
                    'Content-Type': 'application/json',
                },
                data: JSON.stringify({
                    name,
                    email, 
                    message
                }),
            });
            setSubmitting(false);
            resetForm();
            navigate('/confirmation/');
        } catch (err) {
            setSubmitting(false);
            alert(err);
        }
    }

    return (
        <StyledContainer>
            <StyledText>
                Please feel free to contact me via{' '}
                <a href="mailto:hello@thongba.io" target="_top">hello@thongba.io</a>
            </StyledText>
            <StyledText>
                Or fill in the form below
            </StyledText>
            <Formik 
                initialValues={{
                    name:'',
                    email: '',
                    message: '',
                    recaptcha: ''
                }}
                validationSchema={validationSchema}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    const { name, email, message } = values;
                    sendMessage(name, email, message, setSubmitting, resetForm);
                }}
            >
            {({ touched, errors, setFieldValue, isSubmitting }) => (
                <Form>
                    <input type="text" name="_gotcha" hidden />
                    {/* Name field */}
                    <StyledFormGroup>
                        <label htmlFor="name" aria-label="Please insert your name">
                            <StyledText>Name</StyledText>
                            <StyledInput 
                                component="input"
                                as={FastField}
                                type="text"
                                id="name"
                                error={touched.name && errors.name ? 1 : 0}
                                name="name"
                            />
                        </label>
                        <ErrorMessage component={StyledError} name="name" />
                    </StyledFormGroup>
                    {/* Email field */}
                    <StyledFormGroup>
                        <label htmlFor="email" aria-label="Please insert your email">
                            <StyledText>Email address</StyledText>
                            <StyledInput 
                                component="input"
                                as={FastField}
                                type="text"
                                id="email"
                                error={touched.email && errors.email ? 1 : 0}
                                name="email"
                            />
                        </label>
                        <ErrorMessage component={StyledError} name="email" />
                    </StyledFormGroup>
                    {/* Message field */}
                    <StyledFormGroup>
                        <label htmlFor="message" aria-label="Please write down your message">
                            <StyledText>Message</StyledText>
                            <StyledInput 
                                component="textarea"
                                as={FastField}
                                id="message"
                                error={touched.message && errors.message ? 1 : 0}
                                name="message"
                                textarea="true"
                            />
                        </label>
                        <ErrorMessage component={StyledError} name="message" />
                    </StyledFormGroup>
                    <FastField 
                        component={Recaptcha}
                        sitekey="6LcaH60ZAAAAANhu3j4qj049WzfoRkm4os6ao8r7"
                        name="recaptcha"
                        onChange={value => setFieldValue('recaptcha', value)}
                    />
                    <ErrorMessage component={StyledError} name="recaptcha" />
                    <StyledCenter>
                        <BigButton type="submit" disabled={isSubmitting}>
                            <FormattedIcon name="Send"/>
                            Send
                        </BigButton>
                    </StyledCenter>
                </Form>
            )}
            </Formik>
        </StyledContainer>
    )
}

export default ContactForm;