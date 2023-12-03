import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyCreatemusicInputSchema } from './EnergyCreatemusicInputSchema';
import { EnergiesToProjectTemplatesUncheckedCreateNestedManyWithoutEnergyInputSchema } from './EnergiesToProjectTemplatesUncheckedCreateNestedManyWithoutEnergyInputSchema';
import { EnergiesToTaskTemplatesUncheckedCreateNestedManyWithoutEnergyInputSchema } from './EnergiesToTaskTemplatesUncheckedCreateNestedManyWithoutEnergyInputSchema';
import { EnergiesToTagsUncheckedCreateNestedManyWithoutEnergyInputSchema } from './EnergiesToTagsUncheckedCreateNestedManyWithoutEnergyInputSchema';
import { EnergiesToPersonsUncheckedCreateNestedManyWithoutEnergyInputSchema } from './EnergiesToPersonsUncheckedCreateNestedManyWithoutEnergyInputSchema';
import { EnergiesToProjectsUncheckedCreateNestedManyWithoutEnergyInputSchema } from './EnergiesToProjectsUncheckedCreateNestedManyWithoutEnergyInputSchema';
import { EnergiesToTasksUncheckedCreateNestedManyWithoutEnergyInputSchema } from './EnergiesToTasksUncheckedCreateNestedManyWithoutEnergyInputSchema';
import { EnergiesToTaskWorksUncheckedCreateNestedManyWithoutEnergyInputSchema } from './EnergiesToTaskWorksUncheckedCreateNestedManyWithoutEnergyInputSchema';
import { EnergiesToPrivateTagsUncheckedCreateNestedManyWithoutEnergyInputSchema } from './EnergiesToPrivateTagsUncheckedCreateNestedManyWithoutEnergyInputSchema';

export const EnergyUncheckedCreateWithoutSkillsInputSchema: z.ZodType<Prisma.EnergyUncheckedCreateWithoutSkillsInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  unit: z.string(),
  info: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  music: z.union([ z.lazy(() => EnergyCreatemusicInputSchema),z.string().array() ]).optional(),
  projectTemplates: z.lazy(() => EnergiesToProjectTemplatesUncheckedCreateNestedManyWithoutEnergyInputSchema).optional(),
  taskTemplates: z.lazy(() => EnergiesToTaskTemplatesUncheckedCreateNestedManyWithoutEnergyInputSchema).optional(),
  tags: z.lazy(() => EnergiesToTagsUncheckedCreateNestedManyWithoutEnergyInputSchema).optional(),
  experiences: z.lazy(() => EnergiesToPersonsUncheckedCreateNestedManyWithoutEnergyInputSchema).optional(),
  projects: z.lazy(() => EnergiesToProjectsUncheckedCreateNestedManyWithoutEnergyInputSchema).optional(),
  tasks: z.lazy(() => EnergiesToTasksUncheckedCreateNestedManyWithoutEnergyInputSchema).optional(),
  taskWork: z.lazy(() => EnergiesToTaskWorksUncheckedCreateNestedManyWithoutEnergyInputSchema).optional(),
  privateTags: z.lazy(() => EnergiesToPrivateTagsUncheckedCreateNestedManyWithoutEnergyInputSchema).optional()
}).strict();

export default EnergyUncheckedCreateWithoutSkillsInputSchema;
