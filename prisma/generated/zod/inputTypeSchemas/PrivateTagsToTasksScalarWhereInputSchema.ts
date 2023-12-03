import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';

export const PrivateTagsToTasksScalarWhereInputSchema: z.ZodType<Prisma.PrivateTagsToTasksScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PrivateTagsToTasksScalarWhereInputSchema),z.lazy(() => PrivateTagsToTasksScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateTagsToTasksScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateTagsToTasksScalarWhereInputSchema),z.lazy(() => PrivateTagsToTasksScalarWhereInputSchema).array() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  taskId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
}).strict();

export default PrivateTagsToTasksScalarWhereInputSchema;
