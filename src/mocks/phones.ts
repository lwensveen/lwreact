export interface Phone {
    id: number;
    title: string;
    subtitle: string | null;
    brand: string;
    os: string;
    images: ImageSides;
    colors: Colors[];
    bulletpoints: Bulletpoints[];
    content: string;
}

export interface ImageSides {
    front: string;
    side: string;
    back: string;
}

export interface Bulletpoints {
    point: string;
}

export interface Colors {
    color: string;
}

export const PHONES: Phone[] = [
    {
        id: 1,
        title: "Samsung Galaxy S10",
        subtitle: "128GB",
        brand: "Samsung",
        os: "Android",
        images: {
            front: "/webshop/dvi-front_Samsung_S10_Blue_305x450.png",
            side: '',
            back: '',
        },
        colors: [
            {
                color: "red",
            },
            {
                color: "blue",
            },
        ],
        bulletpoints: [
            {
                point: "Functional Programming",
            },
            {
                point: "Prototypal Inheritance",
            },
            {
                point: "Object composition > Classical inheritance",
            },
        ],
        content: "Ik heb een ruime ervaring met Angular. ",
    },
    {
        id: 2,
        title: "Apple iPhone XS",
        subtitle: "64GB",
        brand: "Apple",
        os: "iOS",
        images: {
            front: "/webshop/dvi-front_Samsung_S10_Blue_305x450.png",
            side: '',
            back: '',
        }, colors: [
            {
                color: "red",
            },
            {
                color: "blue",
            },
        ],
        bulletpoints: [
            {
                point: "Functional Programming",
            },
            {
                point: "Prototypal Inheritance",
            },
            {
                point: "Object composition > Classical inheritance",
            },
        ],
        content: "Ik heb een ruime ervaring met Angular. ",
    },
    {
        id: 3,
        title: "Samsung Galaxy S10",
        subtitle: "128GB",
        brand: "Samsung",
        os: "Android",
        images: {
            front: "/webshop/dvi-front_Samsung_S10_Blue_305x450.png",
            side: '',
            back: '',
        }, colors: [
            {
                color: "red",
            },
            {
                color: "blue",
            },
        ],
        bulletpoints: [
            {
                point: "Functional Programming",
            },
            {
                point: "Prototypal Inheritance",
            },
            {
                point: "Object composition > Classical inheritance",
            },
        ],
        content: "Ik heb een ruime ervaring met Angular. ",
    },
];
