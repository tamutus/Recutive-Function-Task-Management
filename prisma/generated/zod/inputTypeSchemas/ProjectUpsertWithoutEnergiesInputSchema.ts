import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectUpdateWithoutEnergiesInputSchema } from './ProjectUpdateWithoutEnergiesInputSchema';
import { ProjectUncheckedUpdateWithoutEnergiesInputSchema } from './ProjectUncheckedUpdateWithoutEnergiesInputSchema';
import { ProjectCreateWithoutEnergiesInputSchema } from './ProjectCreateWithoutEnergiesInputSchema';
import { ProjectUncheckedCreateWithoutEnergiesInputSchema } from './ProjectUncheckedCreateWithoutEnergiesInputSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';

export const ProjectUpsertWithoutEnergiesInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutEnergiesInput> = z.object({
  update: z.union([ z.lazy(() => ProjectUpdateWithoutEnergiesInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutEnergiesInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectCreateWithoutEnergiesInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutEnergiesInputSchema) ]),
  where: z.lazy(() => ProjectWhereInputSchema).optional()
}).strict();

export default ProjectUpsertWithoutEnergiesInputSchema;
