import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreateNestedOneWithoutTagsInputSchema } from './TaskCreateNestedOneWithoutTagsInputSchema';

export const TagsToTasksCreateWithoutTagInputSchema: z.ZodType<Prisma.TagsToTasksCreateWithoutTagInput> = z.object({
  task: z.lazy(() => TaskCreateNestedOneWithoutTagsInputSchema)
}).strict();

export default TagsToTasksCreateWithoutTagInputSchema;
