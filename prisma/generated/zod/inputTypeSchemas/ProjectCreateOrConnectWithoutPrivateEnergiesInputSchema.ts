import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectCreateWithoutPrivateEnergiesInputSchema } from './ProjectCreateWithoutPrivateEnergiesInputSchema';
import { ProjectUncheckedCreateWithoutPrivateEnergiesInputSchema } from './ProjectUncheckedCreateWithoutPrivateEnergiesInputSchema';

export const ProjectCreateOrConnectWithoutPrivateEnergiesInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutPrivateEnergiesInput> = z.object({
  where: z.lazy(() => ProjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectCreateWithoutPrivateEnergiesInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutPrivateEnergiesInputSchema) ]),
}).strict();

export default ProjectCreateOrConnectWithoutPrivateEnergiesInputSchema;
