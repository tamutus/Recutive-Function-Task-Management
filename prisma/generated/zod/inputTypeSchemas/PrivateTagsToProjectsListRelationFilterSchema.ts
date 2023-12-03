import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToProjectsWhereInputSchema } from './PrivateTagsToProjectsWhereInputSchema';

export const PrivateTagsToProjectsListRelationFilterSchema: z.ZodType<Prisma.PrivateTagsToProjectsListRelationFilter> = z.object({
  every: z.lazy(() => PrivateTagsToProjectsWhereInputSchema).optional(),
  some: z.lazy(() => PrivateTagsToProjectsWhereInputSchema).optional(),
  none: z.lazy(() => PrivateTagsToProjectsWhereInputSchema).optional()
}).strict();

export default PrivateTagsToProjectsListRelationFilterSchema;
