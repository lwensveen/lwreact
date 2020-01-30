export interface Phone {
    brand: string;
    bulletpoints: Bulletpoints[];
    colors: Colors[];
    content: string;
    id: number;
    images: ImageSides;
    model: string;
    os: string;
}

export interface ImageSides {
    back: string;
    front: string;
    side: string;
}

export interface Bulletpoints {
    point: string;
}

export interface Colors {
    color: string;
}
