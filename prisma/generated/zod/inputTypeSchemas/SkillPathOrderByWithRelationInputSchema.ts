import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SkillsToSkillPathsOrderByRelationAggregateInputSchema } from './SkillsToSkillPathsOrderByRelationAggregateInputSchema';
import { PersonsToSkillPathsOrderByRelationAggregateInputSchema } from './PersonsToSkillPathsOrderByRelationAggregateInputSchema';
import { SkillPathsToTagsOrderByRelationAggregateInputSchema } from './SkillPathsToTagsOrderByRelationAggregateInputSchema';
import { PrioritiesToSkillPathsOrderByRelationAggregateInputSchema } from './PrioritiesToSkillPathsOrderByRelationAggregateInputSchema';

export const SkillPathOrderByWithRelationInputSchema: z.ZodType<Prisma.SkillPathOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  info: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  skills: z.lazy(() => SkillsToSkillPathsOrderByRelationAggregateInputSchema).optional(),
  students: z.lazy(() => PersonsToSkillPathsOrderByRelationAggregateInputSchema).optional(),
  tags: z.lazy(() => SkillPathsToTagsOrderByRelationAggregateInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToSkillPathsOrderByRelationAggregateInputSchema).optional()
}).strict();

export default SkillPathOrderByWithRelationInputSchema;
