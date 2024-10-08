import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from 'emailjs-com';
import { useTranslation } from "react-i18next";

const SERVICE_ID = "service_8xtoibv";
const TEMPLATE_ID = "template_nr8bjos";
const PUBLIC_KEY = "0NBY_S8rc31Q8FKZ3";



const ContactForm = () => {
	const handleOnSubmit = (e) => {
     e.preventDefault();
     emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
       .then((result) => {
         alert('Message Sent Successfully')
       }, (error) => {
         console.log(error.text);
         alert('Something went wrong!')
       });
     e.target.reset()
   };
   const { t } = useTranslation();
 
    return (
		<Container fluid z-index="51">
		<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
		<Col lg={5} sm={8}>
            <form class="formContainer" onSubmit={handleOnSubmit}>
                <h3 style={{ textAlign:"center" }}>{t("form_title")}</h3>
                <div class="formElement">
                    <label for="from_name">{t("form_name")}</label>
                    <input type="text" id="from_name" name="from_name" placeholder={t("ph_name")} required />
                </div>

                <div class="formElement">
                    <label>{t("form_mail")}</label>
                    <input type="email" id="from_email" name="from_email" placeholder={t("ph_mail")} required />
                </div>

                <div class="formElement">
                    <label for="message">Mensaje</label>
                    <textarea name="message" rows="8" cols="30" placeholder={t("ph_message")} required />
                </div>
                <button type='submit' className='formButton'>{t("form_submit")}</button>
            </form>
		</Col>
		</Row>
		</Container>
    )
}

export default ContactForm;