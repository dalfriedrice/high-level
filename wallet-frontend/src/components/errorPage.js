import React from 'react';
import RenderButtons from './buttons';
import { Pages } from './../constants/constant';

const ErrorPage = () => (
    <>
        {RenderButtons(Pages.Error_Page)}
        <div>
            <h3>This page does not exist</h3>
        </div>
    </>
);

export default ErrorPage;