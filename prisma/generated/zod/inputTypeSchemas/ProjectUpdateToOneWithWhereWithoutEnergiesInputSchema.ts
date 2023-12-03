import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';
import { ProjectUpdateWithoutEnergiesInputSchema } from './ProjectUpdateWithoutEnergiesInputSchema';
import { ProjectUncheckedUpdateWithoutEnergiesInputSchema } from './ProjectUncheckedUpdateWithoutEnergiesInputSchema';

export const ProjectUpdateToOneWithWhereWithoutEnergiesInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutEnergiesInput> = z.object({
  where: z.lazy(() => ProjectWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProjectUpdateWithoutEnergiesInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutEnergiesInputSchema) ]),
}).strict();

export default ProjectUpdateToOneWithWhereWithoutEnergiesInputSchema;
