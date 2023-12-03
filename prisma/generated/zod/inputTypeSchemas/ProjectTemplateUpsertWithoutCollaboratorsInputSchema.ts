import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateUpdateWithoutCollaboratorsInputSchema } from './ProjectTemplateUpdateWithoutCollaboratorsInputSchema';
import { ProjectTemplateUncheckedUpdateWithoutCollaboratorsInputSchema } from './ProjectTemplateUncheckedUpdateWithoutCollaboratorsInputSchema';
import { ProjectTemplateCreateWithoutCollaboratorsInputSchema } from './ProjectTemplateCreateWithoutCollaboratorsInputSchema';
import { ProjectTemplateUncheckedCreateWithoutCollaboratorsInputSchema } from './ProjectTemplateUncheckedCreateWithoutCollaboratorsInputSchema';
import { ProjectTemplateWhereInputSchema } from './ProjectTemplateWhereInputSchema';

export const ProjectTemplateUpsertWithoutCollaboratorsInputSchema: z.ZodType<Prisma.ProjectTemplateUpsertWithoutCollaboratorsInput> = z.object({
  update: z.union([ z.lazy(() => ProjectTemplateUpdateWithoutCollaboratorsInputSchema),z.lazy(() => ProjectTemplateUncheckedUpdateWithoutCollaboratorsInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectTemplateCreateWithoutCollaboratorsInputSchema),z.lazy(() => ProjectTemplateUncheckedCreateWithoutCollaboratorsInputSchema) ]),
  where: z.lazy(() => ProjectTemplateWhereInputSchema).optional()
}).strict();

export default ProjectTemplateUpsertWithoutCollaboratorsInputSchema;
