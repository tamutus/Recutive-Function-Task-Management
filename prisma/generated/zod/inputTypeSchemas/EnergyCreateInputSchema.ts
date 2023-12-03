import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { EnergyCreatemusicInputSchema } from './EnergyCreatemusicInputSchema';
import { EnergiesToProjectTemplatesCreateNestedManyWithoutEnergyInputSchema } from './EnergiesToProjectTemplatesCreateNestedManyWithoutEnergyInputSchema';
import { EnergiesToTaskTemplatesCreateNestedManyWithoutEnergyInputSchema } from './EnergiesToTaskTemplatesCreateNestedManyWithoutEnergyInputSchema';
import { EnergiesToSkillsCreateNestedManyWithoutEnergyInputSchema } from './EnergiesToSkillsCreateNestedManyWithoutEnergyInputSchema';
import { EnergiesToTagsCreateNestedManyWithoutEnergyInputSchema } from './EnergiesToTagsCreateNestedManyWithoutEnergyInputSchema';
import { EnergiesToPersonsCreateNestedManyWithoutEnergyInputSchema } from './EnergiesToPersonsCreateNestedManyWithoutEnergyInputSchema';
import { EnergiesToProjectsCreateNestedManyWithoutEnergyInputSchema } from './EnergiesToProjectsCreateNestedManyWithoutEnergyInputSchema';
import { EnergiesToTasksCreateNestedManyWithoutEnergyInputSchema } from './EnergiesToTasksCreateNestedManyWithoutEnergyInputSchema';
import { EnergiesToTaskWorksCreateNestedManyWithoutEnergyInputSchema } from './EnergiesToTaskWorksCreateNestedManyWithoutEnergyInputSchema';
import { EnergiesToPrivateTagsCreateNestedManyWithoutEnergyInputSchema } from './EnergiesToPrivateTagsCreateNestedManyWithoutEnergyInputSchema';

export const EnergyCreateInputSchema: z.ZodType<Prisma.EnergyCreateInput> = z.object({
  name: z.string(),
  unit: z.string(),
  info: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  music: z.union([ z.lazy(() => EnergyCreatemusicInputSchema),z.string().array() ]).optional(),
  projectTemplates: z.lazy(() => EnergiesToProjectTemplatesCreateNestedManyWithoutEnergyInputSchema).optional(),
  taskTemplates: z.lazy(() => EnergiesToTaskTemplatesCreateNestedManyWithoutEnergyInputSchema).optional(),
  skills: z.lazy(() => EnergiesToSkillsCreateNestedManyWithoutEnergyInputSchema).optional(),
  tags: z.lazy(() => EnergiesToTagsCreateNestedManyWithoutEnergyInputSchema).optional(),
  experiences: z.lazy(() => EnergiesToPersonsCreateNestedManyWithoutEnergyInputSchema).optional(),
  projects: z.lazy(() => EnergiesToProjectsCreateNestedManyWithoutEnergyInputSchema).optional(),
  tasks: z.lazy(() => EnergiesToTasksCreateNestedManyWithoutEnergyInputSchema).optional(),
  taskWork: z.lazy(() => EnergiesToTaskWorksCreateNestedManyWithoutEnergyInputSchema).optional(),
  privateTags: z.lazy(() => EnergiesToPrivateTagsCreateNestedManyWithoutEnergyInputSchema).optional()
}).strict();

export default EnergyCreateInputSchema;
