import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { PersonOrderByWithRelationInputSchema } from './PersonOrderByWithRelationInputSchema';
import { SkillOrderByWithRelationInputSchema } from './SkillOrderByWithRelationInputSchema';

export const PersonsToSkillsOrderByWithRelationInputSchema: z.ZodType<Prisma.PersonsToSkillsOrderByWithRelationInput> = z.object({
  personId: z.lazy(() => SortOrderSchema).optional(),
  skillId: z.lazy(() => SortOrderSchema).optional(),
  person: z.lazy(() => PersonOrderByWithRelationInputSchema).optional(),
  skill: z.lazy(() => SkillOrderByWithRelationInputSchema).optional()
}).strict();

export default PersonsToSkillsOrderByWithRelationInputSchema;
