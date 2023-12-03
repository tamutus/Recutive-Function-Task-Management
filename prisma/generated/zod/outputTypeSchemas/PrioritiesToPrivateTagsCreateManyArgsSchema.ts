import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToPrivateTagsCreateManyInputSchema } from '../inputTypeSchemas/PrioritiesToPrivateTagsCreateManyInputSchema'

export const PrioritiesToPrivateTagsCreateManyArgsSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsCreateManyArgs> = z.object({
  data: z.union([ PrioritiesToPrivateTagsCreateManyInputSchema,PrioritiesToPrivateTagsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default PrioritiesToPrivateTagsCreateManyArgsSchema;
