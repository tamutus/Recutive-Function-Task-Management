import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectCreateWithoutEnergiesInputSchema } from './ProjectCreateWithoutEnergiesInputSchema';
import { ProjectUncheckedCreateWithoutEnergiesInputSchema } from './ProjectUncheckedCreateWithoutEnergiesInputSchema';

export const ProjectCreateOrConnectWithoutEnergiesInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutEnergiesInput> = z.object({
  where: z.lazy(() => ProjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectCreateWithoutEnergiesInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutEnergiesInputSchema) ]),
}).strict();

export default ProjectCreateOrConnectWithoutEnergiesInputSchema;
