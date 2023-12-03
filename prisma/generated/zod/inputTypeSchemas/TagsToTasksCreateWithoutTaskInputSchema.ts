import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagCreateNestedOneWithoutTasksInputSchema } from './TagCreateNestedOneWithoutTasksInputSchema';

export const TagsToTasksCreateWithoutTaskInputSchema: z.ZodType<Prisma.TagsToTasksCreateWithoutTaskInput> = z.object({
  tag: z.lazy(() => TagCreateNestedOneWithoutTasksInputSchema)
}).strict();

export default TagsToTasksCreateWithoutTaskInputSchema;
