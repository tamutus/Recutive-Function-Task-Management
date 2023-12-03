import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateNestedOneWithoutPrivateTagsInputSchema } from './TaskCreateNestedOneWithoutPrivateTagsInputSchema';

export const PrivateTagsToTasksCreateWithoutTagInputSchema: z.ZodType<Prisma.PrivateTagsToTasksCreateWithoutTagInput> = z.object({
  task: z.lazy(() => TaskCreateNestedOneWithoutPrivateTagsInputSchema)
}).strict();

export default PrivateTagsToTasksCreateWithoutTagInputSchema;
