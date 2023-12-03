import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SkillsToSkillPathsOrderByRelationAggregateInputSchema } from './SkillsToSkillPathsOrderByRelationAggregateInputSchema';
import { SkillLinkOrderByRelationAggregateInputSchema } from './SkillLinkOrderByRelationAggregateInputSchema';
import { SkillsToTaskTemplatesOrderByRelationAggregateInputSchema } from './SkillsToTaskTemplatesOrderByRelationAggregateInputSchema';
import { SkillsToTasksOrderByRelationAggregateInputSchema } from './SkillsToTasksOrderByRelationAggregateInputSchema';
import { PersonsToSkillsOrderByRelationAggregateInputSchema } from './PersonsToSkillsOrderByRelationAggregateInputSchema';
import { EnergiesToSkillsOrderByRelationAggregateInputSchema } from './EnergiesToSkillsOrderByRelationAggregateInputSchema';
import { PrivateEnergiesToSkillsOrderByRelationAggregateInputSchema } from './PrivateEnergiesToSkillsOrderByRelationAggregateInputSchema';
import { PrioritiesToSkillsOrderByRelationAggregateInputSchema } from './PrioritiesToSkillsOrderByRelationAggregateInputSchema';
import { SkillsToTagsOrderByRelationAggregateInputSchema } from './SkillsToTagsOrderByRelationAggregateInputSchema';

export const SkillOrderByWithRelationInputSchema: z.ZodType<Prisma.SkillOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  info: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  paths: z.lazy(() => SkillsToSkillPathsOrderByRelationAggregateInputSchema).optional(),
  precedes: z.lazy(() => SkillLinkOrderByRelationAggregateInputSchema).optional(),
  succeeds: z.lazy(() => SkillLinkOrderByRelationAggregateInputSchema).optional(),
  taskTemplates: z.lazy(() => SkillsToTaskTemplatesOrderByRelationAggregateInputSchema).optional(),
  tasks: z.lazy(() => SkillsToTasksOrderByRelationAggregateInputSchema).optional(),
  students: z.lazy(() => PersonsToSkillsOrderByRelationAggregateInputSchema).optional(),
  energies: z.lazy(() => EnergiesToSkillsOrderByRelationAggregateInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToSkillsOrderByRelationAggregateInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToSkillsOrderByRelationAggregateInputSchema).optional(),
  tags: z.lazy(() => SkillsToTagsOrderByRelationAggregateInputSchema).optional()
}).strict();

export default SkillOrderByWithRelationInputSchema;
