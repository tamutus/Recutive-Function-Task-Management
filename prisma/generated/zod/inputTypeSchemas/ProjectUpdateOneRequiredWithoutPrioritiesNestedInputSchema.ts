import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectCreateWithoutPrioritiesInputSchema } from './ProjectCreateWithoutPrioritiesInputSchema';
import { ProjectUncheckedCreateWithoutPrioritiesInputSchema } from './ProjectUncheckedCreateWithoutPrioritiesInputSchema';
import { ProjectCreateOrConnectWithoutPrioritiesInputSchema } from './ProjectCreateOrConnectWithoutPrioritiesInputSchema';
import { ProjectUpsertWithoutPrioritiesInputSchema } from './ProjectUpsertWithoutPrioritiesInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectUpdateToOneWithWhereWithoutPrioritiesInputSchema } from './ProjectUpdateToOneWithWhereWithoutPrioritiesInputSchema';
import { ProjectUpdateWithoutPrioritiesInputSchema } from './ProjectUpdateWithoutPrioritiesInputSchema';
import { ProjectUncheckedUpdateWithoutPrioritiesInputSchema } from './ProjectUncheckedUpdateWithoutPrioritiesInputSchema';

export const ProjectUpdateOneRequiredWithoutPrioritiesNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutPrioritiesNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutPrioritiesInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutPrioritiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutPrioritiesInputSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutPrioritiesInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectUpdateToOneWithWhereWithoutPrioritiesInputSchema),z.lazy(() => ProjectUpdateWithoutPrioritiesInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutPrioritiesInputSchema) ]).optional(),
}).strict();

export default ProjectUpdateOneRequiredWithoutPrioritiesNestedInputSchema;
