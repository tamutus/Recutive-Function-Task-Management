import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateEnergyCreatemusicInputSchema } from './PrivateEnergyCreatemusicInputSchema';
import { PrivateEnergiesToProjectTemplatesCreateNestedManyWithoutEnergyInputSchema } from './PrivateEnergiesToProjectTemplatesCreateNestedManyWithoutEnergyInputSchema';
import { PrivateEnergiesToTaskTemplatesCreateNestedManyWithoutEnergyInputSchema } from './PrivateEnergiesToTaskTemplatesCreateNestedManyWithoutEnergyInputSchema';
import { PrivateEnergiesToSkillsCreateNestedManyWithoutEnergyInputSchema } from './PrivateEnergiesToSkillsCreateNestedManyWithoutEnergyInputSchema';
import { PrivateEnergiesToTagsCreateNestedManyWithoutEnergyInputSchema } from './PrivateEnergiesToTagsCreateNestedManyWithoutEnergyInputSchema';
import { PrivateEnergiesToProjectsCreateNestedManyWithoutEnergyInputSchema } from './PrivateEnergiesToProjectsCreateNestedManyWithoutEnergyInputSchema';
import { PrivateEnergiesToTasksCreateNestedManyWithoutEnergyInputSchema } from './PrivateEnergiesToTasksCreateNestedManyWithoutEnergyInputSchema';
import { PrivateEnergiesToTaskWorksCreateNestedManyWithoutEnergyInputSchema } from './PrivateEnergiesToTaskWorksCreateNestedManyWithoutEnergyInputSchema';
import { PrivateEnergiesToPrivateTagsCreateNestedManyWithoutEnergyInputSchema } from './PrivateEnergiesToPrivateTagsCreateNestedManyWithoutEnergyInputSchema';

export const PrivateEnergyCreateWithoutPersonInputSchema: z.ZodType<Prisma.PrivateEnergyCreateWithoutPersonInput> = z.object({
  name: z.string(),
  unit: z.string(),
  info: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  music: z.union([ z.lazy(() => PrivateEnergyCreatemusicInputSchema),z.string().array() ]).optional(),
  projectTemplates: z.lazy(() => PrivateEnergiesToProjectTemplatesCreateNestedManyWithoutEnergyInputSchema).optional(),
  taskTemplates: z.lazy(() => PrivateEnergiesToTaskTemplatesCreateNestedManyWithoutEnergyInputSchema).optional(),
  skills: z.lazy(() => PrivateEnergiesToSkillsCreateNestedManyWithoutEnergyInputSchema).optional(),
  tags: z.lazy(() => PrivateEnergiesToTagsCreateNestedManyWithoutEnergyInputSchema).optional(),
  projects: z.lazy(() => PrivateEnergiesToProjectsCreateNestedManyWithoutEnergyInputSchema).optional(),
  tasks: z.lazy(() => PrivateEnergiesToTasksCreateNestedManyWithoutEnergyInputSchema).optional(),
  taskWork: z.lazy(() => PrivateEnergiesToTaskWorksCreateNestedManyWithoutEnergyInputSchema).optional(),
  privateTags: z.lazy(() => PrivateEnergiesToPrivateTagsCreateNestedManyWithoutEnergyInputSchema).optional()
}).strict();

export default PrivateEnergyCreateWithoutPersonInputSchema;
