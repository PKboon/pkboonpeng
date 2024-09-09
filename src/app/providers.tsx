"use client";

import { MantineProvider } from "@mantine/core";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <MantineProvider
            defaultColorScheme="light"
            withGlobalClasses
            withCssVariables
        >
            <main>{children}</main>
        </MantineProvider>
    );
}
