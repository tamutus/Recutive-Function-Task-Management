import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringNullableListFilterSchema } from './StringNullableListFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { ProjectTemplateRelationFilterSchema } from './ProjectTemplateRelationFilterSchema';
import { ProjectTemplateWhereInputSchema } from './ProjectTemplateWhereInputSchema';
import { EnergyRelationFilterSchema } from './EnergyRelationFilterSchema';
import { EnergyWhereInputSchema } from './EnergyWhereInputSchema';

export const EnergiesToProjectTemplatesWhereInputSchema: z.ZodType<Prisma.EnergiesToProjectTemplatesWhereInput> = z.object({
  AND: z.union([ z.lazy(() => EnergiesToProjectTemplatesWhereInputSchema),z.lazy(() => EnergiesToProjectTemplatesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => EnergiesToProjectTemplatesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => EnergiesToProjectTemplatesWhereInputSchema),z.lazy(() => EnergiesToProjectTemplatesWhereInputSchema).array() ]).optional(),
  projectId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  energyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  links: z.lazy(() => StringNullableListFilterSchema).optional(),
  info: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  project: z.union([ z.lazy(() => ProjectTemplateRelationFilterSchema),z.lazy(() => ProjectTemplateWhereInputSchema) ]).optional(),
  energy: z.union([ z.lazy(() => EnergyRelationFilterSchema),z.lazy(() => EnergyWhereInputSchema) ]).optional(),
}).strict();

export default EnergiesToProjectTemplatesWhereInputSchema;
