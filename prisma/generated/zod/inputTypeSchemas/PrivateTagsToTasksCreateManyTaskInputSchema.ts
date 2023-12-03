import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateTagsToTasksCreateManyTaskInputSchema: z.ZodType<Prisma.PrivateTagsToTasksCreateManyTaskInput> = z.object({
  tagId: z.number().int()
}).strict();

export default PrivateTagsToTasksCreateManyTaskInputSchema;
