import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToProjectsCreateManyInputSchema } from '../inputTypeSchemas/PrioritiesToProjectsCreateManyInputSchema'

export const PrioritiesToProjectsCreateManyArgsSchema: z.ZodType<Prisma.PrioritiesToProjectsCreateManyArgs> = z.object({
  data: z.union([ PrioritiesToProjectsCreateManyInputSchema,PrioritiesToProjectsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default PrioritiesToProjectsCreateManyArgsSchema;
