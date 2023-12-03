import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectCreateWithoutVolunteersInputSchema } from './ProjectCreateWithoutVolunteersInputSchema';
import { ProjectUncheckedCreateWithoutVolunteersInputSchema } from './ProjectUncheckedCreateWithoutVolunteersInputSchema';
import { ProjectCreateOrConnectWithoutVolunteersInputSchema } from './ProjectCreateOrConnectWithoutVolunteersInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';

export const ProjectCreateNestedOneWithoutVolunteersInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutVolunteersInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutVolunteersInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutVolunteersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutVolunteersInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
}).strict();

export default ProjectCreateNestedOneWithoutVolunteersInputSchema;
