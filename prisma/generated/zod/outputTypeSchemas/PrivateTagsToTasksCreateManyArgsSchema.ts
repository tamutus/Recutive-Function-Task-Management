import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagsToTasksCreateManyInputSchema } from '../inputTypeSchemas/PrivateTagsToTasksCreateManyInputSchema'

export const PrivateTagsToTasksCreateManyArgsSchema: z.ZodType<Prisma.PrivateTagsToTasksCreateManyArgs> = z.object({
  data: z.union([ PrivateTagsToTasksCreateManyInputSchema,PrivateTagsToTasksCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict()

export default PrivateTagsToTasksCreateManyArgsSchema;
