import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplatesToTaskTemplatesProjectIdTaskIdCompoundUniqueInputSchema } from './ProjectTemplatesToTaskTemplatesProjectIdTaskIdCompoundUniqueInputSchema';
import { ProjectTemplatesToTaskTemplatesWhereInputSchema } from './ProjectTemplatesToTaskTemplatesWhereInputSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { JsonFilterSchema } from './JsonFilterSchema';
import { ProjectTemplateRelationFilterSchema } from './ProjectTemplateRelationFilterSchema';
import { ProjectTemplateWhereInputSchema } from './ProjectTemplateWhereInputSchema';
import { TaskTemplateRelationFilterSchema } from './TaskTemplateRelationFilterSchema';
import { TaskTemplateWhereInputSchema } from './TaskTemplateWhereInputSchema';

export const ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesWhereUniqueInput> = z.object({
  projectId_taskId: z.lazy(() => ProjectTemplatesToTaskTemplatesProjectIdTaskIdCompoundUniqueInputSchema)
})
.and(z.object({
  projectId_taskId: z.lazy(() => ProjectTemplatesToTaskTemplatesProjectIdTaskIdCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesWhereInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProjectTemplatesToTaskTemplatesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProjectTemplatesToTaskTemplatesWhereInputSchema),z.lazy(() => ProjectTemplatesToTaskTemplatesWhereInputSchema).array() ]).optional(),
  projectId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  taskId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  count: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  schedule: z.lazy(() => JsonFilterSchema).optional(),
  project: z.union([ z.lazy(() => ProjectTemplateRelationFilterSchema),z.lazy(() => ProjectTemplateWhereInputSchema) ]).optional(),
  task: z.union([ z.lazy(() => TaskTemplateRelationFilterSchema),z.lazy(() => TaskTemplateWhereInputSchema) ]).optional(),
}).strict());

export default ProjectTemplatesToTaskTemplatesWhereUniqueInputSchema;
