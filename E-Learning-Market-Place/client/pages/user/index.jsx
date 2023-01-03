import { useEffect, useState, useContext } from "react";
import { Context } from "../../context";
import axios from "axios";
import UserRoute from "../../components/routes/UserRoute";

const UserIndex = () => {
    // state
    const { state: { user } } = useContext(Context);

    return (
        <UserRoute>
            <h1 className="jumbotron text-center square">
                <pre>{JSON.stringify(user, null, 4)}</pre>
            </h1>
        </UserRoute>
    );
};

export default UserIndex;
