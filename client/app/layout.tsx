"use client";
import {Provider} from "react-redux";
import {store} from "../redux";
import {Navbar} from "../components/Navbar/Navbar";
import "../styles/globals.scss";
import {useSelectedLayoutSegment, useSelectedLayoutSegments} from "next/navigation";
import {PageBody} from "../components/PageBody/PageBody";

export default function RootLayout({children}: { children: React.ReactNode }) {
    const segments = useSelectedLayoutSegments();

    return (
        <html lang="en">
        <head>
            <title>Name of the code</title>
            <meta name="description" content="Idk"/>
            <link rel="icon" href="/favicon.ico"/>
        </head>
        <body>
        <Provider store={store}>
            <Navbar isOnHome={segments.length === 0} />
            <PageBody>
                {children}
            </PageBody>
        </Provider>
        </body>
        </html>
    )
}