import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagPersonalNameCompoundUniqueInputSchema } from './PrivateTagPersonalNameCompoundUniqueInputSchema';
import { PrivateTagWhereInputSchema } from './PrivateTagWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { PersonRelationFilterSchema } from './PersonRelationFilterSchema';
import { PersonWhereInputSchema } from './PersonWhereInputSchema';
import { PrivateTagsToProjectTemplatesListRelationFilterSchema } from './PrivateTagsToProjectTemplatesListRelationFilterSchema';
import { PrivateTagsToProjectsListRelationFilterSchema } from './PrivateTagsToProjectsListRelationFilterSchema';
import { PrivateTagsToTaskTemplatesListRelationFilterSchema } from './PrivateTagsToTaskTemplatesListRelationFilterSchema';
import { PrivateTagsToTasksListRelationFilterSchema } from './PrivateTagsToTasksListRelationFilterSchema';
import { PrioritiesToPrivateTagsListRelationFilterSchema } from './PrioritiesToPrivateTagsListRelationFilterSchema';
import { EnergiesToPrivateTagsListRelationFilterSchema } from './EnergiesToPrivateTagsListRelationFilterSchema';
import { PrivateEnergiesToPrivateTagsListRelationFilterSchema } from './PrivateEnergiesToPrivateTagsListRelationFilterSchema';

export const PrivateTagWhereUniqueInputSchema: z.ZodType<Prisma.PrivateTagWhereUniqueInput> = z.union([
  z.object({
    id: z.number(),
    personalName: z.lazy(() => PrivateTagPersonalNameCompoundUniqueInputSchema)
  }),
  z.object({
    id: z.number(),
  }),
  z.object({
    personalName: z.lazy(() => PrivateTagPersonalNameCompoundUniqueInputSchema),
  }),
])
.and(z.object({
  id: z.number().optional(),
  personalName: z.lazy(() => PrivateTagPersonalNameCompoundUniqueInputSchema).optional(),
  AND: z.union([ z.lazy(() => PrivateTagWhereInputSchema),z.lazy(() => PrivateTagWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => PrivateTagWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => PrivateTagWhereInputSchema),z.lazy(() => PrivateTagWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  info: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  nsfw: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  color: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  personId: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  person: z.union([ z.lazy(() => PersonRelationFilterSchema),z.lazy(() => PersonWhereInputSchema) ]).optional(),
  projectTemplates: z.lazy(() => PrivateTagsToProjectTemplatesListRelationFilterSchema).optional(),
  projects: z.lazy(() => PrivateTagsToProjectsListRelationFilterSchema).optional(),
  taskTemplates: z.lazy(() => PrivateTagsToTaskTemplatesListRelationFilterSchema).optional(),
  tasks: z.lazy(() => PrivateTagsToTasksListRelationFilterSchema).optional(),
  priorities: z.lazy(() => PrioritiesToPrivateTagsListRelationFilterSchema).optional(),
  energies: z.lazy(() => EnergiesToPrivateTagsListRelationFilterSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToPrivateTagsListRelationFilterSchema).optional()
}).strict());

export default PrivateTagWhereUniqueInputSchema;
