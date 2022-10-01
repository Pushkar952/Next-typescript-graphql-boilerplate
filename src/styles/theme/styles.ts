import { ThemeOverride } from '@chakra-ui/react';

type GlobalStyles = Pick<ThemeOverride, 'styles'>;

export default {
    styles: {
        global: props => ({
            '*, *::after, *::before': {
                boxSizing: 'border-box',
            },
            body: {
                height: '100%',
                margin: 0,
                padding: 0,
                fontSize: 'md',
                fontFamily:
                    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
                color: props.colorMode === 'dark' ? 'white' : '#C83838',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'antialiased',
            },
            h1: {
                fontWeight: 500,
                marginBottom: '0.5em',
            },
            p: {
                marginBottom: '1em',
            },
            a: {
                color: props.colorMode === 'dark' ? 'gray.300' : '#C83838',
            },
            code: {
                fontFamily: 'source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace',
            },
        }),
    },
} as GlobalStyles;
