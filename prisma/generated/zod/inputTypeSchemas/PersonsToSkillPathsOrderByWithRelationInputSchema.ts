import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PersonOrderByWithRelationInputSchema } from './PersonOrderByWithRelationInputSchema';
import { SkillPathOrderByWithRelationInputSchema } from './SkillPathOrderByWithRelationInputSchema';

export const PersonsToSkillPathsOrderByWithRelationInputSchema: z.ZodType<Prisma.PersonsToSkillPathsOrderByWithRelationInput> = z.object({
  personId: z.lazy(() => SortOrderSchema).optional(),
  skillId: z.lazy(() => SortOrderSchema).optional(),
  notes: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  person: z.lazy(() => PersonOrderByWithRelationInputSchema).optional(),
  skillPath: z.lazy(() => SkillPathOrderByWithRelationInputSchema).optional()
}).strict();

export default PersonsToSkillPathsOrderByWithRelationInputSchema;
