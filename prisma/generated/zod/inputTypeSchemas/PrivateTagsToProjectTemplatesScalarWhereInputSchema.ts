import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';

export const PrivateTagsToProjectTemplatesScalarWhereInputSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesScalarWhereInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateTagsToProjectTemplatesScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateTagsToProjectTemplatesScalarWhereInputSchema),z.lazy(() => PrivateTagsToProjectTemplatesScalarWhereInputSchema).array() ]).optional(),
  projectId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  privateTagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default PrivateTagsToProjectTemplatesScalarWhereInputSchema;
