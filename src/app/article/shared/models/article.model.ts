export interface IArticle{
    id: number;
    label: string;
    prix: number;
    avis: string;
    date: number;
    images: Array<IImage>;
}

export interface IImage{
    id: number;
    link: string;
    titre: string;
}