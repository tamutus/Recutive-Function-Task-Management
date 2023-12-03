import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectCreateWithoutPrivateEnergiesInputSchema } from './ProjectCreateWithoutPrivateEnergiesInputSchema';
import { ProjectUncheckedCreateWithoutPrivateEnergiesInputSchema } from './ProjectUncheckedCreateWithoutPrivateEnergiesInputSchema';
import { ProjectCreateOrConnectWithoutPrivateEnergiesInputSchema } from './ProjectCreateOrConnectWithoutPrivateEnergiesInputSchema';
import { ProjectUpsertWithoutPrivateEnergiesInputSchema } from './ProjectUpsertWithoutPrivateEnergiesInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectUpdateToOneWithWhereWithoutPrivateEnergiesInputSchema } from './ProjectUpdateToOneWithWhereWithoutPrivateEnergiesInputSchema';
import { ProjectUpdateWithoutPrivateEnergiesInputSchema } from './ProjectUpdateWithoutPrivateEnergiesInputSchema';
import { ProjectUncheckedUpdateWithoutPrivateEnergiesInputSchema } from './ProjectUncheckedUpdateWithoutPrivateEnergiesInputSchema';

export const ProjectUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutPrivateEnergiesNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutPrivateEnergiesInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutPrivateEnergiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutPrivateEnergiesInputSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutPrivateEnergiesInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectUpdateToOneWithWhereWithoutPrivateEnergiesInputSchema),z.lazy(() => ProjectUpdateWithoutPrivateEnergiesInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutPrivateEnergiesInputSchema) ]).optional(),
}).strict();

export default ProjectUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema;
