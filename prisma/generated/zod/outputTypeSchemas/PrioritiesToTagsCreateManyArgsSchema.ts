import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToTagsCreateManyInputSchema } from '../inputTypeSchemas/PrioritiesToTagsCreateManyInputSchema'

export const PrioritiesToTagsCreateManyArgsSchema: z.ZodType<Prisma.PrioritiesToTagsCreateManyArgs> = z.object({
  data: z.union([ PrioritiesToTagsCreateManyInputSchema,PrioritiesToTagsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default PrioritiesToTagsCreateManyArgsSchema;
