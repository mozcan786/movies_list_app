import React from 'react';
export default function Error({error}) {
    return <div className="min-h-screen p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 " role="alert">
        <span className="font-medium">Danger alert!</span> {error}
    </div>
}