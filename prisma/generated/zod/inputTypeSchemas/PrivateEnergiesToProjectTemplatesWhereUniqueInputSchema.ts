import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToProjectTemplatesProjectIdEnergyIdCompoundUniqueInputSchema } from './PrivateEnergiesToProjectTemplatesProjectIdEnergyIdCompoundUniqueInputSchema';
import { PrivateEnergiesToProjectTemplatesWhereInputSchema } from './PrivateEnergiesToProjectTemplatesWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { ProjectTemplateRelationFilterSchema } from './ProjectTemplateRelationFilterSchema';
import { ProjectTemplateWhereInputSchema } from './ProjectTemplateWhereInputSchema';
import { PrivateEnergyRelationFilterSchema } from './PrivateEnergyRelationFilterSchema';
import { PrivateEnergyWhereInputSchema } from './PrivateEnergyWhereInputSchema';

export const PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesWhereUniqueInput> = z.object({
  projectId_energyId: z.lazy(() => PrivateEnergiesToProjectTemplatesProjectIdEnergyIdCompoundUniqueInputSchema)
})
.and(z.object({
  projectId_energyId: z.lazy(() => PrivateEnergiesToProjectTemplatesProjectIdEnergyIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesWhereInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateEnergiesToProjectTemplatesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesWhereInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesWhereInputSchema).array() ]).optional(),
  projectId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  energyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  project: z.union([ z.lazy(() => ProjectTemplateRelationFilterSchema),z.lazy(() => ProjectTemplateWhereInputSchema) ]).optional(),
  energy: z.union([ z.lazy(() => PrivateEnergyRelationFilterSchema),z.lazy(() => PrivateEnergyWhereInputSchema) ]).optional(),
}).strict());

export default PrivateEnergiesToProjectTemplatesWhereUniqueInputSchema;
