import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectCreateWithoutVolunteersInputSchema } from './ProjectCreateWithoutVolunteersInputSchema';
import { ProjectUncheckedCreateWithoutVolunteersInputSchema } from './ProjectUncheckedCreateWithoutVolunteersInputSchema';
import { ProjectCreateOrConnectWithoutVolunteersInputSchema } from './ProjectCreateOrConnectWithoutVolunteersInputSchema';
import { ProjectUpsertWithoutVolunteersInputSchema } from './ProjectUpsertWithoutVolunteersInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectUpdateToOneWithWhereWithoutVolunteersInputSchema } from './ProjectUpdateToOneWithWhereWithoutVolunteersInputSchema';
import { ProjectUpdateWithoutVolunteersInputSchema } from './ProjectUpdateWithoutVolunteersInputSchema';
import { ProjectUncheckedUpdateWithoutVolunteersInputSchema } from './ProjectUncheckedUpdateWithoutVolunteersInputSchema';

export const ProjectUpdateOneRequiredWithoutVolunteersNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutVolunteersNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutVolunteersInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutVolunteersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutVolunteersInputSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutVolunteersInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectUpdateToOneWithWhereWithoutVolunteersInputSchema),z.lazy(() => ProjectUpdateWithoutVolunteersInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutVolunteersInputSchema) ]).optional(),
}).strict();

export default ProjectUpdateOneRequiredWithoutVolunteersNestedInputSchema;
