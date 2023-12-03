import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';

export const TagsToTaskTemplatesScalarWhereInputSchema: z.ZodType<Prisma.TagsToTaskTemplatesScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TagsToTaskTemplatesScalarWhereInputSchema),z.lazy(() => TagsToTaskTemplatesScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TagsToTaskTemplatesScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TagsToTaskTemplatesScalarWhereInputSchema),z.lazy(() => TagsToTaskTemplatesScalarWhereInputSchema).array() ]).optional(),
  taskId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  taggerId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default TagsToTaskTemplatesScalarWhereInputSchema;
