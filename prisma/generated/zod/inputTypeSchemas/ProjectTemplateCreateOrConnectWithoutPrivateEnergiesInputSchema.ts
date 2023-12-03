import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateWhereUniqueInputSchema } from './ProjectTemplateWhereUniqueInputSchema';
import { ProjectTemplateCreateWithoutPrivateEnergiesInputSchema } from './ProjectTemplateCreateWithoutPrivateEnergiesInputSchema';
import { ProjectTemplateUncheckedCreateWithoutPrivateEnergiesInputSchema } from './ProjectTemplateUncheckedCreateWithoutPrivateEnergiesInputSchema';

export const ProjectTemplateCreateOrConnectWithoutPrivateEnergiesInputSchema: z.ZodType<Prisma.ProjectTemplateCreateOrConnectWithoutPrivateEnergiesInput> = z.object({
  where: z.lazy(() => ProjectTemplateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectTemplateCreateWithoutPrivateEnergiesInputSchema),z.lazy(() => ProjectTemplateUncheckedCreateWithoutPrivateEnergiesInputSchema) ]),
}).strict();

export default ProjectTemplateCreateOrConnectWithoutPrivateEnergiesInputSchema;
