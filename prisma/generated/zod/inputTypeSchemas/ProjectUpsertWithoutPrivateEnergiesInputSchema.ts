import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectUpdateWithoutPrivateEnergiesInputSchema } from './ProjectUpdateWithoutPrivateEnergiesInputSchema';
import { ProjectUncheckedUpdateWithoutPrivateEnergiesInputSchema } from './ProjectUncheckedUpdateWithoutPrivateEnergiesInputSchema';
import { ProjectCreateWithoutPrivateEnergiesInputSchema } from './ProjectCreateWithoutPrivateEnergiesInputSchema';
import { ProjectUncheckedCreateWithoutPrivateEnergiesInputSchema } from './ProjectUncheckedCreateWithoutPrivateEnergiesInputSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';

export const ProjectUpsertWithoutPrivateEnergiesInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutPrivateEnergiesInput> = z.object({
  update: z.union([ z.lazy(() => ProjectUpdateWithoutPrivateEnergiesInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutPrivateEnergiesInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectCreateWithoutPrivateEnergiesInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutPrivateEnergiesInputSchema) ]),
  where: z.lazy(() => ProjectWhereInputSchema).optional()
}).strict();

export default ProjectUpsertWithoutPrivateEnergiesInputSchema;
