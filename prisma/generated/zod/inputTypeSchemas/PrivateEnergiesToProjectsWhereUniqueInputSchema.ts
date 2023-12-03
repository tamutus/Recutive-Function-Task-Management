import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergiesToProjectsProjectIdEnergyIdCompoundUniqueInputSchema } from './PrivateEnergiesToProjectsProjectIdEnergyIdCompoundUniqueInputSchema';
import { PrivateEnergiesToProjectsWhereInputSchema } from './PrivateEnergiesToProjectsWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { ProjectRelationFilterSchema } from './ProjectRelationFilterSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';
import { PrivateEnergyRelationFilterSchema } from './PrivateEnergyRelationFilterSchema';
import { PrivateEnergyWhereInputSchema } from './PrivateEnergyWhereInputSchema';

export const PrivateEnergiesToProjectsWhereUniqueInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectsWhereUniqueInput> = z.object({
  projectId_energyId: z.lazy(() => PrivateEnergiesToProjectsProjectIdEnergyIdCompoundUniqueInputSchema)
})
.and(z.object({
  projectId_energyId: z.lazy(() => PrivateEnergiesToProjectsProjectIdEnergyIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => PrivateEnergiesToProjectsWhereInputSchema),z.lazy(() => PrivateEnergiesToProjectsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateEnergiesToProjectsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateEnergiesToProjectsWhereInputSchema),z.lazy(() => PrivateEnergiesToProjectsWhereInputSchema).array() ]).optional(),
  projectId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  energyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  project: z.union([ z.lazy(() => ProjectRelationFilterSchema),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
  energy: z.union([ z.lazy(() => PrivateEnergyRelationFilterSchema),z.lazy(() => PrivateEnergyWhereInputSchema) ]).optional(),
}).strict());

export default PrivateEnergiesToProjectsWhereUniqueInputSchema;
