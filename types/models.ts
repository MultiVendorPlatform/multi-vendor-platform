export type statusEnum = "draft" | "publish" | "archive"
export type inventoryEnum = "instock" | "outstock"

export type TypeProductModel = {
    featured: boolean,
    name: string,
    slug: string,
    description: string,
    additionnal: string,
    specification: string,
    category: string,
    subcategories: TypeSubCategoryModel[],
    collections: TypeCollectionModel[],
    tags: TypeTagModel[],
    brand: TypeBrandModel[],
    reviews: TypeReviewModel[],
    store: TypeStoreModel[],
    productVariants: TypeProductVariantModel[],
    images: string[],
    price: number,
    discount: number,
    status: statusEnum,
    seoTitle?:string,
    seoDescription?:string,
    seoSlug?:string,
    weight: number,
    unit: string,
    inventory: inventoryEnum,
    sku: string,
    user_id: string,
    views?: number,
    createdAt?: Date,
    updatedAt?: Date,
};

export type TypeProductVariantModel = {

};

export type TypeStoreModel = {

};

export type TypeSubCategoryModel = {

};

export type TypeCollectionModel = {

};

export type TypeTagModel = {

};

export type TypeBrandModel = {

};

export type TypeReviewModel = {

};

export type TypeCategoryModel = {
    name: string,
    description?: string,
    slug: string,
    image: string,
    status?: statusEnum,
    user_id: string,
    subCategories: TypeSubCategoryModel[],
};

export type TypeTokenModel = {
    template : string,
    token: string,
    status?: statusEnum,
    user_id: string,
};