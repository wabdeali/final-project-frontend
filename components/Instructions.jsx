import React from "react";

function Instructions({ children }) {
    return (
        <div className="instructions-container">
            <main>
                {children}
            </main>
        </div>
    );
}

export default Instructions;
