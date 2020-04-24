import React from 'react';

export function Main({ count }) {
    return (
        <div className="main-content">
            <span>Main content is working.</span>
            <span>{count}</span>
        </div>
    );
}

// export const MainComponent = () => {
//     return (
//         <div className="main-content">
//         <span>Main content is working.</span>
//     </div>
//     );
// }