// @ts-check
import { defineConfig } from 'astro/config';
import { generateIconNames } from "vite-plugin-svg-sprite-names-typescript";

// https://astro.build/config
export default defineConfig({
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    api: "modern-compiler"
                }
            }
        },
        plugins: [
            generateIconNames({
                svgFilePath: "./public/sprite.svg",
                typesFilePath: "./src/types/icon-names.ts",
                typeName: "IconName",
            }),
        ]
    }
});
