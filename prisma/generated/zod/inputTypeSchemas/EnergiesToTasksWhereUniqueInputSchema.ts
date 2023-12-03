import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTasksEnergyIdTaskIdCompoundUniqueInputSchema } from './EnergiesToTasksEnergyIdTaskIdCompoundUniqueInputSchema';
import { EnergiesToTasksWhereInputSchema } from './EnergiesToTasksWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnergyRelationFilterSchema } from './EnergyRelationFilterSchema';
import { EnergyWhereInputSchema } from './EnergyWhereInputSchema';
import { TaskRelationFilterSchema } from './TaskRelationFilterSchema';
import { TaskWhereInputSchema } from './TaskWhereInputSchema';

export const EnergiesToTasksWhereUniqueInputSchema: z.ZodType<Prisma.EnergiesToTasksWhereUniqueInput> = z.object({
  energyId_taskId: z.lazy(() => EnergiesToTasksEnergyIdTaskIdCompoundUniqueInputSchema)
})
.and(z.object({
  energyId_taskId: z.lazy(() => EnergiesToTasksEnergyIdTaskIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => EnergiesToTasksWhereInputSchema),z.lazy(() => EnergiesToTasksWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EnergiesToTasksWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EnergiesToTasksWhereInputSchema),z.lazy(() => EnergiesToTasksWhereInputSchema).array() ]).optional(),
  energyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  taskId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  energy: z.union([ z.lazy(() => EnergyRelationFilterSchema),z.lazy(() => EnergyWhereInputSchema) ]).optional(),
  task: z.union([ z.lazy(() => TaskRelationFilterSchema),z.lazy(() => TaskWhereInputSchema) ]).optional(),
}).strict());

export default EnergiesToTasksWhereUniqueInputSchema;
