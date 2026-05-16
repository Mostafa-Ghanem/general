import { defineCollection, z } from 'astro:content';

const productCategories = ['mechanical', 'hydraulic', 'sealing', 'fixings', 'structural'] as const;

const products = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      lang: z.enum(['en', 'ar']),
      name: z.string(),
      shortDesc: z.string(),
      category: z.enum(productCategories),
      heroImage: image().optional(),
      gallery: z.array(image()).optional(),
      sizes: z.array(z.string()).default([]),
      materials: z.array(z.string()).default([]),
      standards: z.array(z.string()).default([]),
      applications: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      order: z.number().default(99),
      seo: z
        .object({
          title: z.string().optional(),
          description: z.string().optional(),
        })
        .optional(),
    }),
});

const projectSectors = ['cement', 'petro', 'food', 'water', 'power', 'pharma'] as const;

const projects = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      lang: z.enum(['en', 'ar']),
      title: z.string(),
      summary: z.string(),
      sector: z.enum(projectSectors),
      year: z.string(),
      client: z.string().optional(),
      location: z.string().optional(),
      coverImage: image().optional(),
      productsUsed: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      order: z.number().default(99),
    }),
});

export const collections = {
  products,
  projects,
};
