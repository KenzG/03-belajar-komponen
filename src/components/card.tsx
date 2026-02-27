import React from 'react';

export default function Card({ children }: { children: React.ReactNode}) {
    return (
        <div className="border border-zinc-300 p-4 rounded-xl shadow0mx w-fit mb-4">
            {children}
        </div>
    )
}