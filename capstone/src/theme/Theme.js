import { extendTheme, theme as base, withDefaultColorScheme, withDefaultVariant } from "@chakra-ui/react"

const theme = extendTheme({

    colors:{
        grey:{
            100: "#f9fbfc",
            200: "#f3f6f9",
            300: "#e3e9ed",
            400: "#ced7e0",
            500: "#b9c6d3",
            600: "#94a1b0",
            700: "#6b7789",
            800: "#4e5969",
            900: "#2f3847"
        },
        red:{
            100: "#fae7ea",
            500: "#cf102d"
        },
        green:{
            100: "#ccf3ec",
            300: "#18e09a",
            500: "#00c39c",
            700: "#0e7e68"
        },
        lightblue:{
            100: "#d9eeff",
            500: "#45bce5"
        },
        blue:{
            500: "#0033a0"
        }

    },

    fonts: {
        heading: `Montserrat, ${base.fonts?.heading}`,
        body: `Inter, ${base.fonts?.body}`
    },
    components:{
        Input:{
            variants:{
                outline:{
                    field:{
                        bg: "#fff"
                    }
                }
            }
        }
    }
},
withDefaultColorScheme({
    colorScheme: "blue",
    components: ["Button"]
}),
withDefaultVariant({
    variant: "outline",
    components: ["Input", "NumberInput"]
})
);

export default theme;