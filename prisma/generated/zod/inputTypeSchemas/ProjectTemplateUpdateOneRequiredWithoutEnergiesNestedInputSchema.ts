import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateCreateWithoutEnergiesInputSchema } from './ProjectTemplateCreateWithoutEnergiesInputSchema';
import { ProjectTemplateUncheckedCreateWithoutEnergiesInputSchema } from './ProjectTemplateUncheckedCreateWithoutEnergiesInputSchema';
import { ProjectTemplateCreateOrConnectWithoutEnergiesInputSchema } from './ProjectTemplateCreateOrConnectWithoutEnergiesInputSchema';
import { ProjectTemplateUpsertWithoutEnergiesInputSchema } from './ProjectTemplateUpsertWithoutEnergiesInputSchema';
import { ProjectTemplateWhereUniqueInputSchema } from './ProjectTemplateWhereUniqueInputSchema';
import { ProjectTemplateUpdateToOneWithWhereWithoutEnergiesInputSchema } from './ProjectTemplateUpdateToOneWithWhereWithoutEnergiesInputSchema';
import { ProjectTemplateUpdateWithoutEnergiesInputSchema } from './ProjectTemplateUpdateWithoutEnergiesInputSchema';
import { ProjectTemplateUncheckedUpdateWithoutEnergiesInputSchema } from './ProjectTemplateUncheckedUpdateWithoutEnergiesInputSchema';

export const ProjectTemplateUpdateOneRequiredWithoutEnergiesNestedInputSchema: z.ZodType<Prisma.ProjectTemplateUpdateOneRequiredWithoutEnergiesNestedInput> = z.object({
  create: z.union([ z.lazy(() => ProjectTemplateCreateWithoutEnergiesInputSchema),z.lazy(() => ProjectTemplateUncheckedCreateWithoutEnergiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectTemplateCreateOrConnectWithoutEnergiesInputSchema).optional(),
  upsert: z.lazy(() => ProjectTemplateUpsertWithoutEnergiesInputSchema).optional(),
  connect: z.lazy(() => ProjectTemplateWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ProjectTemplateUpdateToOneWithWhereWithoutEnergiesInputSchema),z.lazy(() => ProjectTemplateUpdateWithoutEnergiesInputSchema),z.lazy(() => ProjectTemplateUncheckedUpdateWithoutEnergiesInputSchema) ]).optional(),
}).strict();

export default ProjectTemplateUpdateOneRequiredWithoutEnergiesNestedInputSchema;
