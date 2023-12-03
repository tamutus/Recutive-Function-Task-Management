import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateWhereUniqueInputSchema } from './ProjectTemplateWhereUniqueInputSchema';
import { ProjectTemplateCreateWithoutCollaboratorsInputSchema } from './ProjectTemplateCreateWithoutCollaboratorsInputSchema';
import { ProjectTemplateUncheckedCreateWithoutCollaboratorsInputSchema } from './ProjectTemplateUncheckedCreateWithoutCollaboratorsInputSchema';

export const ProjectTemplateCreateOrConnectWithoutCollaboratorsInputSchema: z.ZodType<Prisma.ProjectTemplateCreateOrConnectWithoutCollaboratorsInput> = z.object({
  where: z.lazy(() => ProjectTemplateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectTemplateCreateWithoutCollaboratorsInputSchema),z.lazy(() => ProjectTemplateUncheckedCreateWithoutCollaboratorsInputSchema) ]),
}).strict();

export default ProjectTemplateCreateOrConnectWithoutCollaboratorsInputSchema;
