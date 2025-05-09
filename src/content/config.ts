import { defineCollection, z } from "astro:content";


const productsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
    }),
});

const ValuesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string(),
    }),
});

export const collections = {
    products: productsCollection,
    values: ValuesCollection
}