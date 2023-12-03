import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToTasksTagIdTaskIdCompoundUniqueInputSchema } from './PrivateTagsToTasksTagIdTaskIdCompoundUniqueInputSchema';
import { PrivateTagsToTasksWhereInputSchema } from './PrivateTagsToTasksWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { PrivateTagRelationFilterSchema } from './PrivateTagRelationFilterSchema';
import { PrivateTagWhereInputSchema } from './PrivateTagWhereInputSchema';
import { TaskRelationFilterSchema } from './TaskRelationFilterSchema';
import { TaskWhereInputSchema } from './TaskWhereInputSchema';

export const PrivateTagsToTasksWhereUniqueInputSchema: z.ZodType<Prisma.PrivateTagsToTasksWhereUniqueInput> = z.object({
  tagId_taskId: z.lazy(() => PrivateTagsToTasksTagIdTaskIdCompoundUniqueInputSchema)
})
.and(z.object({
  tagId_taskId: z.lazy(() => PrivateTagsToTasksTagIdTaskIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => PrivateTagsToTasksWhereInputSchema),z.lazy(() => PrivateTagsToTasksWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateTagsToTasksWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateTagsToTasksWhereInputSchema),z.lazy(() => PrivateTagsToTasksWhereInputSchema).array() ]).optional(),
  tagId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  taskId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  tag: z.union([ z.lazy(() => PrivateTagRelationFilterSchema),z.lazy(() => PrivateTagWhereInputSchema) ]).optional(),
  task: z.union([ z.lazy(() => TaskRelationFilterSchema),z.lazy(() => TaskWhereInputSchema) ]).optional(),
}).strict());

export default PrivateTagsToTasksWhereUniqueInputSchema;
