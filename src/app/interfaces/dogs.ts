export interface IDogSpecs {
    bred_for: string
    breed_group
    : string
    life_span: string
    name: string
    origin: string
    reference_image_id: string
    temperament: string
    weight: IDogWeight
    height: IDogHeight
    id: number
}

export interface IDogHeight {
    imperial: string
    metric: string
}
export interface IDogWeight {
    imperial: string
    metric: string
}

export interface IDogPhoto {
    height: number
    id:string
    url:string
    width:number
}