import React from "react";
import loading from './loading.gif';

export default (props) => (
    <div>
        <img
            alt='loader'
            height='32px'
            width='32px'
            src={ loading }
        />
    </div>
)