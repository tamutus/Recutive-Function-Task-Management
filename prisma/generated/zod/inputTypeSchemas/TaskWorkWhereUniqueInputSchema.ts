import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskWorkWhereInputSchema } from './TaskWorkWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { TaskRelationFilterSchema } from './TaskRelationFilterSchema';
import { TaskWhereInputSchema } from './TaskWhereInputSchema';
import { EnergiesToTaskWorksListRelationFilterSchema } from './EnergiesToTaskWorksListRelationFilterSchema';
import { PrivateEnergiesToTaskWorksListRelationFilterSchema } from './PrivateEnergiesToTaskWorksListRelationFilterSchema';

export const TaskWorkWhereUniqueInputSchema: z.ZodType<Prisma.TaskWorkWhereUniqueInput> = z.object({
  id: z.number()
})
.and(z.object({
  id: z.number().optional(),
  AND: z.union([ z.lazy(() => TaskWorkWhereInputSchema),z.lazy(() => TaskWorkWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => TaskWorkWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => TaskWorkWhereInputSchema),z.lazy(() => TaskWorkWhereInputSchema).array() ]).optional(),
  taskId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  startedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  endedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema),z.coerce.date() ]).optional().nullable(),
  task: z.union([ z.lazy(() => TaskRelationFilterSchema),z.lazy(() => TaskWhereInputSchema) ]).optional(),
  energyChanges: z.lazy(() => EnergiesToTaskWorksListRelationFilterSchema).optional(),
  privateEnergyChanges: z.lazy(() => PrivateEnergiesToTaskWorksListRelationFilterSchema).optional()
}).strict());

export default TaskWorkWhereUniqueInputSchema;
