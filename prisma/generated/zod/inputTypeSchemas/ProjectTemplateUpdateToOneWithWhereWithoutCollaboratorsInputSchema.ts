import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateWhereInputSchema } from './ProjectTemplateWhereInputSchema';
import { ProjectTemplateUpdateWithoutCollaboratorsInputSchema } from './ProjectTemplateUpdateWithoutCollaboratorsInputSchema';
import { ProjectTemplateUncheckedUpdateWithoutCollaboratorsInputSchema } from './ProjectTemplateUncheckedUpdateWithoutCollaboratorsInputSchema';

export const ProjectTemplateUpdateToOneWithWhereWithoutCollaboratorsInputSchema: z.ZodType<Prisma.ProjectTemplateUpdateToOneWithWhereWithoutCollaboratorsInput> = z.object({
  where: z.lazy(() => ProjectTemplateWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProjectTemplateUpdateWithoutCollaboratorsInputSchema),z.lazy(() => ProjectTemplateUncheckedUpdateWithoutCollaboratorsInputSchema) ]),
}).strict();

export default ProjectTemplateUpdateToOneWithWhereWithoutCollaboratorsInputSchema;
