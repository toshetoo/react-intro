import React from 'react';

const styles = {
    backgroundColor: 'lightgray',
    height: '20px',
    width: '100%',
    position: 'fixed',
    bottom: 0
};

export function Footer() {
    return (
        <div className="footer" style={styles}>
            Footer works
        </div>
    );
}