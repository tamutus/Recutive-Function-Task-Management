import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectCreateWithoutEnergiesInputSchema } from './ProjectCreateWithoutEnergiesInputSchema';
import { ProjectUncheckedCreateWithoutEnergiesInputSchema } from './ProjectUncheckedCreateWithoutEnergiesInputSchema';
import { ProjectCreateOrConnectWithoutEnergiesInputSchema } from './ProjectCreateOrConnectWithoutEnergiesInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';

export const ProjectCreateNestedOneWithoutEnergiesInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutEnergiesInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutEnergiesInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutEnergiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutEnergiesInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
}).strict();

export default ProjectCreateNestedOneWithoutEnergiesInputSchema;
