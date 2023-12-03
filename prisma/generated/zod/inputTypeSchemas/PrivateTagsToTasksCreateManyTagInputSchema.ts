import type { Prisma } from '@prisma/client';
import { z } from 'zod';

export const PrivateTagsToTasksCreateManyTagInputSchema: z.ZodType<Prisma.PrivateTagsToTasksCreateManyTagInput> = z.object({
  taskId: z.number().int()
}).strict();

export default PrivateTagsToTasksCreateManyTagInputSchema;
