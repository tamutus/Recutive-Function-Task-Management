import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectCreateWithoutVolunteersInputSchema } from './ProjectCreateWithoutVolunteersInputSchema';
import { ProjectUncheckedCreateWithoutVolunteersInputSchema } from './ProjectUncheckedCreateWithoutVolunteersInputSchema';

export const ProjectCreateOrConnectWithoutVolunteersInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutVolunteersInput> = z.object({
  where: z.lazy(() => ProjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectCreateWithoutVolunteersInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutVolunteersInputSchema) ]),
}).strict();

export default ProjectCreateOrConnectWithoutVolunteersInputSchema;
