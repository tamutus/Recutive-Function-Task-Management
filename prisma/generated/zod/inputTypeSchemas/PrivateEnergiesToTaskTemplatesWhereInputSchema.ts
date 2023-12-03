import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { TaskTemplateRelationFilterSchema } from './TaskTemplateRelationFilterSchema';
import { TaskTemplateWhereInputSchema } from './TaskTemplateWhereInputSchema';
import { PrivateEnergyRelationFilterSchema } from './PrivateEnergyRelationFilterSchema';
import { PrivateEnergyWhereInputSchema } from './PrivateEnergyWhereInputSchema';

export const PrivateEnergiesToTaskTemplatesWhereInputSchema: z.ZodType<Prisma.PrivateEnergiesToTaskTemplatesWhereInput> = z.object({
  AND: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesWhereInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateEnergiesToTaskTemplatesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateEnergiesToTaskTemplatesWhereInputSchema),z.lazy(() => PrivateEnergiesToTaskTemplatesWhereInputSchema).array() ]).optional(),
  taskId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  energyId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  task: z.union([ z.lazy(() => TaskTemplateRelationFilterSchema),z.lazy(() => TaskTemplateWhereInputSchema) ]).optional(),
  energy: z.union([ z.lazy(() => PrivateEnergyRelationFilterSchema),z.lazy(() => PrivateEnergyWhereInputSchema) ]).optional(),
}).strict();

export default PrivateEnergiesToTaskTemplatesWhereInputSchema;
