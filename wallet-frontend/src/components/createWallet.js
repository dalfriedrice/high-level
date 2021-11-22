import React from 'react';
import { useState } from "react";
import RenderButtons from './buttons';
import { Pages, HerokuApiEndpoint } from './../constants/constant';
import renderToastr from './renderToastr';

const CreateWallet = () => {

    const [inputs, setInputs] = useState({});

    let enable = inputs?.name?.length && inputs?.balance?.length;

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => {
            return { ...values, [name]: value }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                wallet_name: inputs.name,
                balance: inputs.balance
            })
        };
        setInputs({});
        fetch(`${HerokuApiEndpoint}wallet/setup`, requestOptions).then(res => res.json())
            .then(data => {
                if (data?.reponse) {
                    renderToastr('success', 'Wallet Created Successfully')
                } else {
                    renderToastr('info', data?.error);
                }
            }).catch(err => {
                renderToastr('error', `Something Went Wrong - ${err}`)
            });
    }

    return (
        <>
            {RenderButtons(Pages.Create_Wallet)}
            <form className="create-form" onSubmit={handleSubmit}>
                <p className="form-row">
                    <label className="form-label">Enter Wallet Name</label>
                    <input
                        className="form-input"
                        type="text"
                        name="name"
                        placeholder="Name..."
                        value={inputs.name || ""}
                        onChange={handleChange}
                    />
                </p>
                <p className="form-row">
                    <label className="form-label">Enter Opening Balance</label>
                    <input
                        className="form-input"
                        type="text"
                        name="balance"
                        placeholder="Balance..."
                        value={inputs.balance || ""}
                        onChange={handleChange}
                    />
                </p>
                <p className="form-row">
                    <input className="submit-form" disabled={!enable} type="submit" />
                </p>
            </form>
        </>
    )
}

export default CreateWallet;
