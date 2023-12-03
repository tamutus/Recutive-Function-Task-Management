import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToTaskTemplatesTaskIdEnergyIdCompoundUniqueInputSchema } from './EnergiesToTaskTemplatesTaskIdEnergyIdCompoundUniqueInputSchema';
import { EnergiesToTaskTemplatesWhereInputSchema } from './EnergiesToTaskTemplatesWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { TaskTemplateRelationFilterSchema } from './TaskTemplateRelationFilterSchema';
import { TaskTemplateWhereInputSchema } from './TaskTemplateWhereInputSchema';
import { EnergyRelationFilterSchema } from './EnergyRelationFilterSchema';
import { EnergyWhereInputSchema } from './EnergyWhereInputSchema';

export const EnergiesToTaskTemplatesWhereUniqueInputSchema: z.ZodType<Prisma.EnergiesToTaskTemplatesWhereUniqueInput> = z.object({
  taskId_energyId: z.lazy(() => EnergiesToTaskTemplatesTaskIdEnergyIdCompoundUniqueInputSchema)
})
.and(z.object({
  taskId_energyId: z.lazy(() => EnergiesToTaskTemplatesTaskIdEnergyIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => EnergiesToTaskTemplatesWhereInputSchema),z.lazy(() => EnergiesToTaskTemplatesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EnergiesToTaskTemplatesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EnergiesToTaskTemplatesWhereInputSchema),z.lazy(() => EnergiesToTaskTemplatesWhereInputSchema).array() ]).optional(),
  taskId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  energyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  info: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  links: z.lazy(() => StringNullableListFilterSchema).optional(),
  task: z.union([ z.lazy(() => TaskTemplateRelationFilterSchema),z.lazy(() => TaskTemplateWhereInputSchema) ]).optional(),
  energy: z.union([ z.lazy(() => EnergyRelationFilterSchema),z.lazy(() => EnergyWhereInputSchema) ]).optional(),
}).strict());

export default EnergiesToTaskTemplatesWhereUniqueInputSchema;
