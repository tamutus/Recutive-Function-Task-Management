import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToTasksPriorityIdTaskIdCompoundUniqueInputSchema } from './PrioritiesToTasksPriorityIdTaskIdCompoundUniqueInputSchema';
import { PrioritiesToTasksWhereInputSchema } from './PrioritiesToTasksWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { PriorityRelationFilterSchema } from './PriorityRelationFilterSchema';
import { PriorityWhereInputSchema } from './PriorityWhereInputSchema';
import { TaskRelationFilterSchema } from './TaskRelationFilterSchema';
import { TaskWhereInputSchema } from './TaskWhereInputSchema';

export const PrioritiesToTasksWhereUniqueInputSchema: z.ZodType<Prisma.PrioritiesToTasksWhereUniqueInput> = z.object({
  priorityId_taskId: z.lazy(() => PrioritiesToTasksPriorityIdTaskIdCompoundUniqueInputSchema)
})
.and(z.object({
  priorityId_taskId: z.lazy(() => PrioritiesToTasksPriorityIdTaskIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => PrioritiesToTasksWhereInputSchema),z.lazy(() => PrioritiesToTasksWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrioritiesToTasksWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrioritiesToTasksWhereInputSchema),z.lazy(() => PrioritiesToTasksWhereInputSchema).array() ]).optional(),
  priorityId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  taskId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  priority: z.union([ z.lazy(() => PriorityRelationFilterSchema),z.lazy(() => PriorityWhereInputSchema) ]).optional(),
  task: z.union([ z.lazy(() => TaskRelationFilterSchema),z.lazy(() => TaskWhereInputSchema) ]).optional(),
}).strict());

export default PrioritiesToTasksWhereUniqueInputSchema;
