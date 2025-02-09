// @flow 
import * as React from 'react';
type HeaderPropsType = {
    title: string
};
export const Header = (props: HeaderPropsType) => {
    return (
        <div>{props.title}</div>
    );
};