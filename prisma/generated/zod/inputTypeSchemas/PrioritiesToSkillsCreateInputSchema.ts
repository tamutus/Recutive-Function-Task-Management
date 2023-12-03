import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityCreateNestedOneWithoutSkillsInputSchema } from './PriorityCreateNestedOneWithoutSkillsInputSchema';
import { SkillCreateNestedOneWithoutPrioritiesInputSchema } from './SkillCreateNestedOneWithoutPrioritiesInputSchema';

export const PrioritiesToSkillsCreateInputSchema: z.ZodType<Prisma.PrioritiesToSkillsCreateInput> = z.object({
  notes: z.string().optional().nullable(),
  priority: z.lazy(() => PriorityCreateNestedOneWithoutSkillsInputSchema),
  skill: z.lazy(() => SkillCreateNestedOneWithoutPrioritiesInputSchema)
}).strict();

export default PrioritiesToSkillsCreateInputSchema;
