import React, { ReactNode } from 'react';

type props = {
    children: ReactNode
}


const MainLayout = (props: props) => {

    return (
        <div>
            <div>Header</div>
            {props.children}
            <div>Footer</div>
        </div>
    )

}

export default MainLayout;