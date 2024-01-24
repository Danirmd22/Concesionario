export interface ModelResponse {
    models: Model[];
}

export interface Model {
    id: number;
    model: string;
    brand: string;
    price: number;
    image: string;
}
