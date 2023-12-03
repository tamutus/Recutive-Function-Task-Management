import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { SkillsToSkillPathsListRelationFilterSchema } from './SkillsToSkillPathsListRelationFilterSchema';
import { SkillLinkListRelationFilterSchema } from './SkillLinkListRelationFilterSchema';
import { SkillsToTaskTemplatesListRelationFilterSchema } from './SkillsToTaskTemplatesListRelationFilterSchema';
import { SkillsToTasksListRelationFilterSchema } from './SkillsToTasksListRelationFilterSchema';
import { PersonsToSkillsListRelationFilterSchema } from './PersonsToSkillsListRelationFilterSchema';
import { EnergiesToSkillsListRelationFilterSchema } from './EnergiesToSkillsListRelationFilterSchema';
import { PrivateEnergiesToSkillsListRelationFilterSchema } from './PrivateEnergiesToSkillsListRelationFilterSchema';
import { PrioritiesToSkillsListRelationFilterSchema } from './PrioritiesToSkillsListRelationFilterSchema';
import { SkillsToTagsListRelationFilterSchema } from './SkillsToTagsListRelationFilterSchema';

export const SkillWhereInputSchema: z.ZodType<Prisma.SkillWhereInput> = z.object({
  AND: z.union([ z.lazy(() => SkillWhereInputSchema),z.lazy(() => SkillWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => SkillWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => SkillWhereInputSchema),z.lazy(() => SkillWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  info: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  paths: z.lazy(() => SkillsToSkillPathsListRelationFilterSchema).optional(),
  precedes: z.lazy(() => SkillLinkListRelationFilterSchema).optional(),
  succeeds: z.lazy(() => SkillLinkListRelationFilterSchema).optional(),
  taskTemplates: z.lazy(() => SkillsToTaskTemplatesListRelationFilterSchema).optional(),
  tasks: z.lazy(() => SkillsToTasksListRelationFilterSchema).optional(),
  students: z.lazy(() => PersonsToSkillsListRelationFilterSchema).optional(),
  energies: z.lazy(() => EnergiesToSkillsListRelationFilterSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToSkillsListRelationFilterSchema).optional(),
  priorities: z.lazy(() => PrioritiesToSkillsListRelationFilterSchema).optional(),
  tags: z.lazy(() => SkillsToTagsListRelationFilterSchema).optional()
}).strict();

export default SkillWhereInputSchema;
