import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';

export const ProjectTemplatesToTaskTemplatesScalarWhereInputSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesScalarWhereInput> = z.object({
  AND: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesScalarWhereInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProjectTemplatesToTaskTemplatesScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesScalarWhereInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesScalarWhereInputSchema).array() ]).optional(),
  projectId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  taskId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  count: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  schedule: z.lazy(() => JsonFilterSchema).optional()
}).strict();

export default ProjectTemplatesToTaskTemplatesScalarWhereInputSchema;
