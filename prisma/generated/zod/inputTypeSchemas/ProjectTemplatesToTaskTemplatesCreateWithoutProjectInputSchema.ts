import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValue } from './InputJsonValue';
import { TaskTemplateCreateNestedOneWithoutProjectsInputSchema } from './TaskTemplateCreateNestedOneWithoutProjectsInputSchema';

export const ProjectTemplatesToTaskTemplatesCreateWithoutProjectInputSchema: z.ZodType<Prisma.ProjectTemplatesToTaskTemplatesCreateWithoutProjectInput> = z.object({
  count: z.number().int().optional(),
  schedule: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValue ]),
  task: z.lazy(() => TaskTemplateCreateNestedOneWithoutProjectsInputSchema)
}).strict();

export default ProjectTemplatesToTaskTemplatesCreateWithoutProjectInputSchema;
