import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValue } from './InputJsonValue';
import { ProjectTemplateCreateNestedOneWithoutTasksInputSchema } from './ProjectTemplateCreateNestedOneWithoutTasksInputSchema';
import { TaskTemplateCreateNestedOneWithoutProjectsInputSchema } from './TaskTemplateCreateNestedOneWithoutProjectsInputSchema';

export const ProjectTemplatesToTaskTemplatesCreateInputSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesCreateInput> = z.object({
  count: z.number().int().optional(),
  schedule: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValue ]),
  project: z.lazy(() => ProjectTemplateCreateNestedOneWithoutTasksInputSchema),
  task: z.lazy(() => TaskTemplateCreateNestedOneWithoutProjectsInputSchema)
}).strict();

export default ProjectTemplatesToTaskTemplatesCreateInputSchema;
