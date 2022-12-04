import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <nav>
                <h2>Home</h2>
            </nav>
            {children}
        </div>
    );
}

export default Layout;