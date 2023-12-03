import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';

export const PrivateTagsToProjectsScalarWhereInputSchema: z.ZodType<Prisma.PrivateTagsToProjectsScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PrivateTagsToProjectsScalarWhereInputSchema),z.lazy(() => PrivateTagsToProjectsScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateTagsToProjectsScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateTagsToProjectsScalarWhereInputSchema),z.lazy(() => PrivateTagsToProjectsScalarWhereInputSchema).array() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  projectId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default PrivateTagsToProjectsScalarWhereInputSchema;
