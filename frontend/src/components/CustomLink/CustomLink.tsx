import React, { ReactNode } from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

type MyComponentProps = {
    children?: ReactNode | undefined;
    [key: string]: any;
};

export default function CustomLink({ to, children, ...props }: MyComponentProps) {

    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <>
            <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
            </li>
        </>
    )
}