import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateCreateWithoutCollaboratorsInputSchema } from './ProjectTemplateCreateWithoutCollaboratorsInputSchema';
import { ProjectTemplateUncheckedCreateWithoutCollaboratorsInputSchema } from './ProjectTemplateUncheckedCreateWithoutCollaboratorsInputSchema';
import { ProjectTemplateCreateOrConnectWithoutCollaboratorsInputSchema } from './ProjectTemplateCreateOrConnectWithoutCollaboratorsInputSchema';
import { ProjectTemplateUpsertWithoutCollaboratorsInputSchema } from './ProjectTemplateUpsertWithoutCollaboratorsInputSchema';
import { ProjectTemplateWhereUniqueInputSchema } from './ProjectTemplateWhereUniqueInputSchema';
import { ProjectTemplateUpdateToOneWithWhereWithoutCollaboratorsInputSchema } from './ProjectTemplateUpdateToOneWithWhereWithoutCollaboratorsInputSchema';
import { ProjectTemplateUpdateWithoutCollaboratorsInputSchema } from './ProjectTemplateUpdateWithoutCollaboratorsInputSchema';
import { ProjectTemplateUncheckedUpdateWithoutCollaboratorsInputSchema } from './ProjectTemplateUncheckedUpdateWithoutCollaboratorsInputSchema';

export const ProjectTemplateUpdateOneRequiredWithoutCollaboratorsNestedInputSchema: z.ZodType<Prisma.ProjectTemplateUpdateOneRequiredWithoutCollaboratorsNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectTemplateCreateWithoutCollaboratorsInputSchema),z.lazy(() => ProjectTemplateUncheckedCreateWithoutCollaboratorsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectTemplateCreateOrConnectWithoutCollaboratorsInputSchema).optional(),
  upsert: z.lazy(() => ProjectTemplateUpsertWithoutCollaboratorsInputSchema).optional(),
  connect: z.lazy(() => ProjectTemplateWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectTemplateUpdateToOneWithWhereWithoutCollaboratorsInputSchema),z.lazy(() => ProjectTemplateUpdateWithoutCollaboratorsInputSchema),z.lazy(() => ProjectTemplateUncheckedUpdateWithoutCollaboratorsInputSchema) ]).optional(),
}).strict();

export default ProjectTemplateUpdateOneRequiredWithoutCollaboratorsNestedInputSchema;
