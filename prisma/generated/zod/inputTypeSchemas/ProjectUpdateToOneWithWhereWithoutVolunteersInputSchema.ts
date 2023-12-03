import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';
import { ProjectUpdateWithoutVolunteersInputSchema } from './ProjectUpdateWithoutVolunteersInputSchema';
import { ProjectUncheckedUpdateWithoutVolunteersInputSchema } from './ProjectUncheckedUpdateWithoutVolunteersInputSchema';

export const ProjectUpdateToOneWithWhereWithoutVolunteersInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutVolunteersInput> = z.object({
  where: z.lazy(() => ProjectWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProjectUpdateWithoutVolunteersInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutVolunteersInputSchema) ]),
}).strict();

export default ProjectUpdateToOneWithWhereWithoutVolunteersInputSchema;
