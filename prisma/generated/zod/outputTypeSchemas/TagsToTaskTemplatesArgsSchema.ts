import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TagsToTaskTemplatesSelectSchema } from '../inputTypeSchemas/TagsToTaskTemplatesSelectSchema';
import { TagsToTaskTemplatesIncludeSchema } from '../inputTypeSchemas/TagsToTaskTemplatesIncludeSchema';

export const TagsToTaskTemplatesArgsSchema: z.ZodType<Prisma.TagsToTaskTemplatesDefaultArgs> = z.object({
  select: z.lazy(() => TagsToTaskTemplatesSelectSchema).optional(),
  include: z.lazy(() => TagsToTaskTemplatesIncludeSchema).optional(),
}).strict();

export default TagsToTaskTemplatesArgsSchema;
