import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectCreateWithoutPrivateEnergiesInputSchema } from './ProjectCreateWithoutPrivateEnergiesInputSchema';
import { ProjectUncheckedCreateWithoutPrivateEnergiesInputSchema } from './ProjectUncheckedCreateWithoutPrivateEnergiesInputSchema';
import { ProjectCreateOrConnectWithoutPrivateEnergiesInputSchema } from './ProjectCreateOrConnectWithoutPrivateEnergiesInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';

export const ProjectCreateNestedOneWithoutPrivateEnergiesInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutPrivateEnergiesInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutPrivateEnergiesInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutPrivateEnergiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutPrivateEnergiesInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
}).strict();

export default ProjectCreateNestedOneWithoutPrivateEnergiesInputSchema;
