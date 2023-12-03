import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateCreateWithoutCollaboratorsInputSchema } from './ProjectTemplateCreateWithoutCollaboratorsInputSchema';
import { ProjectTemplateUncheckedCreateWithoutCollaboratorsInputSchema } from './ProjectTemplateUncheckedCreateWithoutCollaboratorsInputSchema';
import { ProjectTemplateCreateOrConnectWithoutCollaboratorsInputSchema } from './ProjectTemplateCreateOrConnectWithoutCollaboratorsInputSchema';
import { ProjectTemplateWhereUniqueInputSchema } from './ProjectTemplateWhereUniqueInputSchema';

export const ProjectTemplateCreateNestedOneWithoutCollaboratorsInputSchema: z.ZodType<Prisma.ProjectTemplateCreateNestedOneWithoutCollaboratorsInput> = z.object({
  create: z.union([ z.lazy(() => ProjectTemplateCreateWithoutCollaboratorsInputSchema),z.lazy(() => ProjectTemplateUncheckedCreateWithoutCollaboratorsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectTemplateCreateOrConnectWithoutCollaboratorsInputSchema).optional(),
  connect: z.lazy(() => ProjectTemplateWhereUniqueInputSchema).optional()
}).strict();

export default ProjectTemplateCreateNestedOneWithoutCollaboratorsInputSchema;
