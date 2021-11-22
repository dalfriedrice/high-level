import React from 'react';
import { useState } from "react";
import RenderButtons from './buttons';
import { Pages, HerokuApiEndpoint } from './../constants/constant';
import renderToastr from './renderToastr';

const CreateTransaction = (props) => {
    const { match } = props
    const [inputs, setInputs] = useState({});

    let enable = inputs?.balance?.length && inputs?.desc?.length;

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
                desc: inputs.desc,
                amount: inputs.balance
            })
        };
        setInputs({});
        fetch(`${HerokuApiEndpoint}transaction/${match.params.walletId}`, requestOptions).then(res => res.json())
            .then(data => {
                if (data?.reponse) {
                    renderToastr('success', 'Transaction Done Successfully');
                } else {
                    renderToastr('info', data?.error);
                }
            }).catch(err => {
                renderToastr('error', `Something Went Wrong - ${err}`);
            });;
    }

    return (
        <>
            {RenderButtons(Pages.Create_Transaction, match.params.walletId)}
            <form className="create-form" onSubmit={handleSubmit}>
                <p className="form-row">
                    <label className="form-label">Enter Transaction Description</label>
                    <input
                        className="form-input"
                        type="text"
                        name="desc"
                        placeholder="Description..."
                        value={inputs.desc || ""}
                        onChange={handleChange}
                    />
                </p>
                <p className="form-row">
                    <label className="form-label">Enter Transaction Balance</label>
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

export default CreateTransaction;
