import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyCreatemusicInputSchema } from './PrivateEnergyCreatemusicInputSchema';
import { PrivateEnergiesToProjectTemplatesUncheckedCreateNestedManyWithoutEnergyInputSchema } from './PrivateEnergiesToProjectTemplatesUncheckedCreateNestedManyWithoutEnergyInputSchema';
import { PrivateEnergiesToTaskTemplatesUncheckedCreateNestedManyWithoutEnergyInputSchema } from './PrivateEnergiesToTaskTemplatesUncheckedCreateNestedManyWithoutEnergyInputSchema';
import { PrivateEnergiesToSkillsUncheckedCreateNestedManyWithoutEnergyInputSchema } from './PrivateEnergiesToSkillsUncheckedCreateNestedManyWithoutEnergyInputSchema';
import { PrivateEnergiesToProjectsUncheckedCreateNestedManyWithoutEnergyInputSchema } from './PrivateEnergiesToProjectsUncheckedCreateNestedManyWithoutEnergyInputSchema';
import { PrivateEnergiesToTasksUncheckedCreateNestedManyWithoutEnergyInputSchema } from './PrivateEnergiesToTasksUncheckedCreateNestedManyWithoutEnergyInputSchema';
import { PrivateEnergiesToTaskWorksUncheckedCreateNestedManyWithoutEnergyInputSchema } from './PrivateEnergiesToTaskWorksUncheckedCreateNestedManyWithoutEnergyInputSchema';
import { PrivateEnergiesToPrivateTagsUncheckedCreateNestedManyWithoutEnergyInputSchema } from './PrivateEnergiesToPrivateTagsUncheckedCreateNestedManyWithoutEnergyInputSchema';

export const PrivateEnergyUncheckedCreateWithoutTagsInputSchema: z.ZodType<Prisma.PrivateEnergyUncheckedCreateWithoutTagsInput> = z.object({
  personId: z.number().int(),
  id: z.number().int().optional(),
  name: z.string(),
  unit: z.string(),
  info: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  music: z.union([ z.lazy(() => PrivateEnergyCreatemusicInputSchema),z.string().array() ]).optional(),
  projectTemplates: z.lazy(() => PrivateEnergiesToProjectTemplatesUncheckedCreateNestedManyWithoutEnergyInputSchema).optional(),
  taskTemplates: z.lazy(() => PrivateEnergiesToTaskTemplatesUncheckedCreateNestedManyWithoutEnergyInputSchema).optional(),
  skills: z.lazy(() => PrivateEnergiesToSkillsUncheckedCreateNestedManyWithoutEnergyInputSchema).optional(),
  projects: z.lazy(() => PrivateEnergiesToProjectsUncheckedCreateNestedManyWithoutEnergyInputSchema).optional(),
  tasks: z.lazy(() => PrivateEnergiesToTasksUncheckedCreateNestedManyWithoutEnergyInputSchema).optional(),
  taskWork: z.lazy(() => PrivateEnergiesToTaskWorksUncheckedCreateNestedManyWithoutEnergyInputSchema).optional(),
  privateTags: z.lazy(() => PrivateEnergiesToPrivateTagsUncheckedCreateNestedManyWithoutEnergyInputSchema).optional()
}).strict();

export default PrivateEnergyUncheckedCreateWithoutTagsInputSchema;
