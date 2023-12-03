import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToTasksEnergyIdTaskIdCompoundUniqueInputSchema } from './PrivateEnergiesToTasksEnergyIdTaskIdCompoundUniqueInputSchema';
import { PrivateEnergiesToTasksWhereInputSchema } from './PrivateEnergiesToTasksWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { PrivateEnergyRelationFilterSchema } from './PrivateEnergyRelationFilterSchema';
import { PrivateEnergyWhereInputSchema } from './PrivateEnergyWhereInputSchema';
import { TaskRelationFilterSchema } from './TaskRelationFilterSchema';
import { TaskWhereInputSchema } from './TaskWhereInputSchema';

export const PrivateEnergiesToTasksWhereUniqueInputSchema: z.ZodType<Prisma.PrivateEnergiesToTasksWhereUniqueInput> = z.object({
  energyId_taskId: z.lazy(() => PrivateEnergiesToTasksEnergyIdTaskIdCompoundUniqueInputSchema)
})
.and(z.object({
  energyId_taskId: z.lazy(() => PrivateEnergiesToTasksEnergyIdTaskIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => PrivateEnergiesToTasksWhereInputSchema),z.lazy(() => PrivateEnergiesToTasksWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateEnergiesToTasksWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateEnergiesToTasksWhereInputSchema),z.lazy(() => PrivateEnergiesToTasksWhereInputSchema).array() ]).optional(),
  energyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  taskId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  energy: z.union([ z.lazy(() => PrivateEnergyRelationFilterSchema),z.lazy(() => PrivateEnergyWhereInputSchema) ]).optional(),
  task: z.union([ z.lazy(() => TaskRelationFilterSchema),z.lazy(() => TaskWhereInputSchema) ]).optional(),
}).strict());

export default PrivateEnergiesToTasksWhereUniqueInputSchema;
