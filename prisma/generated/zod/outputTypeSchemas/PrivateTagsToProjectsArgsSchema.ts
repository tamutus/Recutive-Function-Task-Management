import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PrivateTagsToProjectsSelectSchema } from '../inputTypeSchemas/PrivateTagsToProjectsSelectSchema';
import { PrivateTagsToProjectsIncludeSchema } from '../inputTypeSchemas/PrivateTagsToProjectsIncludeSchema';

export const PrivateTagsToProjectsArgsSchema: z.ZodType<Prisma.PrivateTagsToProjectsDefaultArgs> = z.object({
  select: z.lazy(() => PrivateTagsToProjectsSelectSchema).optional(),
  include: z.lazy(() => PrivateTagsToProjectsIncludeSchema).optional(),
}).strict();

export default PrivateTagsToProjectsArgsSchema;
