import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateCreateWithoutPrivateEnergiesInputSchema } from './ProjectTemplateCreateWithoutPrivateEnergiesInputSchema';
import { ProjectTemplateUncheckedCreateWithoutPrivateEnergiesInputSchema } from './ProjectTemplateUncheckedCreateWithoutPrivateEnergiesInputSchema';
import { ProjectTemplateCreateOrConnectWithoutPrivateEnergiesInputSchema } from './ProjectTemplateCreateOrConnectWithoutPrivateEnergiesInputSchema';
import { ProjectTemplateWhereUniqueInputSchema } from './ProjectTemplateWhereUniqueInputSchema';

export const ProjectTemplateCreateNestedOneWithoutPrivateEnergiesInputSchema: z.ZodType<Prisma.ProjectTemplateCreateNestedOneWithoutPrivateEnergiesInput> = z.object({
  create: z.union([ z.lazy(() => ProjectTemplateCreateWithoutPrivateEnergiesInputSchema),z.lazy(() => ProjectTemplateUncheckedCreateWithoutPrivateEnergiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectTemplateCreateOrConnectWithoutPrivateEnergiesInputSchema).optional(),
  connect: z.lazy(() => ProjectTemplateWhereUniqueInputSchema).optional()
}).strict();

export default ProjectTemplateCreateNestedOneWithoutPrivateEnergiesInputSchema;
