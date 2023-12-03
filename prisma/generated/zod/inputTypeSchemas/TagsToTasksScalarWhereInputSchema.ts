import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';

export const TagsToTasksScalarWhereInputSchema: z.ZodType<Prisma.TagsToTasksScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TagsToTasksScalarWhereInputSchema),z.lazy(() => TagsToTasksScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TagsToTasksScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TagsToTasksScalarWhereInputSchema),z.lazy(() => TagsToTasksScalarWhereInputSchema).array() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  taskId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default TagsToTasksScalarWhereInputSchema;
