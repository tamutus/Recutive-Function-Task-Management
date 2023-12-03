import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { ProjectTemplateRelationFilterSchema } from './ProjectTemplateRelationFilterSchema';
import { ProjectTemplateWhereInputSchema } from './ProjectTemplateWhereInputSchema';
import { PrivateEnergyRelationFilterSchema } from './PrivateEnergyRelationFilterSchema';
import { PrivateEnergyWhereInputSchema } from './PrivateEnergyWhereInputSchema';

export const PrivateEnergiesToProjectTemplatesWhereInputSchema: z.ZodType<Prisma.PrivateEnergiesToProjectTemplatesWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesWhereInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateEnergiesToProjectTemplatesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateEnergiesToProjectTemplatesWhereInputSchema),z.lazy(() => PrivateEnergiesToProjectTemplatesWhereInputSchema).array() ]).optional(),
  projectId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  energyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  project: z.union([ z.lazy(() => ProjectTemplateRelationFilterSchema),z.lazy(() => ProjectTemplateWhereInputSchema) ]).optional(),
  energy: z.union([ z.lazy(() => PrivateEnergyRelationFilterSchema),z.lazy(() => PrivateEnergyWhereInputSchema) ]).optional(),
}).strict();

export default PrivateEnergiesToProjectTemplatesWhereInputSchema;
