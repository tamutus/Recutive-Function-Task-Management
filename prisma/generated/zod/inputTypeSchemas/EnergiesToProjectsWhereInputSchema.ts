import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { ProjectRelationFilterSchema } from './ProjectRelationFilterSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';
import { EnergyRelationFilterSchema } from './EnergyRelationFilterSchema';
import { EnergyWhereInputSchema } from './EnergyWhereInputSchema';

export const EnergiesToProjectsWhereInputSchema: z.ZodType<Prisma.EnergiesToProjectsWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EnergiesToProjectsWhereInputSchema),z.lazy(() => EnergiesToProjectsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EnergiesToProjectsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EnergiesToProjectsWhereInputSchema),z.lazy(() => EnergiesToProjectsWhereInputSchema).array() ]).optional(),
  projectId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  energyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  info: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  links: z.lazy(() => StringNullableListFilterSchema).optional(),
  project: z.union([ z.lazy(() => ProjectRelationFilterSchema),z.lazy(() => ProjectWhereInputSchema) ]).optional(),
  energy: z.union([ z.lazy(() => EnergyRelationFilterSchema),z.lazy(() => EnergyWhereInputSchema) ]).optional(),
}).strict();

export default EnergiesToProjectsWhereInputSchema;
