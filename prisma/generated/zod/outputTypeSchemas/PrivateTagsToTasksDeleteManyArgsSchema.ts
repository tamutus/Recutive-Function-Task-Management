import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagsToTasksWhereInputSchema } from '../inputTypeSchemas/PrivateTagsToTasksWhereInputSchema'

export const PrivateTagsToTasksDeleteManyArgsSchema: z.ZodType<Prisma.PrivateTagsToTasksDeleteManyArgs> = z.object({
  where: PrivateTagsToTasksWhereInputSchema.optional(),
}).strict()

export default PrivateTagsToTasksDeleteManyArgsSchema;
