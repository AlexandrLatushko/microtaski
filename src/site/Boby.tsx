// @flow 
import * as React from 'react';
type BodyPropsType = {
    title: string
};

export const Boby = (props: BodyPropsType) => {
    return (
        <div>{props.title}</div>
    );
};