import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateUpdateWithoutEnergiesInputSchema } from './ProjectTemplateUpdateWithoutEnergiesInputSchema';
import { ProjectTemplateUncheckedUpdateWithoutEnergiesInputSchema } from './ProjectTemplateUncheckedUpdateWithoutEnergiesInputSchema';
import { ProjectTemplateCreateWithoutEnergiesInputSchema } from './ProjectTemplateCreateWithoutEnergiesInputSchema';
import { ProjectTemplateUncheckedCreateWithoutEnergiesInputSchema } from './ProjectTemplateUncheckedCreateWithoutEnergiesInputSchema';
import { ProjectTemplateWhereInputSchema } from './ProjectTemplateWhereInputSchema';

export const ProjectTemplateUpsertWithoutEnergiesInputSchema: z.ZodType<Prisma.ProjectTemplateUpsertWithoutEnergiesInput> = z.object({
  update: z.union([ z.lazy(() => ProjectTemplateUpdateWithoutEnergiesInputSchema),z.lazy(() => ProjectTemplateUncheckedUpdateWithoutEnergiesInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectTemplateCreateWithoutEnergiesInputSchema),z.lazy(() => ProjectTemplateUncheckedCreateWithoutEnergiesInputSchema) ]),
  where: z.lazy(() => ProjectTemplateWhereInputSchema).optional()
}).strict();

export default ProjectTemplateUpsertWithoutEnergiesInputSchema;
