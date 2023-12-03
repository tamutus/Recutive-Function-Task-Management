import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateCreateWithoutEnergiesInputSchema } from './ProjectTemplateCreateWithoutEnergiesInputSchema';
import { ProjectTemplateUncheckedCreateWithoutEnergiesInputSchema } from './ProjectTemplateUncheckedCreateWithoutEnergiesInputSchema';
import { ProjectTemplateCreateOrConnectWithoutEnergiesInputSchema } from './ProjectTemplateCreateOrConnectWithoutEnergiesInputSchema';
import { ProjectTemplateWhereUniqueInputSchema } from './ProjectTemplateWhereUniqueInputSchema';

export const ProjectTemplateCreateNestedOneWithoutEnergiesInputSchema: z.ZodType<Prisma.ProjectTemplateCreateNestedOneWithoutEnergiesInput> = z.object({
  create: z.union([ z.lazy(() => ProjectTemplateCreateWithoutEnergiesInputSchema),z.lazy(() => ProjectTemplateUncheckedCreateWithoutEnergiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectTemplateCreateOrConnectWithoutEnergiesInputSchema).optional(),
  connect: z.lazy(() => ProjectTemplateWhereUniqueInputSchema).optional()
}).strict();

export default ProjectTemplateCreateNestedOneWithoutEnergiesInputSchema;
