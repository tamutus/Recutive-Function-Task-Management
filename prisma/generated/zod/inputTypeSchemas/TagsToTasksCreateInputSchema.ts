import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagCreateNestedOneWithoutTasksInputSchema } from './TagCreateNestedOneWithoutTasksInputSchema';
import { TaskCreateNestedOneWithoutTagsInputSchema } from './TaskCreateNestedOneWithoutTagsInputSchema';

export const TagsToTasksCreateInputSchema: z.ZodType<Prisma.TagsToTasksCreateInput> = z.object({
  tag: z.lazy(() => TagCreateNestedOneWithoutTasksInputSchema),
  task: z.lazy(() => TaskCreateNestedOneWithoutTagsInputSchema)
}).strict();

export default TagsToTasksCreateInputSchema;
