import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergiesToProjectTemplatesProjectIdEnergyIdCompoundUniqueInputSchema } from './EnergiesToProjectTemplatesProjectIdEnergyIdCompoundUniqueInputSchema';
import { EnergiesToProjectTemplatesWhereInputSchema } from './EnergiesToProjectTemplatesWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { ProjectTemplateRelationFilterSchema } from './ProjectTemplateRelationFilterSchema';
import { ProjectTemplateWhereInputSchema } from './ProjectTemplateWhereInputSchema';
import { EnergyRelationFilterSchema } from './EnergyRelationFilterSchema';
import { EnergyWhereInputSchema } from './EnergyWhereInputSchema';

export const EnergiesToProjectTemplatesWhereUniqueInputSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesWhereUniqueInput> = z.object({
  projectId_energyId: z.lazy(() => EnergiesToProjectTemplatesProjectIdEnergyIdCompoundUniqueInputSchema)
})
.and(z.object({
  projectId_energyId: z.lazy(() => EnergiesToProjectTemplatesProjectIdEnergyIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => EnergiesToProjectTemplatesWhereInputSchema),z.lazy(() => EnergiesToProjectTemplatesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EnergiesToProjectTemplatesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EnergiesToProjectTemplatesWhereInputSchema),z.lazy(() => EnergiesToProjectTemplatesWhereInputSchema).array() ]).optional(),
  projectId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  energyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  links: z.lazy(() => StringNullableListFilterSchema).optional(),
  info: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  project: z.union([ z.lazy(() => ProjectTemplateRelationFilterSchema),z.lazy(() => ProjectTemplateWhereInputSchema) ]).optional(),
  energy: z.union([ z.lazy(() => EnergyRelationFilterSchema),z.lazy(() => EnergyWhereInputSchema) ]).optional(),
}).strict());

export default EnergiesToProjectTemplatesWhereUniqueInputSchema;
