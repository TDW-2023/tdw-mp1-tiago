import Link from "next/link";
import React from 'react';

export default function Testepage() {
    return(
        <div>
            <p>Página de teste</p>
            <Link href='/'><p>Go back</p></Link>
        </div>
    )
}