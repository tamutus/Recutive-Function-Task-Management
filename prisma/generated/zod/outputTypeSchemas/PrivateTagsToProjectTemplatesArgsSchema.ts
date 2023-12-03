import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagsToProjectTemplatesSelectSchema } from '../inputTypeSchemas/PrivateTagsToProjectTemplatesSelectSchema';
import { PrivateTagsToProjectTemplatesIncludeSchema } from '../inputTypeSchemas/PrivateTagsToProjectTemplatesIncludeSchema';

export const PrivateTagsToProjectTemplatesArgsSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesDefaultArgs> = z.object({
  select: z.lazy(() => PrivateTagsToProjectTemplatesSelectSchema).optional(),
  include: z.lazy(() => PrivateTagsToProjectTemplatesIncludeSchema).optional(),
}).strict();

export default PrivateTagsToProjectTemplatesArgsSchema;
