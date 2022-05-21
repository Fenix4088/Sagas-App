import React, {ComponentType} from 'react';
import {useDispatch} from "react-redux";
import {setPathname} from "../../redux/reducers/pathname";

export function withPathname<T>(WrappedComponent: ComponentType<T>): (props: any) => JSX.Element {
    return (props: any) => {
        const dispatch = useDispatch();
        React.useEffect(() => {
            dispatch(setPathname(window.location.pathname))
        }, [dispatch])

        return <WrappedComponent {...props}/>

    }
}