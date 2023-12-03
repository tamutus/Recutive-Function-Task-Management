import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateCreateWithoutPrivateEnergiesInputSchema } from './ProjectTemplateCreateWithoutPrivateEnergiesInputSchema';
import { ProjectTemplateUncheckedCreateWithoutPrivateEnergiesInputSchema } from './ProjectTemplateUncheckedCreateWithoutPrivateEnergiesInputSchema';
import { ProjectTemplateCreateOrConnectWithoutPrivateEnergiesInputSchema } from './ProjectTemplateCreateOrConnectWithoutPrivateEnergiesInputSchema';
import { ProjectTemplateUpsertWithoutPrivateEnergiesInputSchema } from './ProjectTemplateUpsertWithoutPrivateEnergiesInputSchema';
import { ProjectTemplateWhereUniqueInputSchema } from './ProjectTemplateWhereUniqueInputSchema';
import { ProjectTemplateUpdateToOneWithWhereWithoutPrivateEnergiesInputSchema } from './ProjectTemplateUpdateToOneWithWhereWithoutPrivateEnergiesInputSchema';
import { ProjectTemplateUpdateWithoutPrivateEnergiesInputSchema } from './ProjectTemplateUpdateWithoutPrivateEnergiesInputSchema';
import { ProjectTemplateUncheckedUpdateWithoutPrivateEnergiesInputSchema } from './ProjectTemplateUncheckedUpdateWithoutPrivateEnergiesInputSchema';

export const ProjectTemplateUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema: z.ZodType<Prisma.ProjectTemplateUpdateOneRequiredWithoutPrivateEnergiesNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectTemplateCreateWithoutPrivateEnergiesInputSchema),z.lazy(() => ProjectTemplateUncheckedCreateWithoutPrivateEnergiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectTemplateCreateOrConnectWithoutPrivateEnergiesInputSchema).optional(),
  upsert: z.lazy(() => ProjectTemplateUpsertWithoutPrivateEnergiesInputSchema).optional(),
  connect: z.lazy(() => ProjectTemplateWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectTemplateUpdateToOneWithWhereWithoutPrivateEnergiesInputSchema),z.lazy(() => ProjectTemplateUpdateWithoutPrivateEnergiesInputSchema),z.lazy(() => ProjectTemplateUncheckedUpdateWithoutPrivateEnergiesInputSchema) ]).optional(),
}).strict();

export default ProjectTemplateUpdateOneRequiredWithoutPrivateEnergiesNestedInputSchema;
