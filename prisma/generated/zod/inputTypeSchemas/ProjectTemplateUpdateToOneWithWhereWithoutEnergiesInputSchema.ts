import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateWhereInputSchema } from './ProjectTemplateWhereInputSchema';
import { ProjectTemplateUpdateWithoutEnergiesInputSchema } from './ProjectTemplateUpdateWithoutEnergiesInputSchema';
import { ProjectTemplateUncheckedUpdateWithoutEnergiesInputSchema } from './ProjectTemplateUncheckedUpdateWithoutEnergiesInputSchema';

export const ProjectTemplateUpdateToOneWithWhereWithoutEnergiesInputSchema: z.ZodType<Prisma.ProjectTemplateUpdateToOneWithWhereWithoutEnergiesInput> = z.object({
  where: z.lazy(() => ProjectTemplateWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProjectTemplateUpdateWithoutEnergiesInputSchema),z.lazy(() => ProjectTemplateUncheckedUpdateWithoutEnergiesInputSchema) ]),
}).strict();

export default ProjectTemplateUpdateToOneWithWhereWithoutEnergiesInputSchema;
