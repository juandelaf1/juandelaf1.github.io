import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectSchema = z.object({
  title: z.string(),
  description: z.string().max(150),
  featured: z.boolean().default(false),
  order: z.number().optional(),
  category: z.enum(['Climate', 'Logistics', 'AI/ML', 'Analytics']),
  date: z.date(),
  status: z.enum(['production', 'development', 'archived']).default('development'),
  metrics: z.array(
    z.object({
      value: z.string(),
      label: z.string(),
    })
  ),
  tech: z.array(
    z.object({
      name: z.string(),
      icon: z.string().optional(),
    })
  ),
  links: z.object({
    github: z.string().url().optional(),
    demo: z.string().url().optional(),
    docs: z.string().url().optional(),
  }),
  image: z.string().optional(),
});

const engineeringSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.date(),
  tags: z.array(z.string()),
});

const experimentSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.date(),
  tech: z.array(z.string()),
  status: z.enum(['exploratory', 'completed', 'archived']).default('exploratory'),
});

const buildingSchema = z.object({
  title: z.string(),
  description: z.string(),
  status: z.enum(['planning', 'building', 'testing', 'live']),
  milestones: z.array(
    z.object({
      title: z.string(),
      completed: z.boolean(),
    })
  ),
  nextMilestone: z.string(),
  started: z.date(),
  estimatedCompletion: z.date().optional(),
  repo: z.string().url().optional(),
});

export const collections = {
  projects: defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
    schema: projectSchema,
  }),
  engineering: defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/engineering' }),
    schema: engineeringSchema,
  }),
  experiments: defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/experiments' }),
    schema: experimentSchema,
  }),
  building: defineCollection({
    loader: glob({ pattern: '**/*.mdx', base: './src/content/building' }),
    schema: buildingSchema,
  }),
};
