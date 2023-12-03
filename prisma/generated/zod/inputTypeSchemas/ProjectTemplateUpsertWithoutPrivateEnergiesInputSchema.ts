import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateUpdateWithoutPrivateEnergiesInputSchema } from './ProjectTemplateUpdateWithoutPrivateEnergiesInputSchema';
import { ProjectTemplateUncheckedUpdateWithoutPrivateEnergiesInputSchema } from './ProjectTemplateUncheckedUpdateWithoutPrivateEnergiesInputSchema';
import { ProjectTemplateCreateWithoutPrivateEnergiesInputSchema } from './ProjectTemplateCreateWithoutPrivateEnergiesInputSchema';
import { ProjectTemplateUncheckedCreateWithoutPrivateEnergiesInputSchema } from './ProjectTemplateUncheckedCreateWithoutPrivateEnergiesInputSchema';
import { ProjectTemplateWhereInputSchema } from './ProjectTemplateWhereInputSchema';

export const ProjectTemplateUpsertWithoutPrivateEnergiesInputSchema: z.ZodType<Prisma.ProjectTemplateUpsertWithoutPrivateEnergiesInput> = z.object({
  update: z.union([ z.lazy(() => ProjectTemplateUpdateWithoutPrivateEnergiesInputSchema),z.lazy(() => ProjectTemplateUncheckedUpdateWithoutPrivateEnergiesInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectTemplateCreateWithoutPrivateEnergiesInputSchema),z.lazy(() => ProjectTemplateUncheckedCreateWithoutPrivateEnergiesInputSchema) ]),
  where: z.lazy(() => ProjectTemplateWhereInputSchema).optional()
}).strict();

export default ProjectTemplateUpsertWithoutPrivateEnergiesInputSchema;
