import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateTagsToTasksCreateManyInputSchema: z.ZodType<Prisma.PrivateTagsToTasksCreateManyInput> = z.object({
  tagId: z.number().int(),
  taskId: z.number().int()
}).strict();

export default PrivateTagsToTasksCreateManyInputSchema;
