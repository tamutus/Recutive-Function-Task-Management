import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectUpdateWithoutVolunteersInputSchema } from './ProjectUpdateWithoutVolunteersInputSchema';
import { ProjectUncheckedUpdateWithoutVolunteersInputSchema } from './ProjectUncheckedUpdateWithoutVolunteersInputSchema';
import { ProjectCreateWithoutVolunteersInputSchema } from './ProjectCreateWithoutVolunteersInputSchema';
import { ProjectUncheckedCreateWithoutVolunteersInputSchema } from './ProjectUncheckedCreateWithoutVolunteersInputSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';

export const ProjectUpsertWithoutVolunteersInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutVolunteersInput> = z.object({
  update: z.union([ z.lazy(() => ProjectUpdateWithoutVolunteersInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutVolunteersInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectCreateWithoutVolunteersInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutVolunteersInputSchema) ]),
  where: z.lazy(() => ProjectWhereInputSchema).optional()
}).strict();

export default ProjectUpsertWithoutVolunteersInputSchema;
