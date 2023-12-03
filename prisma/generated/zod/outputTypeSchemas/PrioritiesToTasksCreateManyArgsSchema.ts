import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrioritiesToTasksCreateManyInputSchema } from '../inputTypeSchemas/PrioritiesToTasksCreateManyInputSchema'

export const PrioritiesToTasksCreateManyArgsSchema: z.ZodType<Prisma.PrioritiesToTasksCreateManyArgs> = z.object({
  data: z.union([ PrioritiesToTasksCreateManyInputSchema,PrioritiesToTasksCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default PrioritiesToTasksCreateManyArgsSchema;
