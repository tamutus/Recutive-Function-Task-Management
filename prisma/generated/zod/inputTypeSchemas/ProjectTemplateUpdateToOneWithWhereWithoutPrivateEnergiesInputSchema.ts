import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateWhereInputSchema } from './ProjectTemplateWhereInputSchema';
import { ProjectTemplateUpdateWithoutPrivateEnergiesInputSchema } from './ProjectTemplateUpdateWithoutPrivateEnergiesInputSchema';
import { ProjectTemplateUncheckedUpdateWithoutPrivateEnergiesInputSchema } from './ProjectTemplateUncheckedUpdateWithoutPrivateEnergiesInputSchema';

export const ProjectTemplateUpdateToOneWithWhereWithoutPrivateEnergiesInputSchema: z.ZodType<Prisma.ProjectTemplateUpdateToOneWithWhereWithoutPrivateEnergiesInput> = z.object({
  where: z.lazy(() => ProjectTemplateWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProjectTemplateUpdateWithoutPrivateEnergiesInputSchema),z.lazy(() => ProjectTemplateUncheckedUpdateWithoutPrivateEnergiesInputSchema) ]),
}).strict();

export default ProjectTemplateUpdateToOneWithWhereWithoutPrivateEnergiesInputSchema;
