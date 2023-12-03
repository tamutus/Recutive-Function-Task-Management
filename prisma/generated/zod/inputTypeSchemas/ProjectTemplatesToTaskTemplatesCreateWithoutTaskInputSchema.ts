import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValue } from './InputJsonValue';
import { ProjectTemplateCreateNestedOneWithoutTasksInputSchema } from './ProjectTemplateCreateNestedOneWithoutTasksInputSchema';

export const ProjectTemplatesToTaskTemplatesCreateWithoutTaskInputSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesCreateWithoutTaskInput> = z.object({
  count: z.number().int().optional(),
  schedule: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValue ]),
  project: z.lazy(() => ProjectTemplateCreateNestedOneWithoutTasksInputSchema)
}).strict();

export default ProjectTemplatesToTaskTemplatesCreateWithoutTaskInputSchema;
