import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectCreateWithoutEnergiesInputSchema } from './ProjectCreateWithoutEnergiesInputSchema';
import { ProjectUncheckedCreateWithoutEnergiesInputSchema } from './ProjectUncheckedCreateWithoutEnergiesInputSchema';
import { ProjectCreateOrConnectWithoutEnergiesInputSchema } from './ProjectCreateOrConnectWithoutEnergiesInputSchema';
import { ProjectUpsertWithoutEnergiesInputSchema } from './ProjectUpsertWithoutEnergiesInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectUpdateToOneWithWhereWithoutEnergiesInputSchema } from './ProjectUpdateToOneWithWhereWithoutEnergiesInputSchema';
import { ProjectUpdateWithoutEnergiesInputSchema } from './ProjectUpdateWithoutEnergiesInputSchema';
import { ProjectUncheckedUpdateWithoutEnergiesInputSchema } from './ProjectUncheckedUpdateWithoutEnergiesInputSchema';

export const ProjectUpdateOneRequiredWithoutEnergiesNestedInputSchema: z.ZodType<Prisma.ProjectUpdateOneRequiredWithoutEnergiesNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutEnergiesInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutEnergiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutEnergiesInputSchema).optional(),
  upsert: z.lazy(() => ProjectUpsertWithoutEnergiesInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectUpdateToOneWithWhereWithoutEnergiesInputSchema),z.lazy(() => ProjectUpdateWithoutEnergiesInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutEnergiesInputSchema) ]).optional(),
}).strict();

export default ProjectUpdateOneRequiredWithoutEnergiesNestedInputSchema;
