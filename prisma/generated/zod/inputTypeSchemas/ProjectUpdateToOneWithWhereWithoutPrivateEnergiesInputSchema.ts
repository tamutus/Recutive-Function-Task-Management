import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';
import { ProjectUpdateWithoutPrivateEnergiesInputSchema } from './ProjectUpdateWithoutPrivateEnergiesInputSchema';
import { ProjectUncheckedUpdateWithoutPrivateEnergiesInputSchema } from './ProjectUncheckedUpdateWithoutPrivateEnergiesInputSchema';

export const ProjectUpdateToOneWithWhereWithoutPrivateEnergiesInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutPrivateEnergiesInput> = z.object({
  where: z.lazy(() => ProjectWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProjectUpdateWithoutPrivateEnergiesInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutPrivateEnergiesInputSchema) ]),
}).strict();

export default ProjectUpdateToOneWithWhereWithoutPrivateEnergiesInputSchema;
