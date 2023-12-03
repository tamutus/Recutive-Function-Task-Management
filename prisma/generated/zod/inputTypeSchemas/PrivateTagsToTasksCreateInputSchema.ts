import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagCreateNestedOneWithoutTasksInputSchema } from './PrivateTagCreateNestedOneWithoutTasksInputSchema';
import { TaskCreateNestedOneWithoutPrivateTagsInputSchema } from './TaskCreateNestedOneWithoutPrivateTagsInputSchema';

export const PrivateTagsToTasksCreateInputSchema: z.ZodType<Prisma.PrivateTagsToTasksCreateInput> = z.object({
  tag: z.lazy(() => PrivateTagCreateNestedOneWithoutTasksInputSchema),
  task: z.lazy(() => TaskCreateNestedOneWithoutPrivateTagsInputSchema)
}).strict();

export default PrivateTagsToTasksCreateInputSchema;
