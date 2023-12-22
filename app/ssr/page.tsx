import { headers } from 'next/headers'

export default function SSR() {
    const headersList = headers()
    console.log(headersList)

    return (
        <main>
            Server side
        </main>
    )
}