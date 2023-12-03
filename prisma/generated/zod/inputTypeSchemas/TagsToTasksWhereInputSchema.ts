import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { TagRelationFilterSchema } from './TagRelationFilterSchema';
import { TagWhereInputSchema } from './TagWhereInputSchema';
import { TaskRelationFilterSchema } from './TaskRelationFilterSchema';
import { TaskWhereInputSchema } from './TaskWhereInputSchema';

export const TagsToTasksWhereInputSchema: z.ZodType<Prisma.TagsToTasksWhereInput> = z.object({
  AND: z.union([ z.lazy(() => TagsToTasksWhereInputSchema),z.lazy(() => TagsToTasksWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TagsToTasksWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TagsToTasksWhereInputSchema),z.lazy(() => TagsToTasksWhereInputSchema).array() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  taskId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tag: z.union([ z.lazy(() => TagRelationFilterSchema),z.lazy(() => TagWhereInputSchema) ]).optional(),
  task: z.union([ z.lazy(() => TaskRelationFilterSchema),z.lazy(() => TaskWhereInputSchema) ]).optional(),
}).strict();

export default TagsToTasksWhereInputSchema;