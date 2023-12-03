import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagsToTasksSelectSchema } from '../inputTypeSchemas/TagsToTasksSelectSchema';
import { TagsToTasksIncludeSchema } from '../inputTypeSchemas/TagsToTasksIncludeSchema';

export const TagsToTasksArgsSchema: z.ZodType<Prisma.TagsToTasksDefaultArgs> = z.object({
  select: z.lazy(() => TagsToTasksSelectSchema).optional(),
  include: z.lazy(() => TagsToTasksIncludeSchema).optional(),
}).strict();

export default TagsToTasksArgsSchema;
