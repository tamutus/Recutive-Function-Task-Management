import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';

export const PrivateTagsToTaskTemplatesScalarWhereInputSchema: z.ZodType<Prisma.PrivateTagsToTaskTemplatesScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesScalarWhereInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateTagsToTaskTemplatesScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateTagsToTaskTemplatesScalarWhereInputSchema),z.lazy(() => PrivateTagsToTaskTemplatesScalarWhereInputSchema).array() ]).optional(),
  taskId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default PrivateTagsToTaskTemplatesScalarWhereInputSchema;
