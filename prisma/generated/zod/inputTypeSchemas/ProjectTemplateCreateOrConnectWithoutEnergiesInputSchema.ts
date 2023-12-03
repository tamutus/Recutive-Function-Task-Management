import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateWhereUniqueInputSchema } from './ProjectTemplateWhereUniqueInputSchema';
import { ProjectTemplateCreateWithoutEnergiesInputSchema } from './ProjectTemplateCreateWithoutEnergiesInputSchema';
import { ProjectTemplateUncheckedCreateWithoutEnergiesInputSchema } from './ProjectTemplateUncheckedCreateWithoutEnergiesInputSchema';

export const ProjectTemplateCreateOrConnectWithoutEnergiesInputSchema: z.ZodType<Prisma.ProjectTemplateCreateOrConnectWithoutEnergiesInput> = z.object({
  where: z.lazy(() => ProjectTemplateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectTemplateCreateWithoutEnergiesInputSchema),z.lazy(() => ProjectTemplateUncheckedCreateWithoutEnergiesInputSchema) ]),
}).strict();

export default ProjectTemplateCreateOrConnectWithoutEnergiesInputSchema;
