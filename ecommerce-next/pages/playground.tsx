import { useEffect } from "react";
import Play from '../playground'

export default function Playground() {
    useEffect(() => {
        Play();
    }, [])

    return (
        <div>Playground Pages</div>
    )
}