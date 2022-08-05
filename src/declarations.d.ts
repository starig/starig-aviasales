declare module '*.scss' {
    const content: {
        [className: string]: string;
    }
    export = content
}

interface Mapping {
    [key: string]: string;
}

declare module '*.module.scss' {
    const mapping: Mapping;
    export default mapping;
}

declare module "*.png" {
    const value: any;
    export default value;
}