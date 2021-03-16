import React from "react";
import "./index.css";

const ContactPage = () => {
    return (
        <div className="root">
            <div className="wrapper">
                <h2 className="title">get in touch</h2>
                <p className="information">Trysail transom furi Sea Legs scallywag Jack Ketch chandler mizzenmast reef
                    sails
                    skysail. Shiver me timers loot bucko belaying pin Sea Legs boom gunwalls booty jury mast fore.</p>
                <form className="form">
                    <h3 className="form-title">Contact Form</h3>
                    <div className="name-email-container">
                        <div className="name-container">
                            <label className="label">Name <span className="required">*</span></label>
                            <input className="text-input display-block" type="text"/>
                        </div>
                        <div className="email-container">
                            <label className="label">Email Address <span className="required">*</span></label>
                            <input className="text-input display-block" type="email"/>
                        </div>
                    </div>
                    <div className="message-container">
                        <label className="label">Message <span className="required">*</span></label>
                        <textarea rows={4} className="message-text-area display-block"/>
                    </div>
                    <div className="button-container">
                        <button className="send-button">Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
};


export default ContactPage
