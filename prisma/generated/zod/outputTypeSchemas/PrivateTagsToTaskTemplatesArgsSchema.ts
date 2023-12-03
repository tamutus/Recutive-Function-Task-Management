import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagsToTaskTemplatesSelectSchema } from '../inputTypeSchemas/PrivateTagsToTaskTemplatesSelectSchema';
import { PrivateTagsToTaskTemplatesIncludeSchema } from '../inputTypeSchemas/PrivateTagsToTaskTemplatesIncludeSchema';

export const PrivateTagsToTaskTemplatesArgsSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesDefaultArgs> = z.object({
  select: z.lazy(() => PrivateTagsToTaskTemplatesSelectSchema).optional(),
  include: z.lazy(() => PrivateTagsToTaskTemplatesIncludeSchema).optional(),
}).strict();

export default PrivateTagsToTaskTemplatesArgsSchema;
