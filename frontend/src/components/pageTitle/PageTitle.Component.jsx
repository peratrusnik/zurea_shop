import React from 'react';

function PageTitleComponent({title, children}) {
    return (
        <div className="page-title">
            <h1>{title}</h1>
            {children}
        </div>
    );
}

export default PageTitleComponent;