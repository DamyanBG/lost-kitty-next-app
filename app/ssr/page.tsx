import { headers } from 'next/headers'

export default function SSR() {
    const headersList = headers()

    return (
        <main>
            Server side
        </main>
    )
}