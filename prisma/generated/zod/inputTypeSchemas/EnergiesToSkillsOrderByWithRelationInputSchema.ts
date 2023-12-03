import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { SkillOrderByWithRelationInputSchema } from './SkillOrderByWithRelationInputSchema';
import { EnergyOrderByWithRelationInputSchema } from './EnergyOrderByWithRelationInputSchema';

export const EnergiesToSkillsOrderByWithRelationInputSchema: z.ZodType<Prisma.EnergiesToSkillsOrderByWithRelationInput> = z.object({
  skillId: z.lazy(() => SortOrderSchema).optional(),
  energyId: z.lazy(() => SortOrderSchema).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  skill: z.lazy(() => SkillOrderByWithRelationInputSchema).optional(),
  energy: z.lazy(() => EnergyOrderByWithRelationInputSchema).optional()
}).strict();

export default EnergiesToSkillsOrderByWithRelationInputSchema;
