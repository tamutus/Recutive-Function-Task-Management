import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagsToTasksSelectSchema } from '../inputTypeSchemas/PrivateTagsToTasksSelectSchema';
import { PrivateTagsToTasksIncludeSchema } from '../inputTypeSchemas/PrivateTagsToTasksIncludeSchema';

export const PrivateTagsToTasksArgsSchema: z.ZodType<Prisma.PrivateTagsToTasksDefaultArgs> = z.object({
  select: z.lazy(() => PrivateTagsToTasksSelectSchema).optional(),
  include: z.lazy(() => PrivateTagsToTasksIncludeSchema).optional(),
}).strict();

export default PrivateTagsToTasksArgsSchema;
